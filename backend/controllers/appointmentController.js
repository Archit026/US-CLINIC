const Appointment = require('../models/Appointment');
const User = require('../models/User');

/**
 * SECURITY FIX #4, #7: Create appointment with authorization
 * Only the patient creating the appointment can do so
 */
const createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, time, reason } = req.body;

    // Security: Patient can only create appointments for themselves
    if (req.user.userId !== patientId) {
      return res.status(403).json({
        success: false,
        message: 'You can only create appointments for yourself'
      });
    }

    // Check if patient exists and is a patient
    const patient = await User.findById(patientId);
    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({
        success: false,
        message: 'Patient not found'
      });
    }

    // Check if doctor exists and is a doctor
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== 'doctor') {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }

    const appointmentTime = new Date(time);
    if (appointmentTime <= new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Appointment time must be in the future'
      });
    }

    // Check for conflicting appointments
    const conflictingAppointment = await Appointment.findOne({
      doctor: doctorId,
      time: appointmentTime,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (conflictingAppointment) {
      return res.status(409).json({
        success: false,
        message: 'Doctor is not available at this time'
      });
    }

    // Create the appointment
    const appointment = new Appointment({
      patient: patientId,
      doctor: doctorId,
      time: appointmentTime,
      reason: reason || '',
      status: 'pending',
      notifications: [{
        message: `New appointment request from ${patient.name}`,
        seen: false,
        createdAt: new Date()
      }]
    });

    await appointment.save();

    const populatedAppointment = await Appointment.findById(appointment._id)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization');

    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      appointment: populatedAppointment
    });

  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create appointment'
    });
  }
};

/**
 * SECURITY FIX #7: Get all appointments - filtered by user role
 * Patients see only their own, doctors see only their own
 */
const getAllAppointments = async (req, res) => {
  try {
    let filter = {};

    // Filter by user role
    if (req.user.role === 'patient') {
      filter.patient = req.user.userId;
    } else if (req.user.role === 'doctor') {
      filter.doctor = req.user.userId;
    }
    // Admin can see all

    const appointments = await Appointment.find(filter)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization')
      .sort({ time: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments
    });

  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments'
    });
  }
};

/**
 * SECURITY FIX #7: Get appointments by patient with authorization
 */
const getAppointmentsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    // Security: Patients can only view their own appointments
    if (req.user.role === 'patient' && req.user.userId !== patientId) {
      return res.status(403).json({
        success: false,
        message: 'You can only view your own appointments'
      });
    }

    // Validate patient exists
    const patient = await User.findById(patientId);
    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({
        success: false,
        message: 'Patient not found'
      });
    }

    const appointments = await Appointment.find({ patient: patientId })
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization')
      .sort({ time: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments
    });

  } catch (error) {
    console.error('Error fetching patient appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments'
    });
  }
};

/**
 * SECURITY FIX #7: Get appointments by doctor with authorization
 */
const getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Security: Doctors can only view their own appointments
    if (req.user.role === 'doctor' && req.user.userId !== doctorId) {
      return res.status(403).json({
        success: false,
        message: 'You can only view your own appointments'
      });
    }

    // Validate doctor exists
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== 'doctor') {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }

    const appointments = await Appointment.find({ doctor: doctorId })
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization')
      .sort({ time: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments
    });

  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments'
    });
  }
};

/**
 * SECURITY FIX #4, #7: Update appointment status with authorization
 */
const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    // Find the appointment
    const appointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name _id')
      .populate('doctor', 'name _id');

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Security: Only involved parties can update status
    const isAuthorized =
      req.user.userId === appointment.patient._id.toString() ||
      req.user.userId === appointment.doctor._id.toString();

    if (!isAuthorized) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized to update this appointment'
      });
    }

    // Update the appointment status
    appointment.status = status;

    // Add notification about status change
    const statusMessages = {
      confirmed: `Your appointment with Dr. ${appointment.doctor.name} has been confirmed`,
      cancelled: `Your appointment with Dr. ${appointment.doctor.name} has been cancelled`,
      completed: `Your appointment with Dr. ${appointment.doctor.name} has been completed`,
      pending: `Your appointment with Dr. ${appointment.doctor.name} is pending approval`
    };

    appointment.notifications.push({
      message: statusMessages[status],
      seen: false,
      createdAt: new Date()
    });

    await appointment.save();

    // Return updated appointment
    const updatedAppointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization');

    res.status(200).json({
      success: true,
      message: `Appointment status updated to ${status}`,
      appointment: updatedAppointment
    });

  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update appointment'
    });
  }
};

/**
 * SECURITY FIX #7: Get appointment by ID with authorization
 */
const getAppointmentById = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization');

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Security: Only involved parties or admin can view
    const isAuthorized =
      req.user.userId === appointment.patient._id.toString() ||
      req.user.userId === appointment.doctor._id.toString();

    if (!isAuthorized) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized to view this appointment'
      });
    }

    res.status(200).json({
      success: true,
      appointment
    });

  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointment'
    });
  }
};

/**
 * SECURITY FIX #4, #7: Delete appointment with authorization
 */
const deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId)
      .populate('patient', '_id')
      .populate('doctor', '_id');

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Security: Only involved parties can delete
    const isAuthorized =
      req.user.userId === appointment.patient._id.toString() ||
      req.user.userId === appointment.doctor._id.toString();

    if (!isAuthorized) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized to delete this appointment'
      });
    }

    await Appointment.findByIdAndDelete(appointmentId);

    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete appointment'
    });
  }
};

