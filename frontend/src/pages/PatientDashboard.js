import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { getUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import patientDashboardStyles from '../styles/patientDashboardStyles';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [expandedAppointment, setExpandedAppointment] = useState(null);
  const [formData, setFormData] = useState({
    doctorId: '',
    time: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = getUser();
  const navigate = useNavigate();const fetchAppointments = useCallback(async () => {
    if (!user) return;
    try {
      const res = await axios.get('http://localhost:5000/appointments/all');
      // Handle new API response format
      const appointmentsData = res.data.appointments || res.data;
      const patientAppointments = appointmentsData.filter(
        appt => appt.patient._id === user._id
      );
      setAppointments(patientAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }, [user]);
  const fetchDoctors = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/auth/doctors');
      // Handle both old and new API response formats
      const doctorsData = res.data.doctors || res.data;
      setDoctors(doctorsData);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, [fetchAppointments, fetchDoctors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmitAppointment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('http://localhost:5000/appointments/create', {
        patientId: user._id,
        doctorId: formData.doctorId,
        time: formData.time,
        reason: formData.reason
      });
      
      // Reset form and close modal
      setFormData({ doctorId: '', time: '', reason: '' });
      setShowModal(false);
      
      // Refresh appointments
      fetchAppointments();
      
      // Show success message
      if (response.data.success) {
        alert('Appointment request submitted successfully!');
      } else {
        alert('Appointment created successfully!');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      const errorMessage = error.response?.data?.message || 'Error submitting appointment request. Please try again.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ doctorId: '', time: '', reason: '' });
  };
  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const toggleAppointmentDetails = (appointmentId) => {
    setExpandedAppointment(
      expandedAppointment === appointmentId ? null : appointmentId
    );
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return patientDashboardStyles.statusConfirmed;
      case 'pending':
        return patientDashboardStyles.statusPending;
      case 'cancelled':
        return patientDashboardStyles.statusCancelled;
      default:
        return patientDashboardStyles.statusPending;
    }
  };

  return (
    <div style={patientDashboardStyles.container}>
      <header style={patientDashboardStyles.header}>
        <h2 style={patientDashboardStyles.welcomeText}>
          Welcome, {user ? user.name : 'Guest'}
        </h2>
        <button 
          onClick={handleLogout} 
          style={patientDashboardStyles.logoutButton}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(238, 90, 82, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(238, 90, 82, 0.4)';
          }}
        >
          Logout
        </button>
      </header>
        <main style={patientDashboardStyles.mainContent}>
        <h3 style={patientDashboardStyles.sectionTitle}>Your Appointments</h3>
        
        <button 
          onClick={openModal}
          style={patientDashboardStyles.newAppointmentButton}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
          }}
        >
          📅 Book New Appointment
        </button>
          {appointments.length === 0 ? (
          <div style={patientDashboardStyles.emptyState}>
            <div style={patientDashboardStyles.emptyStateIcon}>📅</div>
            <div style={patientDashboardStyles.emptyStateText}>No appointments yet</div>
            <div style={patientDashboardStyles.emptyStateSubtext}>
              Book your first appointment to get started
            </div>
          </div>
        ) : (
          <div style={patientDashboardStyles.appointmentsList}>
            {appointments.map(appt => (
              <div 
                key={appt._id} 
                style={patientDashboardStyles.appointmentListItem}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                {/* Main appointment info - always visible */}
                <div 
                  style={patientDashboardStyles.appointmentHeader}
                  onClick={() => toggleAppointmentDetails(appt._id)}
                >
                  <div style={patientDashboardStyles.appointmentMainInfo}>
                    <div style={patientDashboardStyles.appointmentDateBadge}>
                      <div style={patientDashboardStyles.dateDay}>
                        {new Date(appt.time).getDate()}
                      </div>
                      <div style={patientDashboardStyles.dateMonth}>
                        {new Date(appt.time).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                    
                    <div style={patientDashboardStyles.appointmentSummary}>
                      <div style={patientDashboardStyles.doctorName}>
                        Dr. {appt.doctor.name}
                      </div>
                      <div style={patientDashboardStyles.appointmentTime}>
                        {new Date(appt.time).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                      <div style={patientDashboardStyles.appointmentYear}>
                        {new Date(appt.time).getFullYear()}
                      </div>
                    </div>
                  </div>
                  
                  <div style={patientDashboardStyles.appointmentActions}>
                    <span 
                      style={{
                        ...patientDashboardStyles.statusBadge,
                        ...getStatusStyle(appt.status)
                      }}
                    >
                      {appt.status}
                    </span>
                    
                    <div style={patientDashboardStyles.expandButton}>
                      <span style={{
                        ...patientDashboardStyles.expandIcon,
                        transform: expandedAppointment === appt._id ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        ▼
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                {expandedAppointment === appt._id && (
                  <div style={patientDashboardStyles.appointmentDetails}>
                    <div style={patientDashboardStyles.detailsGrid}>
                      <div style={patientDashboardStyles.detailItem}>
                        <div style={patientDashboardStyles.detailLabel}>
                          👨‍⚕️ Doctor Information
                        </div>
                        <div style={patientDashboardStyles.detailValue}>
                          <div style={patientDashboardStyles.doctorInfo}>
                            <div style={patientDashboardStyles.doctorFullName}>
                              Dr. {appt.doctor.name}
                            </div>
                            <div style={patientDashboardStyles.doctorEmail}>
                              📧 {appt.doctor.email}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={patientDashboardStyles.detailItem}>
                        <div style={patientDashboardStyles.detailLabel}>
                          📅 Full Date & Time
                        </div>
                        <div style={patientDashboardStyles.detailValue}>
                          {new Date(appt.time).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>

                      {appt.reason && (
                        <div style={patientDashboardStyles.detailItem}>
                          <div style={patientDashboardStyles.detailLabel}>
                            📝 Reason for Visit
                          </div>
                          <div style={patientDashboardStyles.detailValue}>
                            {appt.reason}
                          </div>
                        </div>
                      )}

                      <div style={patientDashboardStyles.detailItem}>
                        <div style={patientDashboardStyles.detailLabel}>
                          🏥 Appointment ID
                        </div>
                        <div style={patientDashboardStyles.detailValue}>
                          <code style={patientDashboardStyles.appointmentId}>
                            {appt._id.slice(-8).toUpperCase()}
                          </code>
                        </div>
                      </div>
                    </div>

                    {appt.notifications && appt.notifications.length > 0 && (
                      <div style={patientDashboardStyles.notificationSection}>
                        <div style={patientDashboardStyles.notificationTitle}>
                          🔔 Notifications
                        </div>
                        <div style={patientDashboardStyles.notificationList}>
                          {appt.notifications.map((n, idx) => (
                            <div key={idx} style={patientDashboardStyles.notificationItem}>
                              <div style={patientDashboardStyles.notificationContent}>
                                {n.message}
                              </div>
                              <div style={patientDashboardStyles.notificationMeta}>
                                {n.seen ? (
                                  <span style={patientDashboardStyles.notificationSeen}>✓ Seen</span>
                                ) : (
                                  <span style={patientDashboardStyles.notificationNew}>● New</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Appointment Booking Modal */}
      {showModal && (
        <div style={patientDashboardStyles.modalOverlay} onClick={closeModal}>
          <div 
            style={patientDashboardStyles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={patientDashboardStyles.modalTitle}>Book New Appointment</h2>
            
            <form onSubmit={handleSubmitAppointment}>
              <div style={patientDashboardStyles.formGroup}>
                <label style={patientDashboardStyles.formLabel}>Select Doctor</label>
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleInputChange}
                  style={patientDashboardStyles.formSelect}
                  required
                >
                  <option value="">Choose a doctor...</option>
                  {doctors.map(doctor => (
                    <option key={doctor._id} value={doctor._id}>
                      {doctor.name} - {doctor.email}
                    </option>
                  ))}
                </select>
              </div>

              <div style={patientDashboardStyles.formGroup}>
                <label style={patientDashboardStyles.formLabel}>Date & Time</label>
                <input
                  type="datetime-local"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  style={patientDashboardStyles.formInput}
                  min={new Date().toISOString().slice(0, 16)}
                  required
                />
              </div>

              <div style={patientDashboardStyles.formGroup}>
                <label style={patientDashboardStyles.formLabel}>Reason for Visit (Optional)</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  style={{
                    ...patientDashboardStyles.formInput,
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                  placeholder="Describe your symptoms or reason for the appointment..."
                />
              </div>

              <div style={patientDashboardStyles.buttonGroup}>
                <button
                  type="button"
                  onClick={closeModal}
                  style={patientDashboardStyles.cancelButton}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(107, 114, 128, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(107, 114, 128, 0.1)';
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...patientDashboardStyles.submitButton,
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
