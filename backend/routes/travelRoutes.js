// backend/routes/travelRoutes.js

const express = require('express');
const router = express.Router();
const axios = require('axios');

// POST /api/travel/itinerary
router.post('/itinerary', async (req, res) => {
    try {
        const rawDestination = req.body && req.body.destination;
        const destination = typeof rawDestination === 'string' ? rawDestination.trim() : '';

        if (!destination) {
            return res.status(400).json({ msg: 'Destination is required' });
        }

        // Security check: limit destination string length and reject control characters
        if (destination.length > 100) {
            return res.status(400).json({ msg: 'Destination query cannot exceed 100 characters.' });
        }
        if (/[\x00-\x1F\x7F]/.test(destination)) {
            return res.status(400).json({ msg: 'Destination contains invalid control characters.' });
        }

        const weatherApiKey = process.env.WEATHER_API_KEY;
        if (!weatherApiKey) {
            return res.status(503).json({ 
                msg: 'Weather service is currently unconfigured (missing API key).' 
            });
        }

        const encodedDestination = encodeURIComponent(destination);
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedDestination}&appid=${weatherApiKey}&units=metric`;

        // Query OpenWeatherMap with a 6-second timeout
        const weatherResponse = await axios.get(weatherApiUrl, { timeout: 6000 });
        const weatherData = weatherResponse.data;

        // Structured response for frontend consumption
        const responseData = {
            destination: weatherData.name || destination,
            temperature: Math.round(weatherData.main.temp * 10) / 10,
            description: weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : 'Clear',
            humidity: weatherData.main ? weatherData.main.humidity : null,
            icon: weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].icon : null
        };

        return res.json(responseData);

    } catch (error) {
        const requestedDest = req.body && req.body.destination ? String(req.body.destination) : 'destination';

        if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
            return res.status(504).json({ msg: 'Weather service request timed out.' });
        }

        if (error.response) {
            if (error.response.status === 404) {
                return res.status(404).json({ msg: `Could not find weather data for "${requestedDest}".` });
            }
            if (error.response.status === 401) {
                return res.status(502).json({ msg: 'Weather service authentication failed upstream.' });
            }
            return res.status(error.response.status).json({ 
                msg: `Weather service error (${error.response.status}).` 
            });
        }

        console.error('Weather API Network Error:', error.message);
        return res.status(500).json({ msg: 'Unable to connect to weather service at this time.' });
    }
});

module.exports = router;