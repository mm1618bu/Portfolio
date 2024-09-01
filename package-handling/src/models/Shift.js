const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, default: function () { return new mongoose.Types.ObjectId() }, immutable: true },
  time: { type: String, required: true }, // e.g., "12:00am - 10:30am EDT"
  skillsPreferred: { type: String, required: true }, // e.g., "LAMP Stack"
  status: { type: String, enum: ['Late Night', 'Day Shift', 'Evening Shift'], default: 'Day Shift' },
  rate: { type: String, required: true }, // e.g., "$26.00/hour"
  location: { type: String, required: true }, // e.g., "Main Location"
  duration: { type: String, required: true }, // e.g., "10 hours"
  mainTask: { type: String, required: true } // e.g., "Development and Maintenance"
});

module.exports = mongoose.model('Shift', ShiftSchema);