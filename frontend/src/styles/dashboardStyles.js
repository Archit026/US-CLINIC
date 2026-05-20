// ─── US-CLINIC Dashboard Styles ───────────────────────────────────────────────
// Color Palette (matching Main Page):
//   Navy Dark  : #0B1D3A
//   Navy Mid   : #122952
//   Navy Light : #1A3A6B
//   Accent Blue: #2A7DE1
//   White      : #FFFFFF
//   Off-White  : #F0F4FF
//   Gray Text  : #94A3B8
// ──────────────────────────────────────────────────────────────────────────────

const dashboardStyles = {
  page: {
    padding: '40px 60px',
    minHeight: '100vh',
    backgroundColor: '#0B1D3A',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: '#FFFFFF',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: 'rgba(18, 41, 82, 0.5)',
    borderRadius: '16px',
    padding: '30px 40px',
    border: '1px solid rgba(42, 125, 225, 0.2)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#2A7DE1',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    color: '#94A3B8',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#2A7DE1',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(42, 125, 225, 0.3)',
  },
  buttonHover: {
    backgroundColor: '#1A5CB8',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(42, 125, 225, 0.5)',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#FFFFFF',
    transition: 'all 0.3s ease',
  },
  inputFocus: {
    border: '1px solid #2A7DE1',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow: '0 0 0 4px rgba(42, 125, 225, 0.1)',
  },
  label: {
    fontWeight: '600',
    marginBottom: '6px',
    display: 'block',
    color: '#94A3B8',
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '0.5px',
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: '600',
    float: 'right',
    transition: 'all 0.3s ease',
  },
  appointmentList: {
    listStyleType: 'none',
    padding: 0,
  },
  appointmentItem: {
    backgroundColor: 'rgba(26, 58, 107, 0.5)',
    marginBottom: '12px',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid rgba(42, 125, 225, 0.2)',
    color: '#FFFFFF',
  },
  notification: {
    color: '#60A5FA',
    fontWeight: '600',
    marginTop: '6px',
  }
};

export default dashboardStyles;
