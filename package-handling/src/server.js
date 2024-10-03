const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shiftRoutes = require('./routes/shifts');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://turbo-carnival-49rr7xww9gr2jw9g-3000.app.github.dev' // Allow your front-end origin
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://mmartinez16181:Ma3el683!@packagehandling.vabfw.mongodb.net/PackageHandling', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Use routes
app.use('/api/shifts', shiftRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
