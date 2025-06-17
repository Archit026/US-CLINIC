// src/components/Navbar.js
import React from 'react';
import { logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navbarStyle = {
    height: '60px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    position: 'fixed',
    top: 0,
    left: '220px', // width of sidebar
    right: 0,
    zIndex: 10
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2c3e50'
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>🦷 DentalCare Admin</div>
      <button onClick={handleLogout} style={buttonStyle}>Logout</button>
    </div>
  );
};

export default Navbar;
