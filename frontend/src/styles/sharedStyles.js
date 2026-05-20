// src/styles/sharedStyles.js
// Color Palette (matching Main Page):
//   Navy Dark  : #0B1D3A
//   Navy Mid   : #122952
//   Navy Light : #1A3A6B
//   Accent Blue: #2A7DE1
//   White      : #FFFFFF
//   Off-White  : #F0F4FF
//   Gray Text  : #94A3B8

const sharedStyles = {
  page: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: '#FFFFFF',
    backgroundColor: '#0B1D3A',
    minHeight: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    backgroundColor: 'rgba(11, 29, 58, 0.95)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 2px 24px rgba(0,0,0,0.4)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    borderBottom: '1px solid rgba(42, 125, 225, 0.2)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2A7DE1',
  },
  navButton: {
    padding: '8px 18px',
    marginLeft: '10px',
    fontSize: '1rem',
    border: '1.5px solid rgba(255,255,255,0.25)',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    fontWeight: '600',
  },
  signup: {
    backgroundColor: '#2A7DE1',
    border: 'none',
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    boxShadow: '0 4px 12px rgba(42, 125, 225, 0.3)',
  },
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '40px 20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2A7DE1',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(42, 125, 225, 0.3)',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(18, 41, 82, 0.5)',
    borderTop: '1px solid rgba(42, 125, 225, 0.2)',
    fontSize: '0.9rem',
    color: '#94A3B8',
    marginTop: '60px',
  },
};

export default sharedStyles;
