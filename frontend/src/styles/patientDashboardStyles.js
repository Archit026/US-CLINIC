const patientDashboardStyles = {  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg,rgb(116, 201, 234) 0%,rgb(117, 203, 215) 50%, #E0F6FF 100%)',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '0',
    margin: '0',
  },
  
  header: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
    welcomeText: {
    color: '#1e3a8a',
    fontSize: '28px',
    fontWeight: '600',
    margin: '0',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  
  logoutButton: {
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(238, 90, 82, 0.4)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(238, 90, 82, 0.6)',
    }
  },
  
  mainContent: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
    sectionTitle: {
    color: '#1e3a8a',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '30px',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  
  appointmentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '25px',
    marginTop: '20px',
  },
  
  appointmentCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.2)',    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    color: '#1f2937',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
      background: 'rgba(255, 255, 255, 0.2)',
    }
  },
  
  appointmentInfo: {
    marginBottom: '15px',
  },
    appointmentLabel: {
    fontWeight: '600',
    fontSize: '14px',
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  
  appointmentValue: {
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '5px',
    color: '#1f2937',
  },
  
  statusBadge: {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  
  statusConfirmed: {
    background: 'linear-gradient(45deg, #4CAF50, #45a049)',
    color: 'white',
  },
  
  statusPending: {
    background: 'linear-gradient(45deg, #ff9800, #f57c00)',
    color: 'white',
  },
  
  statusCancelled: {
    background: 'linear-gradient(45deg, #f44336, #d32f2f)',
    color: 'white',
  },
  
  notificationContainer: {
    marginTop: '15px',
    padding: '15px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
    notification: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    fontSize: '14px',
    color: '#374151',
  },
  
  notificationIcon: {
    marginRight: '8px',
    fontSize: '16px',
  },
  
  notificationNew: {
    background: 'linear-gradient(45deg, #2196F3, #1976D2)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    marginLeft: '8px',
  },
    notificationSeen: {
    color: '#6b7280',
    fontSize: '11px',
    marginLeft: '8px',
  },
    emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#374151',
  },
  
  emptyStateIcon: {
    fontSize: '64px',
    marginBottom: '20px',
    opacity: '0.6',
  },
  
  emptyStateText: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '10px',
  },
  
  emptyStateSubtext: {
    fontSize: '14px',
    opacity: '0.7',
  },
  divider: {
    margin: '20px 0',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.3), transparent)',
    border: 'none',
  },

  // New Appointment Button and Modal Styles
  newAppointmentButton: {
    background: 'linear-gradient(45deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
    margin: '20px auto',
    display: 'block',
  },

  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  },

  modalContent: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },

  modalTitle: {
    color: '#1e3a8a',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '30px',
    textAlign: 'center',
  },

  formGroup: {
    marginBottom: '20px',
  },

  formLabel: {
    display: 'block',
    color: '#374151',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  formInput: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid rgba(30, 58, 138, 0.2)',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#1f2937',
    background: 'rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },

  formInputFocus: {
    border: '2px solid #1e3a8a',
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(30, 58, 138, 0.1)',
  },

  formSelect: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid rgba(30, 58, 138, 0.2)',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#1f2937',
    background: 'rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },

  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  },

  submitButton: {
    flex: '1',
    background: 'linear-gradient(45deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  cancelButton: {
    flex: '1',
    background: 'rgba(107, 114, 128, 0.1)',
    color: '#374151',
    border: '2px solid rgba(107, 114, 128, 0.3)',
    borderRadius: '10px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // New appointment list styles
  appointmentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },

  appointmentListItem: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  appointmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.05)',
    }
  },

  appointmentMainInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },

  appointmentDateBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    minWidth: '70px',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  },

  dateDay: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '1',
  },

  dateMonth: {
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '2px',
  },

  appointmentSummary: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  doctorName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e3a8a',
  },

  appointmentTime: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#374151',
  },

  appointmentYear: {
    fontSize: '14px',
    color: '#6b7280',
  },

  appointmentActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },

  expandButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  },

  expandIcon: {
    fontSize: '12px',
    color: '#374151',
    transition: 'transform 0.3s ease',
  },

  appointmentDetails: {
    padding: '0 25px 25px 25px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.05)',
    animation: 'slideDown 0.3s ease-out',
  },

  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },

  detailItem: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  detailLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  detailValue: {
    fontSize: '16px',
    color: '#1f2937',
    lineHeight: '1.5',
  },

  doctorInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },

  doctorFullName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e3a8a',
  },

  doctorEmail: {
    fontSize: '14px',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },

  appointmentId: {
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#2563eb',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: 'monospace',
    fontWeight: '600',
  },

  notificationSection: {
    marginTop: '20px',
    padding: '15px',
    background: 'rgba(59, 130, 246, 0.05)',
    borderRadius: '10px',
    border: '1px solid rgba(59, 130, 246, 0.1)',
  },

  notificationTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  notificationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  notificationItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 12px',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },

  notificationContent: {
    fontSize: '14px',
    color: '#374151',
    flex: 1,
  },
  notificationMeta: {
    fontSize: '12px',
    marginLeft: '10px',
  },

  // Responsive styles for mobile
  '@media (max-width: 768px)': {
    appointmentMainInfo: {
      gap: '15px',
    },
    
    appointmentDateBadge: {
      minWidth: '60px',
      padding: '10px 12px',
    },
    
    dateDay: {
      fontSize: '20px',
    },
    
    doctorName: {
      fontSize: '16px',
    },
    
    appointmentTime: {
      fontSize: '14px',
    },
    
    detailsGrid: {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
    
    appointmentHeader: {
      padding: '15px 20px',
    },
    
    appointmentDetails: {
      padding: '0 20px 20px 20px',
    }
  }
};

export default patientDashboardStyles;
