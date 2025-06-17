const dashboardStyles = {
  page: {
    padding: '40px 60px',
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '30px 40px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#007bff',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  label: {
    fontWeight: '600',
    marginBottom: '6px',
    display: 'block',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600',
    float: 'right',
  },
  appointmentList: {
    listStyleType: 'none',
    padding: 0,
  },
  appointmentItem: {
    backgroundColor: '#f9f9f9',
    marginBottom: '12px',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  notification: {
    color: '#ff8800',
    fontWeight: '600',
    marginTop: '6px',
  }
};

export default dashboardStyles;
