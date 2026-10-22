// my-trips.js - Traviso Saved Trips Dashboard (Stage 3)

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('trips-grid');
    const countBadge = document.getElementById('trip-count-badge');
    const toastEl = document.getElementById('toast-message');

    // Helper: Safe element creation
    function createTextEl(tag, text, className) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        el.textContent = text;
        return el;
    }

    // Helper: Display toast message
    function showToast(message, isError) {
        if (!toastEl) return;
        toastEl.textContent = message;
        toastEl.className = 'toast-notification' + (isError ? ' toast-error' : ' toast-success');
        toastEl.style.display = 'block';
        setTimeout(() => {
            if (toastEl) toastEl.style.display = 'none';
        }, 4000);
    }

    // Render Empty State
    function renderEmptyState() {
        gridContainer.innerHTML = '';
        if (countBadge) countBadge.textContent = '0 Trips';

        const emptyCard = document.createElement('div');
        emptyCard.className = 'empty-state card';

        const icon = createTextEl('div', '🧭', 'empty-icon');
        const title = createTextEl('h2', 'No Saved Trips Yet', 'empty-title');
        const desc = createTextEl('p', 'You have not saved any itineraries yet. Plan your next adventure on the planner and save it to review, edit, or print anytime!', 'empty-desc');

        const planBtn = document.createElement('a');
        planBtn.href = 'index.html';
        planBtn.className = 'btn';
        planBtn.textContent = 'Plan Your First Trip';

        emptyCard.appendChild(icon);
        emptyCard.appendChild(title);
        emptyCard.appendChild(desc);
        emptyCard.appendChild(planBtn);

        gridContainer.appendChild(emptyCard);
    }

    // Render Trips List
    function renderTrips() {
        if (!window.TravisoStorage) {
            console.error('TravisoStorage not loaded');
            return;
        }

        const trips = window.TravisoStorage.getAllTrips();

        if (!trips || trips.length === 0) {
            renderEmptyState();
            return;
        }

        if (countBadge) {
            countBadge.textContent = `${trips.length} ${trips.length === 1 ? 'Trip' : 'Trips'}`;
        }

        gridContainer.innerHTML = '';

        trips.forEach((trip) => {
            const card = document.createElement('div');
            card.className = 'saved-trip-card card';
            card.setAttribute('data-trip-id', trip.id);

            // 1. Top Row: Destination & Duration
            const topRow = document.createElement('div');
            topRow.className = 'saved-trip-top';

            const destTitle = createTextEl('h2', trip.destination, 'saved-trip-title');
            const durPill = createTextEl('span', `${trip.durationDays} ${trip.durationDays === 1 ? 'Day' : 'Days'}`, 'duration-pill');

            topRow.appendChild(destTitle);
            topRow.appendChild(durPill);
            card.appendChild(topRow);

            // 2. Dates Span
            const startStr = new Date(trip.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
            const endStr = new Date(trip.endDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
            const datesRow = createTextEl('div', `🗓️ ${startStr} — ${endStr}`, 'saved-trip-dates');
            card.appendChild(datesRow);

            // 3. Preferences Pills
            const prefsRow = document.createElement('div');
            prefsRow.className = 'saved-trip-prefs';

            if (trip.preferences) {
                const p = trip.preferences;
                if (p.travelStyle) prefsRow.appendChild(createTextEl('span', `🌿 ${p.travelStyle}`, 'pref-badge-pill'));
                if (p.companions) prefsRow.appendChild(createTextEl('span', `👥 ${p.companions}`, 'pref-badge-pill'));
                if (p.dailyPace) prefsRow.appendChild(createTextEl('span', `⚡ ${p.dailyPace}`, 'pref-badge-pill'));
            }
            card.appendChild(prefsRow);

            // 4. Interests Snippet
            if (trip.preferences && Array.isArray(trip.preferences.interests) && trip.preferences.interests.length > 0) {
                const intRow = document.createElement('div');
                intRow.className = 'saved-trip-interests';
                const intLabel = createTextEl('span', `Interests: ${trip.preferences.interests.slice(0, 3).join(', ')}${trip.preferences.interests.length > 3 ? '...' : ''}`, 'saved-trip-int-text');
                intRow.appendChild(intLabel);
                card.appendChild(intRow);
            }

            // 5. Practical Planning Utilities Snippets (Budget & Packing)
            const metaSnippetsRow = document.createElement('div');
            metaSnippetsRow.className = 'saved-trip-meta-row';

            if (trip.budget && trip.budget.totalBudget) {
                const curr = trip.budget.currency || '₹';
                const estExp = trip.budget.estimatedExpenditure || 0;
                const budText = `💰 Budget: ${curr}${Number(trip.budget.totalBudget).toLocaleString()} (Est: ${curr}${Number(estExp).toLocaleString()})`;
                metaSnippetsRow.appendChild(createTextEl('span', budText, 'saved-meta-badge'));
            }

            if (Array.isArray(trip.packingChecklist) && trip.packingChecklist.length > 0) {
                const checkedCount = trip.packingChecklist.filter(item => item.checked).length;
                const totalCount = trip.packingChecklist.length;
                const packText = `🎒 Packed: ${checkedCount}/${totalCount} items`;
                metaSnippetsRow.appendChild(createTextEl('span', packText, 'saved-meta-badge'));
            }

            if (metaSnippetsRow.children.length > 0) {
                card.appendChild(metaSnippetsRow);
            }

            // 6. Saved / Updated timestamp
            const dateObj = new Date(trip.updatedAt || trip.createdAt || Date.now());
            const dateFormatted = dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
            const timestampRow = createTextEl('div', `Updated: ${dateFormatted}`, 'saved-trip-timestamp');
            card.appendChild(timestampRow);

            // 7. Actions Row: View, Edit, Delete
            const actionsRow = document.createElement('div');
            actionsRow.className = 'saved-trip-actions';

            // View Trip
            const viewBtn = document.createElement('button');
            viewBtn.type = 'button';
            viewBtn.className = 'btn-secondary';
            viewBtn.textContent = '👁️ View Trip';
            viewBtn.addEventListener('click', () => {
                window.TravisoStorage.setActiveTripId(trip.id);
                window.TravisoStorage.setPendingTrip(trip);
                window.location.href = 'itinerary.html';
            });

            // Edit Trip
            const editBtn = document.createElement('button');
            editBtn.type = 'button';
            editBtn.className = 'btn-secondary';
            editBtn.textContent = '✏️ Edit Trip';
            editBtn.addEventListener('click', () => {
                window.TravisoStorage.setActiveTripId(trip.id);
                window.TravisoStorage.setPendingTrip(trip);
                window.location.href = 'index.html';
            });

            // Delete Trip
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'btn-danger';
            deleteBtn.textContent = '🗑️ Delete';
            deleteBtn.addEventListener('click', () => {
                const confirmDelete = window.confirm(`Are you sure you want to delete your saved trip to ${trip.destination}?`);
                if (confirmDelete) {
                    const ok = window.TravisoStorage.deleteTrip(trip.id);
                    if (ok) {
                        showToast(`Trip to ${trip.destination} was deleted successfully.`);
                        renderTrips();
                    } else {
                        showToast(`Failed to delete trip to ${trip.destination}.`, true);
                    }
                }
            });

            actionsRow.appendChild(viewBtn);
            actionsRow.appendChild(editBtn);
            actionsRow.appendChild(deleteBtn);
            card.appendChild(actionsRow);

            gridContainer.appendChild(card);
        });
    }

    // Initial render
    renderTrips();
});
