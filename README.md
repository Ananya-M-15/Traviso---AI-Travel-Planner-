Traviso is a responsive travel-planning web app that builds day-by-day
itineraries around your destination, interests, travel style,
companions, and preferred pace. It also includes weather information,
interactive maps, budget planning, packing checklists, and saved trips.

Repository: Traviso --- AI Travel
Planner
Features
- Personalized itineraries with activity recommendations based on
  interests, travel style, and companions.
- Balanced daily pacing with Light, Balanced, and Packed energy
  limits.
- Weather integration through a Node.js/Express backend and
  OpenWeatherMap API.
- Interactive maps powered by Leaflet and OpenStreetMap.
- Budget planner with editable Budget, Standard, and Premium
  estimates.
- Smart packing checklist tailored to destination and trip
  preferences.
- Saved trips with edit and delete support using browser
  localStorage.
- Print-friendly itineraries that can be saved as PDF.
Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js, Express, Axios
- APIs & Maps: OpenWeatherMap, Leaflet, OpenStreetMap
- Storage: Browser localStorage
Run Locally
Requirements
- Node.js 18 or later
- npm
- An OpenWeatherMap API key for live weather
1. Clone the repository
git clone https://github.com/Ananya-M-15/Traviso---AI-Travel-Planner-.git
cd Traviso---AI-Travel-Planner-
2. Install backend dependencies
cd backend
npm install
3. Configure environment variables
Create backend/.env from backend/.env.example and add your API key:
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key_here
Keep .env private; never commit API keys.
4. Start the backend
From the backend directory:
npm start
The API runs at http://localhost:5000. You can check its health at
http://localhost:5000/api/health.
5. Open the frontend
From the project root, start a static server:
npx -y serve ./
Open the local URL shown in the terminal. You can also use VS Code Live
Server.
Testing
Run the automated test suite from the project root:
node scratch/test_stage4.js
The project report records 93 passing tests covering itinerary
pacing, budgets, storage, map data, backend validation, and JavaScript
syntax.
Notes
- Trips are saved in the current browser using localStorage; they do
  not sync across devices.
- Budget figures are estimates, not live prices.
- login.html is a prototype UI; authentication is not implemented.
- The optimized background video is
  assets/background-video-compressed.mp4. The original 4K video is
  kept locally and excluded from Git because it exceeds GitHub's
  standard 100 MiB per-file limit.
- Live weather requires a valid API key. Itinerary planning remains
  available if weather data cannot be retrieved.
Built with ❤️ to make travel planning more personal and enjoyable.
