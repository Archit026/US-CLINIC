const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['doctor', 'patient', 'admin'] },
  isVerified: { type: Boolean, default: false },
  verificationCode: String,
  verificationCodeExpires: Date
});
module.exports = mongoose.model('User', UserSchema);