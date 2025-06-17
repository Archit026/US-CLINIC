// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarStyle = {
    height: '100vh',
    width: '220px',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#2c3e50',
    padding: '20px',
    color: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif'
  };

  const itemStyle = {
    margin: '10px 0',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '6px',
    backgroundColor: '#34495e',
    textAlign: 'center'
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Admin Panel</h2>
      <div style={itemStyle} onClick={() => navigate('/admin')}>Dashboard</div>
      <div style={itemStyle} onClick={() => navigate('/admin/doctors')}>Doctors</div>
      <div style={itemStyle} onClick={() => navigate('/admin/appointments')}>Appointments</div>
      <div style={itemStyle} onClick={() => navigate('/admin/settings')}>Settings</div>
    </div>
  );
};

export default Sidebar;
