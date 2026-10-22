# Traviso — Personalized Travel Itinerary Planner

Traviso is a lightweight, responsive travel itinerary planning web application designed to help travelers create, balance, and customize day-by-day vacation plans. Built with **HTML5, CSS3, vanilla JavaScript, Node.js, Express, Axios, and the OpenWeatherMap API**, Traviso combines rule-based activity recommendation, strict daily energy pacing, live destination weather conditions, interactive geographical maps, customizable trip budgeting, and personalized packing checklists.

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Key Features](#key-features)
3. [Technology Stack & Rationale](#technology-stack--rationale)
4. [System Architecture & Data Flow](#system-architecture--data-flow)
5. [Repository Structure](#repository-structure)
6. [Prerequisites & Installation](#prerequisites--installation)
7. [Environment Configuration](#environment-configuration)
8. [Running Locally](#running-locally)
9. [How It Works](#how-it-works)
   - [Activity Recommendation & Rule-Based Scoring](#activity-recommendation--rule-based-scoring)
   - [Energy Budgeting Engine & Daily Pacing](#energy-budgeting-engine--daily-pacing)
   - [Weather Integration & Proxy Architecture](#weather-integration--proxy-architecture)
   - [Budget Planner & Destination Spending Presets](#budget-planner--destination-spending-presets)
   - [Packing Checklist Reconciliation](#packing-checklist-reconciliation)
   - [LocalStorage Trip Persistence & Lifecycle](#localstorage-trip-persistence--lifecycle)
   - [Interactive Map View (Leaflet + OpenStreetMap)](#interactive-map-view-leaflet--openstreetmap)
10. [Automated & Manual Testing](#automated--manual-testing)
11. [GitHub Readiness & Large Asset Note](#github-readiness--large-asset-note)
12. [Accessibility & Print Export](#accessibility--print-export)
13. [Known Limitations & Future Roadmap](#known-limitations--future-roadmap)
14. [Technical Interview Talking Points](#technical-interview-talking-points)

---

## Problem Statement

Travelers often struggle with one of two extremes:
1. **Generic, inflexible itineraries** that fail to match their preferred travel style, companionship, or energy levels.
2. **Overambitious schedules** that pack too many high-intensity attractions back-to-back, causing travel fatigue and rushed experiences.

Traviso solves this by replacing static tour packages with a **personalized, energy-aware recommendation engine**. Users choose their trip duration, pacing, travel companions, and personal interests. The planner computes a balanced schedule that respects strict daily energy budgets, provides restorative meal breaks, illustrates geographic landmarks, and offers realistic budgeting and packing tools—all without requiring an external database, account creation, or paid subscriptions.

---

## Key Features

- **Personalized Itinerary Engine**: Day-by-day scheduling for 1-day to 14-day trips across curated destinations (**Jaipur, Goa, Delhi, Manali, Paris**) with dynamic generic fallbacks for any world destination.
- **Strict Energy-Budget Engine**: Enforces daily energy limits across three pace presets:
  - **Light**: 4 points maximum per day (relaxed sightseeing with generous rest).
  - **Balanced**: 6 points maximum per day (steady rhythm of exploration).
  - **Packed**: 8 points maximum per day (high-energy sightseeing).
- **Rule-Based Scoring**: Evaluates activities using weighted interest matching, travel style alignment, companionship fit, fatigue penalties for consecutive heavy activities, and multi-day spacing.
- **Midday Break Guarantee**: Every day includes a dedicated low-energy dining and rest break (strictly 1 energy point).
- **Live Weather Integration**: Connects via a secure Express backend proxy to the OpenWeatherMap API, retrieving real-time destination conditions with graceful offline fallbacks.
- **Interactive Map View**: Non-blocking Leaflet + OpenStreetMap integration displaying verified landmark coordinates, day filtering, and approximate vicinity indicators without paid API keys.
- **Trip Budget Planner**: Interactive calculator with nights-based lodging and days-based dining calculations, over-budget warnings, and destination-appropriate spending presets (**Budget, Standard, Premium**).
- **Smart Packing Checklist**: Destination-tailored packing categories (winter gear for mountains, swimwear for beaches, modest temple shawls for cultural sites) with custom item management and checked state preservation.
- **Local Trip Dashboard ("My Trips")**: View, edit, update, and delete saved trips in browser `localStorage` without duplicates or ID mutation.
- **Print / Save as PDF**: Clean, print-optimized stylesheet that hides interactive controls and renders professional physical itinerary printouts.

---

## Technology Stack & Rationale

| Layer | Technology | Rationale & Justification |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 Semantic Elements | Ensures accessibility, native date pickers, semantic landmark sections, and high SEO clarity. |
| **Styling** | Vanilla CSS3 (Custom Design System) | Full control over glassmorphism visual identity, responsive flexbox/grid layouts, focus rings, and `@media (prefers-reduced-motion)` without bulky CSS framework dependencies. |
| **Frontend Logic** | Vanilla JavaScript (ES6+) | Direct DOM manipulation with safe methods (`document.createElement`, `textContent`), zero client framework overhead, and fast load times. |
| **Mapping** | Leaflet 1.9.4 & OpenStreetMap | Free, open-source mapping engine loaded via non-blocking CDN. Requires zero billing keys and falls back seamlessly when offline. |
| **Backend Runtime** | Node.js & Express 5 | Lightweight API server acting as a secure backend proxy to keep private API credentials off the public client. |
| **HTTP Client** | Axios | Reliable upstream HTTP communication with timeout controls (`timeout: 6000`) and standard HTTP status handling. |
| **Configuration** | `dotenv` | Isolates private environment variables (`PORT`, `WEATHER_API_KEY`) from source code. |
| **Weather Data** | OpenWeatherMap API | Industry-standard current weather observations providing temperature, humidity, and atmospheric descriptions. |
| **Data Storage** | Browser `localStorage` | Client-side persistence requiring no backend database, ensuring user privacy and instant offline access on the user's device. |

---

## System Architecture & Data Flow

Traviso uses a **decoupled client-proxy architecture**:

```
[ User Browser ]
   │
   ├──> 1. Form Inputs & Date Validation (script.js)
   ├──> 2. Rule-Based Scoring & Energy Scheduler (itinerary.js)
   ├──> 3. Budget Calculator & Packing Reconciler (itinerary.js)
   ├──> 4. Persistent Storage Manager (storage.js <-> localStorage)
   ├──> 5. Interactive Tile Rendering (Leaflet CDN <-> OpenStreetMap)
   │
   └──> 6. POST /api/travel/itinerary { destination }
              │
              ▼
   [ Express Backend Proxy (port 5000) ]
        - Validates string length & sanitizes input
        - Reads private process.env.WEATHER_API_KEY
        - Enforces 6s upstream request timeout
              │
              ▼ (HTTPS GET)
   [ OpenWeatherMap API ]
```

### Key Architectural Decisions:
1. **API Key Concealment**: Upstream weather keys remain strictly on the Express server. The browser client never touches or stores API secrets.
2. **Client-Side Itinerary Engine**: Itinerary scheduling and activity scoring run entirely client-side. If the backend weather server is offline, the user can still generate, customize, budget, and save complete itineraries uninterrupted.
3. **Privacy-First Local Storage**: All saved trips, budgets, and checklists are persisted directly on the user's device in `localStorage`.

---

## Repository Structure

```
Travel_Planner/
├── assets/
│   ├── background-video-compressed.mp4 # Optimized ambient background loop (14.94 MB, H.264 1080p, Git tracked)
│   ├── background-video.mp4            # Original master copy (101.93 MB, preserved locally, gitignored)
│   └── login-background.jpg            # Background visual for prototype login
├── backend/
│   ├── routes/
│   │   └── travelRoutes.js        # Validated weather proxy endpoints
│   ├── .env                       # Local environment file (ignored by Git)
│   ├── .env.example               # Template environment configuration
│   ├── package.json               # Backend dependencies & start scripts
│   └── server.js                  # Express application setup, CORS, health check
├── scratch/
│   └── test_stage4.js             # Automated test suite (93 tests)
├── index.html                     # Trip planning form & preference controls
├── itinerary.html                 # Day-by-day itinerary, map, budget & packing UI
├── itinerary.js                   # Rule engine, energy scheduler, map & budget logic
├── login.html                     # Prototype account demonstration page
├── my-trips.html                  # Saved trips dashboard
├── my-trips.js                    # Saved trips view, edit, and deletion logic
├── script.js                      # Date validation, input handling & edit mode banner
├── storage.js                     # Centralized localStorage manager with sanitization
├── style.css                      # Unified glassmorphism design system & print styles
├── .gitignore                     # Git exclusion rules (node_modules, logs, .env)
└── README.md                      # Technical project documentation
```

---

## Prerequisites & Installation

### Prerequisites
- **Node.js**: Version 18.x or higher (Tested with v24.20.0)
- **npm**: Version 9.x or higher
- A modern web browser (Chrome, Edge, Firefox, or Safari)
- *(Optional)* An active OpenWeatherMap API key (Free tier)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Traviso.git
cd Traviso
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

---

## Environment Configuration

1. In the `backend/` folder, copy the template `.env.example` to create `.env`:
   ```bash
   cp backend/.env.example backend/.env
   ```
2. Open `backend/.env` and insert your OpenWeatherMap API key:
   ```env
   PORT=5000
   WEATHER_API_KEY=your_openweathermap_api_key_here
   ```
   > **Note**: If `WEATHER_API_KEY` is omitted or invalid, Traviso's backend safely responds with status 503/502. The frontend gracefully shows an informational weather offline badge while generating the complete travel itinerary without errors.

---

## Running Locally

### Step 1: Start the Backend Weather Proxy
```bash
cd backend
npm start
```
The server will start on `http://localhost:5000`. You can verify health by visiting:
```
http://localhost:5000/api/health
```

### Step 2: Open the Frontend
Since Traviso uses vanilla HTML, CSS, and JavaScript, you can run the frontend in any of the following ways:

- **Option A (Static Server - Recommended)**:
  ```bash
  # From the project root:
  npx -y serve ./
  # Open http://localhost:3000 in your browser
  ```
- **Option B (VS Code Live Server)**:
  Right-click `index.html` in VS Code and select **"Open with Live Server"**.
- **Option C (Direct Browser Open)**:
  Double-click `index.html` or open `file:///d:/Project/Travel_Planner/index.html` directly in your browser.

---

## How It Works

### Activity Recommendation & Rule-Based Scoring

Traviso features curated attraction datasets for **Jaipur, Goa, Delhi, Manali, and Paris**, plus an algorithmic generic generator for any global destination. Each candidate activity has:
- `period`: Preferred time of day ("Morning", "Midday Break", "Afternoon", "Evening").
- `intensity`: Physical demand rating (1 = Low, 2 = Moderate, 3 = High).
- `interests`: Tagged domains (Culture, Dining, Nature, Adventure, Shopping, Photography, etc.).
- `travelStyles`: Fit for "Relaxed", "Explorer", "Adventure", or "Cultural".
- `companions`: Compatibility with "Solo", "Couple", "Friends", or "Family".

The scoring function (`scoreActivity`) evaluates candidates:
$$\text{Score} = \text{Base (100)} + \text{Interest Matches} (+45 \times N) + \text{Style Match} (+35) + \text{Companion Match} (+20)$$
**Penalties applied**:
- Consecutive high-intensity penalty ($-60$ pts) to prevent fatigue.
- Light pace penalty ($-80$ pts) against intensity 3 activities.
- Multi-day recency penalty ($-40 \times (4 - \Delta\text{days})$) to space out repeated activity types over 14-day trips.

### Energy Budgeting Engine & Daily Pacing

Defined centrally in `ENERGY_PACE_CONFIG`:
- **Light Pace**: 4 points max / day.
- **Balanced Pace**: 6 points max / day.
- **Packed Pace**: 8 points max / day.

**Scheduling Constraints**:
1. **Hard Budget Cap**: If adding an activity would cause $\sum \text{Intensity} > \text{DailyMax}$, the scheduler skips the slot or selects a lower-intensity alternative. Days never exceed their limit.
2. **Meal Break Protection**: Midday Break is reserved for dining and relaxation with **intensity strictly set to 1**. On Light pace (4 pts limit), morning scheduling preserves at least 1 point for lunch.
3. **No Same-Day Duplicates**: A Set of scheduled activity IDs ensures no attraction is scheduled twice in a single day.

### Weather Integration & Proxy Architecture

When viewing an itinerary, the frontend requests `POST http://localhost:5000/api/travel/itinerary` with `{ destination }`.
- The Express route validates that destination is a clean string under 100 characters.
- Upstream requests use an `axios` timeout of 6,000 ms.
- If upstream fails (e.g., 404 destination not found, 401 invalid key, network offline), structured JSON errors are returned.
- The frontend renders an offline notice and **never blocks or delays itinerary presentation**.

### Budget Planner & Destination Spending Presets

The budget calculator evaluates:
$$\text{Lodging Total} = \text{Accommodation Per Night} \times \text{Nights}$$
$$\text{Food Total} = \text{Dining Per Day} \times \text{Days}$$
$$\text{Estimated Expenditure} = \text{Lodging} + \text{Food} + \text{Transit} + \text{Activities} + \text{Miscellaneous}$$
$$\text{Remaining Balance} = \text{Total Budget} - \text{Estimated Expenditure}$$

**Spending Presets** (`Budget`, `Standard`, `Premium`):
- Destination-calibrated estimates for Jaipur, Goa, Delhi, Manali, Paris, and generic destinations.
- Users click a preset to instantly populate illustrative baseline numbers.
- **All fields remain 100% manually editable**.
- Inputs automatically sanitize empty strings, negative numbers, and non-numeric characters to prevent `NaN`.
- Dynamic color-coded utilization meter turns amber/red when expenditures exceed budget.

### Packing Checklist Reconciliation

Traviso generates customized packing checklists based on trip duration, weather expectations, companions, and active interests:
- Manali/mountain destinations automatically include down jackets, thermal innerwear, and trekking boots.
- Goa/beach destinations include swimwear, UV sunglasses, and dry bags.
- Cultural destinations include modest temple shawls and slip-on footwear.
- Photography interests include extra SD cards, lens kits, and spare batteries.
- **State Preservation**: When users check items or add custom items (e.g., "Camera Lens"), regenerating preferences retains all checked completion states and custom additions.

### LocalStorage Trip Persistence & Lifecycle

Managed by `storage.js` (`TravisoStorage`):
- **Unique Trip IDs**: Generated using alphanumeric timestamps (`trip_...`).
- **Update Idempotency**: Updating a trip preserves its original `id` and `createdAt` timestamp, preventing duplicate trip creation in "My Trips".
- **Edit vs. New Mode**: `index.html` displays an **"Editing Saved Trip"** banner with a single-click **"Plan New Trip Instead"** option.
- **Malformed Data Shielding**: If `localStorage` contains corrupted JSON, `TravisoStorage.getAllTrips()` catches parsing errors and returns an empty list without crashing.

### Interactive Map View (Leaflet + OpenStreetMap)

- Integrates Leaflet 1.9.4 via CDN and OpenStreetMap tile layers.
- Verified latitude/longitude coordinates for key attractions across Jaipur, Goa, Delhi, Manali, and Paris.
- Non-curated destinations fall back gracefully to regional coordinates.
- Includes a day filter button group (**All Days, Day 1, Day 2...**) to isolate individual daily routes.
- Includes clear orientation disclaimers: sequence lines illustrate visit order, not turn-by-turn navigation.
- If the CDN or network is offline, a clean fallback notification renders without breaking page execution.

---

## Automated & Manual Testing

Traviso includes a comprehensive Node.js automated test suite located at `scratch/test_stage4.js`.

### Running the Test Suite
Ensure the backend server is running on port 5000, then execute:
```bash
node scratch/test_stage4.js
```

### Verified Test Coverage (93 / 93 Passing Tests):
1. **Suite 1: Energy Engine & Daily Pacing (73 Tests)**:
   - Centralized limits for Light (4), Balanced (6), and Packed (8).
   - Strict daily enforcement across 1-day, 3-day, 7-day, and 14-day trips for all destinations.
   - Zero duplicate activities scheduled on the same day.
   - Midday meal breaks strictly verified at intensity 1.
2. **Suite 2: Budget Formulas & Destination Presets (5 Tests)**:
   - Nights $\times$ lodging and days $\times$ food formulas.
   - 1-day trip boundary checks (1 day, 1 night minimum lodging).
   - Negative values clamped to 0, zero budgets, and over-budget deficit handling without `NaN`.
   - Verified spending preset matrices for all destinations.
3. **Suite 3: Storage Lifecycle & Reconciliation (5 Tests)**:
   - Save new trip, verify unique ID and ISO timestamp.
   - Update trip, verify ID and `createdAt` preservation, verify zero duplicates.
   - Checklist reconciliation: verified custom items and checked states survive regeneration.
   - Trip deletion: verifies target deletion and non-existent ID safety.
   - Malformed `localStorage` JSON error handling.
4. **Suite 4: Map Landmark Coordinates (1 Test)**:
   - Verified coordinate arrays for all curated landmarks.
5. **Suite 5: Backend Route & Input Hardening (3 Tests)**:
   - `/api/health` 200 OK verification.
   - Oversized query strings (>100 chars) rejected with 400 Bad Request.
   - Blank / whitespace destinations rejected with 400 Bad Request.
6. **Suite 6: JavaScript Syntax Integrity (6 Tests)**:
   - Clean compilation of all frontend and backend JavaScript files.

---

## GitHub Readiness & Asset Optimization

### Background Video Optimization Summary:
- **Original Master File**: `assets/background-video.mp4` (`106,881,461 bytes` / **101.93 MiB**). Preserved permanently locally and excluded from Git tracking via `.gitignore` to prevent exceeding GitHub's 100 MiB per-file limit.
- **Production Asset**: `assets/background-video-compressed.mp4` (`15,662,725 bytes` / **14.94 MiB**).
- **Optimization Strategy**: Re-encoded from raw 4K to Full HD 1080p using H.264 (`libx264`), CRF 28, preset slow, progressive `yuv420p`, fast-start metadata (`+faststart`), and audio omitted (`-an`) since the UI enforces `muted` ambient playback.
- **Size Reduction**: **85.35% reduction** (from 101.93 MiB down to 14.94 MiB), comfortably below GitHub's 100 MiB threshold and ideal for rapid web page load times.

### Rollback Procedure:
If you ever wish to switch back to the original 4K video:
1. In `index.html`, `itinerary.html`, and `my-trips.html`, change:
   `<source src="assets/background-video-compressed.mp4" type="video/mp4">`
   back to:
   `<source src="assets/background-video.mp4" type="video/mp4">`
2. The original file remains untouched at `assets/background-video.mp4`.


---

## Accessibility & Print Export

- **Visible Focus Rings**: All interactive buttons, inputs, selects, and chips feature high-contrast focus rings (`:focus-visible` with `#38bdf8` outline).
- **Reduced Motion Support**: Respects OS accessibility settings via `@media (prefers-reduced-motion: reduce)`, disabling ambient video playback and smooth scrolling transitions.
- **Accessible Form Elements**: Associated `<label>` tags with `for` attributes and ARIA attributes for progress bars and screen readers.
- **Physical Print Stylesheet**: Dedicated `@media print` rules strip backgrounds, navigation bars, interactive drawers, and map tiles, outputting high-contrast, black-and-white multi-page itinerary itineraries.

---

## Known Limitations & Future Roadmap

### Current Limitations:
- **No Cloud Synchronization**: Trips are saved to browser `localStorage` and do not sync across different physical devices.
- **Illustrative Budget Estimates**: Budget presets and activity costs are curated estimates rather than live ticketing prices.
- **Static Authentication**: `login.html` is an accessible prototype interface illustrating future account workflows.

### Future Roadmap:
- User authentication and multi-device cloud synchronization (Node.js/Express + PostgreSQL / MongoDB).
- Live transit routing between itinerary landmarks using the OpenRouteService API.
- Export itinerary directly to Google Calendar (.ics format).
- Multi-currency live foreign exchange rates via a financial rates API.

---

## Technical Interview Talking Points

*(Prepared for technical portfolio discussions and Accenture interview)*

1. **Why Express Proxy instead of direct browser API calls?**
   *"Calling OpenWeatherMap directly from the frontend would expose our private API key in the browser's Network tab. We built a lightweight Express reverse-proxy that keeps credentials secure on the server, sanitizes incoming query strings, and standardizes error responses."*

2. **How does the Energy Budget Engine work?**
   *"Rather than packing every available hour, Traviso treats daily energy as a constrained resource budget (Light: 4, Balanced: 6, Packed: 8). The scheduler scores candidate activities using weighted travel style, companions, and interests, but enforces a strict energy cap. It prevents back-to-back heavy exertion through fatigue penalties and reserves a low-energy midday slot for restorative dining."*

3. **How is state managed without React or Redux?**
   *"We designed a centralized storage module (`TravisoStorage`) that abstracts browser `localStorage`. It enforces schema versioning, manages distinct creation and update timestamps, and handles edge cases like quota exceptions and malformed JSON without crashing the application."*

4. **How was the map integration made resilient?**
   *"We integrated Leaflet and OpenStreetMap through a non-blocking CDN. If external tiles or CDN scripts fail to load, the application catches the event and displays an informative fallback notice, ensuring the core itinerary and schedule cards remain 100% functional."*

---

*Developed with passion for clean software design and memorable travel experiences.*
