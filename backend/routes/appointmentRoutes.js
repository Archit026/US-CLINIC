const express = require('express');
const router = express.Router();
const { authMiddleware, authorizeRole } = require('../middleware/auth');
const { validateCreateAppointment, validateAppointmentId, handleValidationErrors } = require('../middleware/validation');
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

/**
 * SECURITY FIX #3, #4: All appointment routes now require authentication
 */

// Create a new appointment (authenticated users only)
router.post('/create', 
  authMiddleware, 
  validateCreateAppointment, 
  handleValidationErrors,
  createAppointment
);

// Get all appointments (doctors and patients can only see their own)
router.get('/all', authMiddleware, getAllAppointments);

// Get appointments with filters
router.get('/filter', authMiddleware, getFilteredAppointments);

// Get appointments by patient ID (patients can only see their own)
router.get('/patient/:patientId', authMiddleware, getAppointmentsByPatient);

// Get appointments by doctor ID (doctors can only see their own)
router.get('/doctor/:doctorId', authMiddleware, getAppointmentsByDoctor);

// Get appointment by ID (authorized users only)
router.get('/:appointmentId', 
  authMiddleware, 
  validateAppointmentId,
  handleValidationErrors,
  getAppointmentById
);

// Update appointment status (doctors and patients with authorization)
router.patch('/status/:appointmentId', 
  authMiddleware, 
  validateAppointmentId,
  handleValidationErrors,
  updateAppointmentStatus
);

// Delete appointment (authorized users only)
router.delete('/:appointmentId', 
  authMiddleware, 
  validateAppointmentId,
  handleValidationErrors,
  deleteAppointment
);

// Mark notification as seen
router.patch('/:appointmentId/notification/:notificationIndex/seen', 
  authMiddleware, 
  validateAppointmentId,
  handleValidationErrors,
  markNotificationSeen
);

module.exports = router;
