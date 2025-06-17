const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAllAppointments,
  getAppointmentsByPatient,
  getAppointmentsByDoctor,
  updateAppointmentStatus,
  getAppointmentById,
  deleteAppointment,
  markNotificationSeen,
  getFilteredAppointments
} = require('../controllers/appointmentController');

// Create a new appointment
router.post('/create', createAppointment);

// Get all appointments
router.get('/all', getAllAppointments);

// Get appointments with filters (query parameters)
router.get('/filter', getFilteredAppointments);

// Get appointments by patient ID
router.get('/patient/:patientId', getAppointmentsByPatient);

// Get appointments by doctor ID
router.get('/doctor/:doctorId', getAppointmentsByDoctor);

// Get appointment by ID
router.get('/:appointmentId', getAppointmentById);

// Update appointment status
router.patch('/status/:appointmentId', updateAppointmentStatus);

// Delete appointment
router.delete('/:appointmentId', deleteAppointment);

// Mark notification as seen
router.patch('/:appointmentId/notification/:notificationIndex/seen', markNotificationSeen);

// Legacy route for backward compatibility
router.post('/update-status', async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    req.params.appointmentId = appointmentId;
    req.body = { status };
    updateAppointmentStatus(req, res);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
