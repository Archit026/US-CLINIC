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
    backgroundColor: '#122952',
    padding: '20px',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    borderRight: '1px solid rgba(42, 125, 225, 0.2)',
  };

  const itemStyle = {
    margin: '10px 0',
    cursor: 'pointer',
    padding: '10px 12px',
    borderRadius: '8px',
    backgroundColor: 'rgba(42, 125, 225, 0.1)',
    textAlign: 'center',
    color: '#FFFFFF',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(42, 125, 225, 0.2)',
    fontWeight: '500',
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2A7DE1', fontSize: '18px', fontWeight: '800', letterSpacing: '-0.5px' }}>Admin Panel</h2>
      <div style={itemStyle} onClick={() => navigate('/admin')}>Dashboard</div>
      <div style={itemStyle} onClick={() => navigate('/admin/doctors')}>Doctors</div>
      <div style={itemStyle} onClick={() => navigate('/admin/appointments')}>Appointments</div>
      <div style={itemStyle} onClick={() => navigate('/admin/settings')}>Settings</div>
    </div>
  );
};

export default Sidebar;
