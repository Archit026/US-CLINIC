// ─── US-CLINIC Patient Dashboard Styles ───────────────────────────────────────
// Color Palette (matching Main Page):
//   Navy Dark  : #0B1D3A
//   Navy Mid   : #122952
//   Navy Light : #1A3A6B
//   Accent Blue: #2A7DE1
//   White      : #FFFFFF
//   Off-White  : #F0F4FF
//   Gray Text  : #94A3B8
// ──────────────────────────────────────────────────────────────────────────────

const patientDashboardStyles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0B1D3A 0%, #122952 100%)',
    color: '#FFFFFF',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    padding: '0',
    margin: '0',
  },
  
  welcomeText: {
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: '800',
    margin: '0',
    letterSpacing: '-0.5px',
  },
  
  logoutButton: {
    background: '#EF4444',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  mainContent: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '30px',
    textAlign: 'left',
    letterSpacing: '-1px',
  },
  
  appointmentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginTop: '20px',
  },
  
  appointmentCard: {
    background: 'rgba(26, 58, 107, 0.5)',
    borderRadius: '16px',
    padding: '30px',
    border: '1px solid rgba(42, 125, 225, 0.2)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    color: '#FFFFFF',
  },
  
  appointmentInfo: {
    marginBottom: '15px',
  },
  
  appointmentLabel: {
    fontWeight: '600',
    fontSize: '14px',
    color: '#2A7DE1',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: '4px',
  },
  
  appointmentValue: {
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '5px',
    color: '#FFFFFF',
  },
  
  statusBadge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  
  statusConfirmed: {
    background: 'rgba(34, 197, 94, 0.15)',
    color: '#4ADE80',
    border: '2px solid #4ADE80',
  },
  
  statusPending: {
    background: 'rgba(251, 191, 36, 0.15)',
    color: '#FBBF24',
    border: '2px solid #FBBF24',
  },
  
  statusCancelled: {
    background: 'rgba(239, 68, 68, 0.15)',
    color: '#F87171',
    border: '2px solid #F87171',
  },
  
  notificationContainer: {
    marginTop: '15px',
    padding: '15px',
    background: 'rgba(42, 125, 225, 0.1)',
    borderRadius: '10px',
    border: '2px solid rgba(42, 125, 225, 0.2)',
  },
  
  notification: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    fontSize: '14px',
    color: '#60A5FA',
  },
  
  notificationIcon: {
    marginRight: '8px',
    fontSize: '16px',
  },
  
  notificationNew: {
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    marginLeft: '8px',
  },
  
  notificationSeen: {
    color: '#94A3B8',
    fontSize: '11px',
    marginLeft: '8px',
  },
  
  emptyState: {
    textAlign: 'center',
    padding: '80px 40px',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '2px dashed #E0E7FF',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  
  emptyStateIcon: {
    fontSize: '100px',
    marginBottom: '24px',
    opacity: '1',
  },
  
  emptyStateText: {
    fontSize: '26px',
    fontWeight: '800',
    marginBottom: '16px',
    color: '#0B1D3A',
    letterSpacing: '-0.5px',
  },
  
  emptyStateSubtext: {
    fontSize: '18px',
    opacity: '1',
    color: '#2A7DE1',
    fontWeight: '600',
  },
  
  divider: {
    margin: '20px 0',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    border: 'none',
  },

  newAppointmentButton: {
    background: '#FFFFFF',
    color: '#1E40AF',
    border: 'none',
    borderRadius: '16px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    margin: '30px auto',
    display: 'block',
  },

  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(11, 29, 58, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
    backdropFilter: 'blur(4px)',
    animation: 'fadeIn 0.3s ease-out',
  },

  modalContent: {
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)',
    border: 'none',
    borderRadius: '24px',
    padding: '45px',
    maxWidth: '520px',
    width: '90%',
    boxShadow: '0 25px 80px rgba(11, 29, 58, 0.35), 0 0 1px rgba(11, 29, 58, 0.1)',
    color: '#1A2F4D',
    animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  modalTitle: {
    background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '32px',
    textAlign: 'center',
    letterSpacing: '-0.5px',
  },

  formGroup: {
    marginBottom: '26px',
    position: 'relative',
  },

  formLabel: {
    display: 'block',
    color: '#1A2F4D',
    fontSize: '13px',
    fontWeight: '700',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  formInput: {
    width: '100%',
    padding: '14px 18px',
    border: '2px solid #E0E7FF',
    borderRadius: '12px',
    fontSize: '15px',
    color: '#1A2F4D',
    background: '#FFFFFF',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },

  formSelect: {
    width: '100%',
    padding: '14px 44px 14px 18px',
    border: '2px solid #BFDBFE',
    borderRadius: '14px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#1A2F4D',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    appearance: 'none',
    backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231E40AF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    backgroundSize: '18px',
    boxShadow: '0 4px 15px rgba(30, 64, 175, 0.18)',
  },

  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '36px',
  },

  submitButton: {
    flex: '1',
    background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)',
    letterSpacing: '0.3px',
  },

  cancelButton: {
    flex: '1',
    background: 'linear-gradient(135deg, #F3F4F6 0%, #FFFBFE 100%)',
    color: '#1A2F4D',
    border: '2px solid #E5E7EB',
    borderRadius: '12px',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    letterSpacing: '0.3px',
  },

  appointmentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },

  appointmentListItem: {
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F8FE 100%)',
    border: '3px solid #1E40AF',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  appointmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
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
    background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    minWidth: '70px',
    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)',
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
    color: '#1A2F4D',
  },

  appointmentTime: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#1E40AF',
  },

  appointmentYear: {
    fontSize: '14px',
    color: '#64748B',
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
    background: '#1E40AF',
    border: '2px solid #1E40AF',
    transition: 'all 0.3s ease',
  },

  expandIcon: {
    fontSize: '12px',
    color: '#FFFFFF',
    transition: 'transform 0.3s ease',
  },

  appointmentDetails: {
    padding: '0 25px 25px 25px',
    borderTop: '2px solid #DBEAFE',
    background: '#F9FAFB',
  },

  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },

  detailItem: {
    background: '#EFF6FF',
    borderRadius: '10px',
    padding: '15px',
    border: '2px solid #BFDBFE',
  },

  detailLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1E40AF',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  detailValue: {
    fontSize: '16px',
    color: '#1A2F4D',
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
    color: '#1A2F4D',
  },

  doctorEmail: {
    fontSize: '14px',
    color: '#1E40AF',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },

  appointmentId: {
    background: '#EFF6FF',
    color: '#1E40AF',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: 'monospace',
    fontWeight: '600',
    border: '1px solid #DBEAFE',
  },

  notificationSection: {
    marginTop: '20px',
    padding: '15px',
    background: '#EFF6FF',
    borderRadius: '10px',
    border: '2px solid #BFDBFE',
  },

  notificationTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1E40AF',
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
    background: '#FFFFFF',
    borderRadius: '8px',
    border: '1px solid #DBEAFE',
  },

  notificationContent: {
    fontSize: '14px',
    color: '#1A2F4D',
    flex: 1,
  },
  notificationMeta: {
    fontSize: '12px',
    marginLeft: '10px',
    color: '#64748B',
  },

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
