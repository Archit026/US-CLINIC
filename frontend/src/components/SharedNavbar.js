import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logoutUser, getUser } from '../utils/auth';
import { toast } from 'react-toastify';
import s from '../styles/mainPageStyles';

const SharedNavbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    { label: '👤 Profile', path: '/profile', icon: '👤' },
    { label: '📅 Appointments', path: `/${currentUser?.role}`, icon: '📅' },
    { label: '📋 Previous Appointments', path: '/previous-appointments', icon: '📋' },
    { label: '👨‍⚕️ Doctors', path: '/doctors', icon: '👨‍⚕️' },
  ];

  const isActive = (path) => location.pathname === path;

  if (!currentUser) {
    return (
      <nav style={{
        ...s.navbar,
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : '0 2px 24px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <Link to="/" style={{ ...s.logo, textDecoration: 'none' }}>
          <img src="/logo.png" alt="US-Clinic Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          US<span style={s.logoAccent}>-Clinic</span>
        </Link>

        <div style={s.navButtonContainer}>
          {onLoginClick && onSignupClick ? (
            <>
              <button
                className="nav-btn-login"
                style={s.loginButton}
                onClick={onLoginClick}
              >
                Login
              </button>
              <button
                className="nav-btn-signup"
                style={s.signupButton}
                onClick={onSignupClick}
              >
                Get Started
              </button>
            </>
          ) : (
            <button
              style={s.loginButton}
              onClick={() => navigate('/')}
            >
              Go Home
            </button>
          )}
        </div>
      </nav>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F5F7FA' }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? '260px' : '0px',
        background: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
        padding: sidebarOpen ? '24px 0' : '0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        overflowY: 'auto',
        transition: 'width 0.3s ease',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 999
      }}>
        <div style={{ padding: sidebarOpen ? '0 20px' : '0' }}>
          {/* Logo in Sidebar */}
          <Link 
            to="/" 
            style={{ 
              ...s.logo, 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
              padding: '0 4px'
            }}
          >
            <img src="/logo.png" alt="US-Clinic Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
            {sidebarOpen && <span style={{ fontSize: '16px', fontWeight: '600' }}>US-Clinic</span>}
          </Link>

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
                {sidebarOpen && <span>{item.label.replace(/^[^ ]+ /, '')}</span>}
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
            {sidebarOpen && (
              <>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{currentUser.name || 'User'}</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>{currentUser.role || 'Member'}</div>
              </>
            )}
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
            {sidebarOpen && <span>Logout</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        marginLeft: sidebarOpen ? '260px' : '0px',
        transition: 'margin-left 0.3s ease'
      }}>
        {/* Top Navbar */}
        <nav style={{
          ...s.navbar,
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : '0 2px 24px rgba(0,0,0,0.3)',
          position: 'sticky',
          top: 0,
          zIndex: 900,
          marginLeft: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 24px'
        }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            ☰
          </button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#0B1D3A' }}>Welcome back, {currentUser.name}</span>
          </div>
          <div style={{ width: '40px' }}></div>
        </nav>

        {/* Page Content */}
        <div style={{ padding: '24px', minHeight: 'calc(100vh - 80px)' }}>
          {/* Content will be rendered by child components */}
        </div>
      </div>
    </div>
  );
};

export default SharedNavbar;
