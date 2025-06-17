// src/styles/sharedStyles.js
const sharedStyles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    backgroundColor: '#f4f7fc',
    minHeight: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
  },
  navButton: {
    padding: '8px 18px',
    marginLeft: '10px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  signup: {
    backgroundColor: '#28a745',
  },
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '40px 20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #ddd',
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '60px',
  },
};

export default sharedStyles;
