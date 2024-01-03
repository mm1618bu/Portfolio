const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct (you should use a secure password hashing library)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Implement user authentication (e.g., generate a token)
    // For simplicity, we'll just send a success message for now
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// User logout (placeholder, as logout might involve destroying a session or token)
router.post('/logout', (req, res) => {
  // Implement logout logic here
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