/**
 * Mark notification as seen
 */
const markNotificationSeen = async (req, res) => {
  try {
    const { appointmentId, notificationIndex } = req.params;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    if (notificationIndex >= appointment.notifications.length) {
      return res.status(400).json({
        success: false,
        message: 'Notification not found'
      });
    }

    appointment.notifications[notificationIndex].seen = true;
    await appointment.save();

    res.status(200).json({
      success: true,
      message: 'Notification marked as seen'
    });

  } catch (error) {
    console.error('Error marking notification as seen:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update notification'
    });
  }
};

/**
 * SECURITY FIX #6: Get appointments with filters and input validation
 */
const getFilteredAppointments = async (req, res) => {
  try {
    const { status, date, doctorId, patientId } = req.query;

    // Build filter object
    let filter = {};

    // Apply role-based filtering
    if (req.user.role === 'patient') {
      filter.patient = req.user.userId;
    } else if (req.user.role === 'doctor') {
      filter.doctor = req.user.userId;
    }

    // Apply optional filters
    if (status && ['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
      filter.status = status;
    }

    if (doctorId && req.user.role !== 'patient') {
      filter.doctor = doctorId;
    }

    if (patientId && req.user.role !== 'doctor') {
      filter.patient = patientId;
    }

    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);

// Get appointments by doctor ID
const getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Validate doctor exists
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== 'doctor') {
      return res.status(404).json({ 
        success: false, 
        message: 'Doctor not found' 
      });
    }

    const appointments = await Appointment.find({ doctor: doctorId })
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization')
      .sort({ time: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments
    });

  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Update appointment status
const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status, doctorId } = req.body;

    // Validate status
    const validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid status. Must be one of: pending, confirmed, cancelled, completed' 
      });
    }

    // Find the appointment
    const appointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name')
      .populate('doctor', 'name');

    if (!appointment) {
      return res.status(404).json({ 
        success: false, 
        message: 'Appointment not found' 
      });
    }

    // If doctorId is provided, verify the doctor owns this appointment
    if (doctorId && appointment.doctor._id.toString() !== doctorId) {
      return res.status(403).json({ 
        success: false, 
        message: 'Unauthorized to update this appointment' 
      });
    }

    // Update the appointment status
    appointment.status = status;
    
    // Add notification about status change
    const statusMessages = {
      confirmed: `Your appointment with Dr. ${appointment.doctor.name} has been confirmed`,
      cancelled: `Your appointment with Dr. ${appointment.doctor.name} has been cancelled`,
      completed: `Your appointment with Dr. ${appointment.doctor.name} has been completed`,
      pending: `Your appointment with Dr. ${appointment.doctor.name} is pending approval`
    };

    appointment.notifications.push({
      message: statusMessages[status],
      seen: false,
      createdAt: new Date()
    });

    await appointment.save();

    // Return updated appointment with populated fields
    const updatedAppointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization');

    res.status(200).json({
      success: true,
      message: `Appointment status updated to ${status}`,
      appointment: updatedAppointment
    });

  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization');

    if (!appointment) {
      return res.status(404).json({ 
        success: false, 
        message: 'Appointment not found' 
      });
    }

    res.status(200).json({
      success: true,
      appointment
    });

  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Delete appointment
const deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { userId, userRole } = req.body;

    const appointment = await Appointment.findById(appointmentId)
      .populate('patient', 'name')
      .populate('doctor', 'name');

    if (!appointment) {
      return res.status(404).json({ 
        success: false, 
        message: 'Appointment not found' 
      });
    }

    // Check authorization - only patient, doctor, or admin can delete
    const isAuthorized = 
      userRole === 'admin' ||
      (userRole === 'patient' && appointment.patient._id.toString() === userId) ||
      (userRole === 'doctor' && appointment.doctor._id.toString() === userId);

    if (!isAuthorized) {
      return res.status(403).json({ 
        success: false, 
        message: 'Unauthorized to delete this appointment' 
      });
    }

    await Appointment.findByIdAndDelete(appointmentId);

    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Mark notification as seen
const markNotificationSeen = async (req, res) => {
  try {
    const { appointmentId, notificationIndex } = req.params;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ 
        success: false, 
        message: 'Appointment not found' 
      });
    }

    if (notificationIndex >= appointment.notifications.length) {
      return res.status(400).json({ 
        success: false, 
        message: 'Notification not found' 
      });
    }

    appointment.notifications[notificationIndex].seen = true;
    await appointment.save();

    res.status(200).json({
      success: true,
      message: 'Notification marked as seen'
    });

  } catch (error) {
    console.error('Error marking notification as seen:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get appointments with filters
const getFilteredAppointments = async (req, res) => {
  try {
    const { status, date, doctorId, patientId } = req.query;
    
    // Build filter object
    let filter = {};
    
    if (status) {
      filter.status = status;
    }
    
    if (doctorId) {
      filter.doctor = doctorId;
    }
    
    if (patientId) {
      filter.patient = patientId;
    }
    
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      
      filter.time = {
        $gte: startDate,
        $lt: endDate
      };
    }

    const appointments = await Appointment.find(filter)
      .populate('patient', 'name email phone')
      .populate('doctor', 'name email specialization')
      .sort({ time: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments
    });

  } catch (error) {
    console.error('Error fetching filtered appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentsByPatient,
  getAppointmentsByDoctor,
  updateAppointmentStatus,
  getAppointmentById,
  deleteAppointment,
  markNotificationSeen,
  getFilteredAppointments
};
