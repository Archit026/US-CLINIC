const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['doctor', 'patient', 'admin'] }
});

// Add static method to check for existing doctor
UserSchema.statics.isDoctorExists = async function() {
  const doctorCount = await this.countDocuments({ role: 'doctor' });
  return doctorCount > 0;
};

module.exports = mongoose.model('User', UserSchema);