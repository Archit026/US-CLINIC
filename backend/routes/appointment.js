// In routes/appointment.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET patient appointments
router.get('/patient/:id', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.id }).populate('doctorId');
    const formatted = appointments.map(app => ({
      _id: app._id,
      doctorName: app.doctorId.name,
      date: app.date,
      time: app.time,
      status: app.status,
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching appointments' });
  }
});

module.exports = router;
