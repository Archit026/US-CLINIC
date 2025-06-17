const User = require('../models/User');
const Appointment = require('../models/Appointment');

// Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await User.find({ role: 'patient' })
      .select('name email phone createdAt')
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: patients.length,
      patients
    });

  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get patient by ID
const getPatientById = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await User.findById(patientId)
      .select('name email phone createdAt');

    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({
        success: false,
        message: 'Patient not found'
      });
    }

    res.status(200).json({
      success: true,
      patient
    });

  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get patient dashboard data (profile + recent appointments)
const getPatientDashboard = async (req, res) => {
  try {
    const { patientId } = req.params;

    // Get patient info
    const patient = await User.findById(patientId)
      .select('name email phone createdAt');

    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({
        success: false,
        message: 'Patient not found'
      });
    }

    // Get patient's appointments
    const appointments = await Appointment.find({ patient: patientId })
      .populate('doctor', 'name email specialization')
      .sort({ time: -1 })
      .limit(10); // Get last 10 appointments

    // Get appointment statistics
    const totalAppointments = await Appointment.countDocuments({ patient: patientId });
    const pendingAppointments = await Appointment.countDocuments({ 
      patient: patientId, 
      status: 'pending' 
    });
    const confirmedAppointments = await Appointment.countDocuments({ 
      patient: patientId, 
      status: 'confirmed' 
    });
    const completedAppointments = await Appointment.countDocuments({ 
      patient: patientId, 
      status: 'completed' 
    });

    res.status(200).json({
      success: true,
      patient,
      appointments,
      statistics: {
        total: totalAppointments,
        pending: pendingAppointments,
        confirmed: confirmedAppointments,
        completed: completedAppointments
      }
    });

  } catch (error) {
    console.error('Error fetching patient dashboard:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Update patient profile
const updatePatientProfile = async (req, res) => {
  try {
    const { patientId } = req.params;
    const { name, email, phone } = req.body;

    const patient = await User.findById(patientId);
    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({
        success: false,
        message: 'Patient not found'
      });
    }

    // Update fields if provided
    if (name) patient.name = name;
    if (email) patient.email = email;
    if (phone) patient.phone = phone;

    await patient.save();

    res.status(200).json({
      success: true,
      message: 'Patient profile updated successfully',
      patient: {
        _id: patient._id,
        name: patient.name,
        email: patient.email,
        phone: patient.phone
      }
    });

  } catch (error) {
    console.error('Error updating patient profile:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = {
  getAllPatients,
  getPatientById,
  getPatientDashboard,
  updatePatientProfile
};
