// backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for local frontend development (allows file://, localhost, 127.0.0.1)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Crucial middleware allowing server to accept JSON payloads
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Traviso Backend' });
});

// Router for travel endpoints
app.use('/api/travel', require('./routes/travelRoutes'));

// 404 handler for unmatched routes
app.use((req, res) => {
    res.status(404).json({ msg: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err.message);
    res.status(500).json({ msg: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Server has started successfully on http://localhost:${PORT}`);
});