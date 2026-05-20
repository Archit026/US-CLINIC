import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { logoutUser, getUser } from '../utils/auth';
import { toast } from 'react-toastify';

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const currentUser = getUser();

  const handleLogout = () => {
    logoutUser();
    
    // Show logout success toast
    toast.success('Logout Successful! 👋', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
    });
    
    // Navigate to main page after showing the notification
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { label: 'Profile', path: '/profile', icon: '👤' },
    { label: 'Appointments', path: `/${currentUser?.role}`, icon: '📅' },
    { label: 'Previous Appointments', path: '/previous-appointments', icon: '📋' },
    { label: 'Doctors', path: '/doctors', icon: '👨‍⚕️' },
  ];

  const isActive = (path) => location.pathname === path;

  if (!currentUser) {
    return <div>{children}</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#F5F7FA' }}>
      {/* Top Navbar */}
      <nav style={{
        background: '#FFFFFF',
        borderBottom: scrolled ? '0 4px 12px rgba(0,0,0,0.08)' : '1px solid #E2E8F0',
        boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
        position: 'sticky',
        top: 0,
        zIndex: 900,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        height: '70px'
      }}>
        {/* Logo on Left */}
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0 4px'
          }}
        >
          <img src="/logo.png" alt="US-Clinic Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#0B1D3A' }}>US-Clinic</span>
        </Link>

        {/* Welcome Message on Right */}
        <span style={{ fontSize: '18px', fontWeight: '600', color: '#0B1D3A' }}>
          Welcome back, {currentUser.name}
        </span>
      </nav>

      {/* Sidebar (Fixed) */}
      <div style={{
        width: '260px',
        background: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
        padding: '24px 0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        zIndex: 999,
        position: 'fixed',
        top: '70px',
        left: '0',
        height: 'calc(100vh - 70px)'
      }}>
        <div style={{ padding: '0 20px' }}>
          {/* Menu Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {menuItems.map((item) => (
              <div
                key={item.path}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  fontWeight: '500',
                  fontSize: '14px',
                  color: isActive(item.path) ? '#2A7DE1' : '#64748B',
                  background: isActive(item.path) ? '#E0EAFF' : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                onMouseOver={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = '#F3F8FE';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
                onClick={() => navigate(item.path)}
              >
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: '#E2E8F0', margin: '16px 0' }}></div>

          {/* User Info */}
          <div style={{
            padding: '12px 16px',
            background: '#F8FAFC',
            borderRadius: '10px',
            fontSize: '13px',
            color: '#475569'
          }}>
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>{currentUser.name || 'User'}</div>
            <div style={{ fontSize: '12px', color: '#94A3B8' }}>{currentUser.role || 'Member'}</div>
          </div>

          {/* Logout Button */}
          <div
            style={{
              padding: '12px 16px',
              cursor: 'pointer',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '14px',
              color: '#EF4444',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '8px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#FEF2F2';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
            onClick={handleLogout}
          >
            <span style={{ fontSize: '18px' }}>🚪</span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div style={{ marginLeft: '260px', padding: '24px', flex: 1, overflowY: 'auto', minHeight: 'calc(100vh - 70px)' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
