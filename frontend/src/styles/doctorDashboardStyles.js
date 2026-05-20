// ─── US-CLINIC Doctor Dashboard Styles ────────────────────────────────────────
// Tuned for light DashboardLayout background (#F5F7FA)

const doctorDashboardStyles = {
  container: {
    minHeight: '100vh',
    background: '#F5F7FA',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '0',
    margin: '0',
    color: '#0F172A',
  },

  welcomeText: {
    color: '#0B1D3A',
    fontSize: '24px',
    fontWeight: '600',
    margin: '0',
    letterSpacing: '-0.5px',
  },

  logoutButton: {
    background: '#DC2626',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  mainContent: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  sectionTitle: {
    color: '#0B1D3A',
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '20px',
    textAlign: 'left',
    letterSpacing: '-0.3px',
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
    marginBottom: '32px',
  },

  statCard: {
    background: '#FFFFFF',
    borderRadius: '12px',
    padding: '20px 24px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
    textAlign: 'left',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
  },

  statNumber: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#0B1D3A',
    marginBottom: '4px',
    lineHeight: 1.2,
  },

  statLabel: {
    fontSize: '13px',
    color: '#64748B',
    fontWeight: '500',
    letterSpacing: '0.02em',
  },

  appointmentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
    marginTop: '16px',
  },

  appointmentCard: {
    background: '#FFFFFF',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
    transition: 'box-shadow 0.2s ease',
    color: '#0F172A',
  },

  appointmentInfo: {
    marginBottom: '12px',
  },

  appointmentLabel: {
    fontWeight: '600',
    fontSize: '12px',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },

  appointmentValue: {
    fontSize: '15px',
    fontWeight: '500',
    marginTop: '4px',
    color: '#0F172A',
  },

  statusBadge: {
    display: 'inline-block',
    padding: '5px 12px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  statusConfirmed: {
    background: '#ECFDF5',
    color: '#047857',
    border: '1px solid #A7F3D0',
  },

  statusPending: {
    background: '#FFFBEB',
    color: '#B45309',
    border: '1px solid #FDE68A',
  },

  statusCompleted: {
    background: '#EFF6FF',
    color: '#1D4ED8',
    border: '1px solid #BFDBFE',
  },

  statusCancelled: {
    background: '#FEF2F2',
    color: '#B91C1C',
    border: '1px solid #FECACA',
  },

  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '4px',
    flexWrap: 'wrap',
  },

  actionButton: {
    padding: '10px 18px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },

  acceptButton: {
    padding: '10px 18px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    background: '#059669',
    color: '#FFFFFF',
    boxShadow: '0 1px 2px rgba(5, 150, 105, 0.2)',
    transition: 'background-color 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },

  rescheduleButton: {
    padding: '10px 18px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    background: '#D97706',
    color: '#FFFFFF',
    boxShadow: '0 1px 2px rgba(217, 119, 6, 0.2)',
    transition: 'background-color 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },

  rejectButton: {
    padding: '10px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    background: '#FFFFFF',
    color: '#DC2626',
    border: '1px solid #FECACA',
    boxShadow: 'none',
    transition: 'background-color 0.15s ease, border-color 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },

  completeButton: {
    padding: '10px 18px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    background: '#2563EB',
    color: '#FFFFFF',
    boxShadow: '0 1px 2px rgba(37, 99, 235, 0.2)',
    transition: 'background-color 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },

  emptyState: {
    textAlign: 'center',
    padding: '80px 40px',
    background: '#FFFFFF',
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
    color: '#2A7DE1',
    fontWeight: '600',
  },

  notificationContainer: {
    marginTop: '12px',
    padding: '12px 16px',
    background: '#F8FAFC',
    borderRadius: '8px',
    border: '1px solid #E2E8F0',
  },

  notification: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 0',
    fontSize: '14px',
    color: '#334155',
  },

  notificationIcon: {
    marginRight: '8px',
    fontSize: '16px',
  },

  notificationNew: {
    background: '#EFF6FF',
    color: '#1D4ED8',
    padding: '3px 10px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: '600',
    border: '1px solid #BFDBFE',
  },

  notificationSeen: {
    color: '#94A3B8',
    fontSize: '11px',
    fontWeight: '500',
  },

  divider: {
    margin: '16px 0',
    height: '1px',
    background: '#E2E8F0',
    border: 'none',
  },

  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(15, 23, 42, 0.45)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  },

  modalContent: {
    background: '#FFFFFF',
    borderRadius: '12px',
    padding: '32px',
    maxWidth: '420px',
    width: '90%',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
    border: '1px solid #E2E8F0',
    color: '#0F172A',
  },

  modalTitle: {
    color: '#0B1D3A',
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '20px',
    textAlign: 'left',
  },

  formInput: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #CBD5E1',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#0F172A',
    background: '#FFFFFF',
    transition: 'border-color 0.15s ease',
    boxSizing: 'border-box',
    marginBottom: '20px',
    outline: 'none',
  },

  modalButtonGroup: {
    display: 'flex',
    gap: '12px',
  },

  submitButton: {
    flex: '1',
    background: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
  },

  cancelButton: {
    flex: '1',
    background: '#FFFFFF',
    color: '#475569',
    border: '1px solid #CBD5E1',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
  },

  appointmentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '8px',
  },

  appointmentListItem: {
    background: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
    overflow: 'hidden',
  },

  appointmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 22px',
    cursor: 'pointer',
    gap: '16px',
  },

  appointmentMainInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    minWidth: 0,
    flex: 1,
  },

  appointmentDateBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0B1D3A',
    borderRadius: '10px',
    padding: '10px 14px',
    color: '#FFFFFF',
    minWidth: '64px',
    flexShrink: 0,
  },

  dateDay: {
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '1',
  },

  dateMonth: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginTop: '3px',
    opacity: 0.9,
  },

  appointmentSummary: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    minWidth: 0,
  },

  patientName: {
    fontSize: '17px',
    fontWeight: '600',
    color: '#0B1D3A',
    lineHeight: 1.3,
  },

  appointmentTime: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#334155',
  },

  appointmentYear: {
    fontSize: '13px',
    color: '#64748B',
  },

  appointmentActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0,
  },

  expandButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: '#F1F5F9',
    border: '1px solid #E2E8F0',
    transition: 'background-color 0.15s ease',
  },

  expandIcon: {
    fontSize: '10px',
    color: '#64748B',
    transition: 'transform 0.2s ease',
  },

  appointmentDetails: {
    padding: '0 22px 22px 22px',
    borderTop: '1px solid #F1F5F9',
    background: '#FAFBFC',
  },

  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '14px',
    marginTop: '18px',
  },

  detailItem: {
    background: '#FFFFFF',
    borderRadius: '10px',
    padding: '14px 16px',
    border: '1px solid #E2E8F0',
  },

  detailLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#64748B',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },

  detailValue: {
    fontSize: '15px',
    color: '#0F172A',
    lineHeight: '1.5',
    fontWeight: '500',
  },

  patientInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  patientFullName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0B1D3A',
  },

  patientEmail: {
    fontSize: '14px',
    color: '#475569',
    wordBreak: 'break-word',
  },

  appointmentId: {
    background: '#F1F5F9',
    color: '#334155',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '13px',
    fontFamily: "'SF Mono', 'Consolas', monospace",
    fontWeight: '600',
    border: '1px solid #E2E8F0',
  },

  actionButtonsSection: {
    marginTop: '18px',
    padding: '16px',
    background: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
  },

  actionButtonsTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748B',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },

  notificationSection: {
    marginTop: '14px',
    padding: '16px',
    background: '#FFFFFF',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
  },

  notificationTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748B',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
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
    gap: '12px',
    padding: '12px 14px',
    background: '#F8FAFC',
    borderRadius: '8px',
    border: '1px solid #E2E8F0',
  },

  notificationContent: {
    fontSize: '14px',
    color: '#334155',
    flex: 1,
    lineHeight: 1.4,
  },

  notificationMeta: {
    fontSize: '12px',
    flexShrink: 0,
  },
};

export default doctorDashboardStyles;
