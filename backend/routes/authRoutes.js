const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ msg: 'Email already used' });
  const user = new User({ name, email, password, role });
  await user.save();
  res.json({ msg: 'Registered Successfully', user });
});

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, password, role });
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  res.json({ msg: 'Login Success', user });
});

router.get('/doctors', async (req, res) => {
  const doctors = await User.find({ role: 'doctor' });
  res.json(doctors);
});

module.exports = router;