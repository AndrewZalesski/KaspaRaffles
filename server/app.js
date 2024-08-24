
// Disable the x-powered-by header
app.disable('x-powered-by');

// Set cache-control header
app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=31536000'); // 1 year caching
    next();
});
const express = require('express');

const helmet = require('helmet');
const cors = require('cors');

// Use Helmet to enhance API's security
app.use(helmet());

// Enable CORS if needed
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const connectDB = require('./config');
const authRoutes = require('./routes/authRoutes');
const raffleRoutes = require('./routes/raffleRoutes');
const app = express();

connectDB();

app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/raffles', raffleRoutes);

module.exports = app;
