// script.js - Core Form Handling, Validation, and Navigation for Traviso

document.addEventListener('DOMContentLoaded', () => {
    const tripForm = document.getElementById('trip-form');
    const destinationInput = document.getElementById('destination');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const generateBtn = document.getElementById('generateBtn');
    const validationMessage = document.getElementById('validation-message');

    // Configurable maximum trip length
    const MAX_TRIP_DAYS = 14;

    // Helper: Show inline validation error
    function showValidation(msg) {
        if (!validationMessage) return;
        validationMessage.textContent = msg;
        validationMessage.style.display = 'block';
    }

    // Helper: Clear inline validation error
    function clearValidation() {
        if (!validationMessage) return;
        validationMessage.textContent = '';
        validationMessage.style.display = 'none';
    }

    // Set minimum allowable dates to today
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    if (startDateInput) {
        startDateInput.min = todayStr;
    }
    if (endDateInput) {
        endDateInput.min = todayStr;
    }

    // Keep endDate min synced with startDate
    if (startDateInput && endDateInput) {
        startDateInput.addEventListener('change', () => {
            clearValidation();
            if (startDateInput.value) {
                endDateInput.min = startDateInput.value;
                if (endDateInput.value && endDateInput.value < startDateInput.value) {
                    endDateInput.value = startDateInput.value;
                }
            }
        });
    }

    // Check if user specifically requested a new trip via query parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('new') === '1' && window.TravisoStorage) {
        window.TravisoStorage.clearActiveTripId();
        window.TravisoStorage.setPendingTrip(null);
    }

    // Restore previous inputs if user navigated back or is editing a saved trip
    let activeSavedTrip = null;
    try {
        let saved = null;
        if (window.TravisoStorage && window.TravisoStorage.getActiveTripId()) {
            activeSavedTrip = window.TravisoStorage.getTripById(window.TravisoStorage.getActiveTripId());
            saved = activeSavedTrip;
        }
        if (!saved && window.TravisoStorage) {
            saved = window.TravisoStorage.getPendingTrip();
        } else if (!saved) {
            const savedRaw = localStorage.getItem('traviso_pending_trip');
            if (savedRaw) saved = JSON.parse(savedRaw);
        }

        // Render distinct Edit Mode Banner (Stage 4)
        const editBannerContainer = document.getElementById('edit-trip-banner-container');
        if (activeSavedTrip && editBannerContainer) {
            editBannerContainer.innerHTML = '';
            const banner = document.createElement('div');
            banner.className = 'edit-trip-banner';

            const textSpan = document.createElement('span');
            textSpan.className = 'edit-trip-text';
            textSpan.innerHTML = `✏️ <strong>Editing Saved Trip:</strong> Modifying details for <em>${activeSavedTrip.destination}</em>.`;

            const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.className = 'edit-trip-cancel-btn';
            cancelBtn.textContent = 'Plan New Trip Instead';
            cancelBtn.addEventListener('click', () => {
                if (window.TravisoStorage) {
                    window.TravisoStorage.clearActiveTripId();
                    window.TravisoStorage.setPendingTrip(null);
                }
                window.location.href = 'index.html?new=1';
            });

            banner.appendChild(textSpan);
            banner.appendChild(cancelBtn);
            editBannerContainer.appendChild(banner);

            if (generateBtn) {
                generateBtn.textContent = 'Update & View Itinerary';
            }
        }

        if (saved) {
            if (saved.destination && destinationInput) destinationInput.value = saved.destination;
            if (saved.startDate && startDateInput) startDateInput.value = saved.startDate;
            if (saved.endDate && endDateInput) endDateInput.value = saved.endDate;
            if (startDateInput && startDateInput.value && endDateInput) {
                endDateInput.min = startDateInput.value;
            }

            // Restore preferences if previously set
            if (saved.preferences && tripForm) {
                const prefs = saved.preferences;
                if (prefs.travelStyle) {
                    const el = tripForm.querySelector(`input[name="travelStyle"][value="${prefs.travelStyle}"]`);
                    if (el) el.checked = true;
                }
                if (prefs.companions) {
                    const el = tripForm.querySelector(`input[name="companions"][value="${prefs.companions}"]`);
                    if (el) el.checked = true;
                }
                if (prefs.dailyPace) {
                    const el = tripForm.querySelector(`input[name="dailyPace"][value="${prefs.dailyPace}"]`);
                    if (el) el.checked = true;
                }
                if (Array.isArray(prefs.interests)) {
                    tripForm.querySelectorAll('input[name="interests"]').forEach((cb) => {
                        cb.checked = prefs.interests.includes(cb.value);
                    });
                }
            }
        }
    } catch (err) {
        console.warn('Unable to restore previous trip data:', err);
    }

    // Clear error message when user modifies any input
    [destinationInput, startDateInput, endDateInput].forEach((inputEl) => {
        if (inputEl) {
            inputEl.addEventListener('input', clearValidation);
        }
    });

    // Form Submission & Validation Handler
    if (tripForm) {
        tripForm.addEventListener('submit', (event) => {
            event.preventDefault();
            clearValidation();

            // 1. Destination validation
            const destination = destinationInput ? destinationInput.value.trim() : '';
            if (!destination) {
                showValidation('Please enter a destination to plan your trip.');
                if (destinationInput) destinationInput.focus();
                return;
            }

            // 2. Date presence validation
            const startDate = startDateInput ? startDateInput.value : '';
            const endDate = endDateInput ? endDateInput.value : '';

            if (!startDate) {
                showValidation('Please choose a start date.');
                if (startDateInput) startDateInput.focus();
                return;
            }

            if (!endDate) {
                showValidation('Please choose an end date.');
                if (endDateInput) endDateInput.focus();
                return;
            }

            // 3. Date logic validation (Start date cannot be in the past)
            if (startDate < todayStr) {
                showValidation('Start date cannot be in the past.');
                if (startDateInput) startDateInput.focus();
                return;
            }

            // 4. End date must be on or after start date
            if (endDate < startDate) {
                showValidation('End date must be on or after the start date.');
                if (endDateInput) endDateInput.focus();
                return;
            }

            // 5. Duration calculation & boundary check
            const startTimestamp = new Date(startDate).getTime();
            const endTimestamp = new Date(endDate).getTime();
            const diffDays = Math.round((endTimestamp - startTimestamp) / (1000 * 60 * 60 * 24)) + 1;

            if (diffDays < 1) {
                showValidation('Trip duration must be at least 1 day.');
                return;
            }

            if (diffDays > MAX_TRIP_DAYS) {
                showValidation(`Trip duration cannot exceed ${MAX_TRIP_DAYS} days. Please adjust your dates.`);
                return;
            }

            // 6. Extract selected personalization preferences
            const travelStyleEl = tripForm.querySelector('input[name="travelStyle"]:checked');
            const travelStyle = travelStyleEl ? travelStyleEl.value : 'Explorer';

            const companionsEl = tripForm.querySelector('input[name="companions"]:checked');
            const companions = companionsEl ? companionsEl.value : 'Couple';

            const dailyPaceEl = tripForm.querySelector('input[name="dailyPace"]:checked');
            const dailyPace = dailyPaceEl ? dailyPaceEl.value : 'Balanced';

            const selectedInterests = Array.from(tripForm.querySelectorAll('input[name="interests"]:checked')).map((el) => el.value);
            const interests = selectedInterests.length > 0 ? selectedInterests : ['Culture and History', 'Food and Dining'];

            const preferences = {
                travelStyle: travelStyle,
                companions: companions,
                dailyPace: dailyPace,
                interests: interests
            };

            // Preserve active trip ID and original creation timestamp / budget / checklist (Stage 4)
            const activeId = activeSavedTrip ? activeSavedTrip.id : (window.TravisoStorage ? window.TravisoStorage.getActiveTripId() : null);
            const originalCreatedAt = activeSavedTrip ? activeSavedTrip.createdAt : new Date().toISOString();

            // Safe packaging of trip data with Stage 2/3/4 preferences and preserved data
            const pendingTrip = {
                id: activeId || undefined,
                destination: destination,
                startDate: startDate,
                endDate: endDate,
                durationDays: diffDays,
                preferences: preferences,
                budget: activeSavedTrip ? activeSavedTrip.budget : null,
                packingChecklist: activeSavedTrip ? activeSavedTrip.packingChecklist : null,
                createdAt: originalCreatedAt
            };

            try {
                if (window.TravisoStorage) {
                    window.TravisoStorage.setPendingTrip(pendingTrip);
                } else {
                    localStorage.setItem('traviso_pending_trip', JSON.stringify(pendingTrip));
                }
                // Maintain legacy keys for backwards compatibility
                localStorage.setItem('destination', destination);
                localStorage.setItem('startDate', startDate);
                localStorage.setItem('endDate', endDate);
                localStorage.setItem('durationDays', String(diffDays));
            } catch (storageError) {
                console.error('LocalStorage error:', storageError);
                showValidation('Unable to save trip in your browser. Please ensure cookies/storage are enabled.');
                return;
            }

            // 7. Loading UI state & smooth navigation
            if (generateBtn) {
                generateBtn.disabled = true;
                generateBtn.textContent = 'Preparing Your Itinerary...';
            }

            // Navigate to itinerary results page
            window.location.href = 'itinerary.html';
        });
    }
});