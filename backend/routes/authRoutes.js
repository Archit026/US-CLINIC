const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendVerificationEmail = require('../helpers/sendVerificationEmail');

router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ msg: 'Email already used' });

  
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  const verificationCodeExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

  const user = new User({ name, email, password, role, isVerified: false, verificationCode, verificationCodeExpires });
  await user.save();

  
  await sendVerificationEmail(email, name, verificationCode);

  res.json({ msg: 'Registered Successfully. Please verify your email.', user: { _id: user._id, email: user.email } });
});


router.post('/verify-email', async (req, res) => {
  const { email, code } = req.body;
  const user = await User.findOne({ email, verificationCode: code });

  if (!user) return res.status(400).json({ msg: 'Invalid code or email' });
  if (user.isVerified) return res.status(400).json({ msg: 'Already verified' });
  if (user.verificationCodeExpires < new Date()) return res.status(400).json({ msg: 'Code expired' });

  user.isVerified = true;
  user.verificationCode = undefined;
  user.verificationCodeExpires = undefined;
  await user.save();

  res.json({ msg: 'Email verified successfully' });
});

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, password, role });
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  if (!user.isVerified) return res.status(403).json({ msg: 'Please verify your email before logging in.' });
  res.json({ msg: 'Login Success', user });
});

router.get('/doctors', async (req, res) => {
  const doctors = await User.find({ role: 'doctor' });
  res.json(doctors);
});

module.exports = router;