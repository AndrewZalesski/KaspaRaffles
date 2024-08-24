const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Log in an existing user
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/user
// @desc    Get the authenticated user's information
// @access  Private
router.get('/user', auth, getUser);

module.exports = router;
