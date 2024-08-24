const express = require('express');
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
