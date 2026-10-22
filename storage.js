// storage.js - Traviso Centralized Local Storage Manager (Stage 3)

(function(window) {
    'use strict';

    const STORAGE_KEY_TRIPS = 'traviso_trips';
    const STORAGE_KEY_PENDING = 'traviso_pending_trip';
    const STORAGE_KEY_ACTIVE_ID = 'traviso_active_trip_id';
    const SCHEMA_VERSION = '3.0';

    // Helper: Generate a unique, stable trip ID
    function generateId() {
        return 'trip_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
    }

    // Helper: Sanitize single trip record to guarantee schema stability
    function sanitizeTripRecord(raw) {
        if (!raw || typeof raw !== 'object') return null;
        if (!raw.destination || !raw.startDate || !raw.endDate) return null;

        const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id.trim() : generateId();
        const durationDays = parseInt(raw.durationDays, 10) > 0 ? parseInt(raw.durationDays, 10) : 1;

        return {
            id: id,
            schemaVersion: SCHEMA_VERSION,
            destination: String(raw.destination).trim(),
            startDate: String(raw.startDate),
            endDate: String(raw.endDate),
            durationDays: durationDays,
            preferences: raw.preferences && typeof raw.preferences === 'object' ? {
                travelStyle: raw.preferences.travelStyle || 'Explorer',
                companions: raw.preferences.companions || 'Couple',
                dailyPace: raw.preferences.dailyPace || 'Balanced',
                interests: Array.isArray(raw.preferences.interests) ? raw.preferences.interests : ['Culture and History', 'Food and Dining']
            } : {
                travelStyle: 'Explorer',
                companions: 'Couple',
                dailyPace: 'Balanced',
                interests: ['Culture and History', 'Food and Dining']
            },
            itineraryPlan: raw.itineraryPlan || null,
            weatherSnapshot: raw.weatherSnapshot || null,
            budget: raw.budget && typeof raw.budget === 'object' ? raw.budget : null,
            packingChecklist: Array.isArray(raw.packingChecklist) ? raw.packingChecklist : null,
            createdAt: raw.createdAt || new Date().toISOString(),
            updatedAt: raw.updatedAt || new Date().toISOString()
        };
    }

    const TravisoStorage = {
        // 1. Get all saved trips safely
        getAllTrips: function() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY_TRIPS);
                if (!raw) return [];
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed)) return [];

                const validTrips = [];
                for (let i = 0; i < parsed.length; i++) {
                    const clean = sanitizeTripRecord(parsed[i]);
                    if (clean) validTrips.push(clean);
                }
                return validTrips;
            } catch (err) {
                console.warn('TravisoStorage: Error reading saved trips:', err);
                return [];
            }
        },

        // 2. Get specific saved trip by ID
        getTripById: function(id) {
            if (!id) return null;
            const trips = this.getAllTrips();
            return trips.find(t => t.id === id) || null;
        },

        // 3. Save or update a trip record
        saveTrip: function(tripData) {
            try {
                if (!tripData || !tripData.destination || !tripData.startDate || !tripData.endDate) {
                    return { success: false, error: 'Destination and travel dates are required.' };
                }

                const trips = this.getAllTrips();
                let targetId = tripData.id;
                let existingIndex = -1;

                if (targetId) {
                    existingIndex = trips.findIndex(t => t.id === targetId);
                }

                const now = new Date().toISOString();
                let recordToSave;

                if (existingIndex >= 0) {
                    // Update existing record preserving original id and createdAt
                    const existing = trips[existingIndex];
                    recordToSave = sanitizeTripRecord(Object.assign({}, existing, tripData, {
                        id: existing.id,
                        createdAt: existing.createdAt,
                        updatedAt: now
                    }));
                    trips[existingIndex] = recordToSave;
                } else {
                    // Create new trip record
                    targetId = targetId || generateId();
                    recordToSave = sanitizeTripRecord(Object.assign({}, tripData, {
                        id: targetId,
                        createdAt: now,
                        updatedAt: now
                    }));
                    trips.unshift(recordToSave); // Place newest trips at the beginning
                }

                localStorage.setItem(STORAGE_KEY_TRIPS, JSON.stringify(trips));
                this.setActiveTripId(recordToSave.id);

                return { success: true, trip: recordToSave };
            } catch (err) {
                console.error('TravisoStorage: Failed saving trip:', err);
                let message = 'Failed to save trip to browser storage.';
                if (err && err.name === 'QuotaExceededError') {
                    message = 'Browser storage quota exceeded. Please delete some saved trips.';
                }
                return { success: false, error: message };
            }
        },

        // 4. Delete single trip by ID
        deleteTrip: function(id) {
            try {
                if (!id) return false;
                const trips = this.getAllTrips();
                const filtered = trips.filter(t => t.id !== id);
                if (filtered.length === trips.length) return false; // Nothing was deleted

                localStorage.setItem(STORAGE_KEY_TRIPS, JSON.stringify(filtered));

                // If currently active trip was deleted, clear active pointer
                if (this.getActiveTripId() === id) {
                    this.clearActiveTripId();
                }
                return true;
            } catch (err) {
                console.error('TravisoStorage: Failed deleting trip:', err);
                return false;
            }
        },

        // 5. Active Trip ID Pointer
        getActiveTripId: function() {
            try {
                return localStorage.getItem(STORAGE_KEY_ACTIVE_ID) || null;
            } catch (_) {
                return null;
            }
        },

        setActiveTripId: function(id) {
            try {
                if (id) {
                    localStorage.setItem(STORAGE_KEY_ACTIVE_ID, String(id));
                } else {
                    this.clearActiveTripId();
                }
            } catch (e) {
                console.warn('TravisoStorage: Failed setting active trip id:', e);
            }
        },

        clearActiveTripId: function() {
            try {
                localStorage.removeItem(STORAGE_KEY_ACTIVE_ID);
            } catch (_) {}
        },

        // 6. Pending Trip (in-transit form data)
        getPendingTrip: function() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY_PENDING);
                if (!raw) return null;
                return JSON.parse(raw);
            } catch (e) {
                console.warn('TravisoStorage: Error reading pending trip:', e);
                return null;
            }
        },

        setPendingTrip: function(tripData) {
            try {
                if (tripData) {
                    localStorage.setItem(STORAGE_KEY_PENDING, JSON.stringify(tripData));
                } else {
                    localStorage.removeItem(STORAGE_KEY_PENDING);
                }
            } catch (e) {
                console.warn('TravisoStorage: Error writing pending trip:', e);
            }
        }
    };

    // Export globally for browser usage
    window.TravisoStorage = TravisoStorage;

})(window);
