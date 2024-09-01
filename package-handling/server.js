const express = require('express');
const mongoose = require('mongoose');
const shiftRoutes = require('./src/routes/shifts'); // Import the routes

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://mmartinez16181:Ma3el683!@packagehandling.vabfw.mongodb.net/,package-handling', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/shifts', shiftRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
