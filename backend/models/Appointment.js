const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time: Date,
  status: { type: String, default: 'Pending' },
  notifications: [{ message: String, seen: Boolean }],
  paymentId: { type: String, required: true },
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  fee: { type: Number, required: true }
});
module.exports = mongoose.model('Appointment', AppointmentSchema);