import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUser, logoutUser } from '../utils/auth';
import { toast } from 'react-toastify';
import AuthModal from '../components/AuthModal';
import s from '../styles/mainPageStyles';

// ── Inline CSS for keyframes & hover (minimal) ────────────────────────────────
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatCard {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }

  .hero-content   { animation: fadeUp 0.7s ease both; }
  .hero-visual    { animation: fadeUp 0.7s 0.2s ease both; }
  .feature-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 20px 50px rgba(42,125,225,0.12) !important;
    border-color: #BFDBFE !important;
  }
  .service-card:hover {
    background: rgba(42,125,225,0.1) !important;
    border-color: rgba(42,125,225,0.3) !important;
    transform: translateY(-4px);
  }
  .nav-btn-login:hover  { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.4) !important; }
  .nav-btn-signup:hover { box-shadow: 0 6px 24px rgba(42,125,225,0.7) !important; transform: translateY(-1px); }
  .cta-btn:hover  { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(42,125,225,0.6) !important; }
  .sec-btn:hover  { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.4) !important; }
  .footer-link:hover { color: #60A5FA !important; }
  .hero-float { animation: floatCard 5s ease-in-out infinite; }
  .dot-pulse  { animation: pulse 2s ease-in-out infinite; }
`;

// ── Data ──────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: '👨‍⚕️',
    title: 'Expert Doctors',
    desc: 'Certified medical professionals with years of specialised experience delivering top-tier personalised care.',
  },
  {
    icon: '📅',
    title: 'Smart Booking',
    desc: 'Schedule, reschedule or cancel appointments in seconds. Instant confirmations & automated reminders.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    desc: 'Your health data is encrypted end-to-end. HIPAA-compliant infrastructure you can trust completely.',
  },
];

const services = [
  { icon: '🦷', title: 'Dental Care',       desc: 'Complete oral health treatments from cleaning to cosmetic dentistry.' },
  { icon: '🩺', title: 'General Checkups',  desc: 'Comprehensive health examinations to keep you in peak condition.' },
  { icon: '💊', title: 'Pharmacy',          desc: 'Prescription & OTC medications dispensed by licensed pharmacists.' },
  { icon: '🔬', title: 'Lab Diagnostics',  desc: 'Fast, accurate diagnostic testing with digital result delivery.' },
  { icon: '🚑', title: 'Emergency Care',    desc: '24/7 rapid-response emergency services when you need us most.' },
  { icon: '🧘', title: 'Wellness Programs', desc: 'Preventive care, nutrition coaching, and holistic health plans.' },
];

const stats = [
  { number: '10K', suffix: '+', label: 'Happy Patients' },
  { number: '50',  suffix: '+', label: 'Expert Doctors' },
  { number: '15',  suffix: '+', label: 'Years Experience' },
  { number: '24',  suffix: '/7', label: 'Emergency Care' },
];

const appointments = [
  { icon: '🦴', name: 'Dr. Utkarsh Shrivas — Orthopaedics', time: 'Today, 11:00 AM', status: 'Confirmed' },
];

// ── Component ─────────────────────────────────────────────────────────────────
const MainPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const [currentUser, setCurrentUser] = useState(() => getUser());
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setShowDropdown(false);
    
    // Show logout success toast
    toast.success('Logout Successful! 👋', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
    });
  };

  const handleBookAppointment = () => {
    if (currentUser) {
      navigate(`/${currentUser.role}`);
    } else {
      setAuthModal({ isOpen: true, mode: 'signup' });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sync currentUser state when user is updated (login/logout)
  useEffect(() => {
    const handleUserUpdate = (event) => {
      setCurrentUser(event.detail);
    };
    window.addEventListener('userUpdated', handleUserUpdate);
    return () => window.removeEventListener('userUpdated', handleUserUpdate);
  }, []);

  return (
    <div style={s.page}>
      {/* ── Inject global CSS ── */}
      <style>{globalCSS}</style>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav style={{
        ...s.navbar,
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : '0 2px 24px rgba(0,0,0,0.3)',
      }}>
        <Link to="/" style={{ ...s.logo, textDecoration: 'none' }}>
          <img
            src="/logo.png"
            alt="US-Clinic Logo"
            style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
          />
          US<span style={s.logoAccent}>-Clinic</span>
        </Link>

        <div style={s.navButtonContainer}>
          {currentUser ? (
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2A7DE1, #1A5CB8)',
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(42, 125, 225, 0.3)',
                  border: '2px solid rgba(255,255,255,0.2)'
                }}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              {showDropdown && (
                <div style={{
                  position: 'absolute', top: '50px', right: '0',
                  background: '#FFFFFF', borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)', width: '220px',
                  padding: '8px', zIndex: 1000, color: '#0B1D3A'
                }}>
                  <div 
                    style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '8px', fontWeight: '500', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseOver={e => e.currentTarget.style.background = '#F0F4FF'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    onClick={() => navigate('/profile')}
                  >
                    👤 Profile
                  </div>
                  <div 
                    style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '8px', fontWeight: '500', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseOver={e => e.currentTarget.style.background = '#F0F4FF'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    onClick={() => navigate(`/${currentUser.role}`)}
                  >
                    📅 Appointments
                  </div>
                  <div 
                    style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '8px', fontWeight: '500', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseOver={e => e.currentTarget.style.background = '#F0F4FF'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    onClick={() => {
                      setShowDropdown(false);
                      document.getElementById('doctors-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    👨‍⚕️ Doctors
                  </div>
                  <div style={{ height: '1px', background: '#E2E8F0', margin: '4px 0' }}></div>
                  <div 
                    style={{ padding: '12px 16px', cursor: 'pointer', borderRadius: '8px', fontWeight: '500', color: '#EF4444', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseOver={e => e.currentTarget.style.background = '#FEF2F2'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="nav-btn-login"
                style={s.loginButton}
                onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
              >
                Login
              </button>
              <button
                className="nav-btn-signup"
                style={s.signupButton}
                onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section style={s.hero}>
        {/* Left: copy */}
        <div className="hero-content" style={s.heroContent}>
          <span style={s.heroBadge}>
            <span className="dot-pulse" style={{ width: 8, height: 8, background: '#4ADE80', borderRadius: '50%', display: 'inline-block' }} />
            Now accepting new patients
          </span>

          <h1 style={s.heroTitle}>
            Your Health,<br />
            <span style={s.heroTitleAccent}>Our Priority.</span>
          </h1>

          <p style={s.heroSubtitle}>
            Experience world-class dental & general healthcare with US-Clinic's
            modern management system. Book appointments, manage treatments, and
            connect with certified doctors — all in one place.
          </p>

          <div style={s.heroButtonContainer}>
            <button
              className="cta-btn"
              style={s.ctaButton}
              onClick={handleBookAppointment}
            >
              {currentUser ? '📅 Go to Dashboard' : 'Book Appointment'}
            </button>
            {!currentUser && (
              <button
                className="sec-btn"
                style={s.secondaryButton}
                onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
              >
                Sign In →
              </button>
            )}
          </div>

          {/* Trust row */}
          <div style={s.heroTrustRow}>
            <div style={s.heroAvatarGroup}>
              {['🧑‍⚕️','👩‍⚕️','🧑‍⚕️','👨‍⚕️'].map((em, i) => (
                <div key={i} style={{ ...s.heroAvatar, marginLeft: i === 0 ? 0 : '-8px', fontSize: '18px' }}>
                  {em}
                </div>
              ))}
            </div>
            <div style={s.heroTrustText}>
              <span style={s.heroTrustNumber}>10,000+ patients</span> trust US-Clinic<br />
              ⭐⭐⭐⭐⭐ &nbsp;<span style={{ color: '#4ADE80' }}>4.9/5</span> average rating
            </div>
          </div>
        </div>

        {/* Right: dashboard card */}
        <div className="hero-visual hero-float" style={s.heroVisual}>
          <div style={s.heroCard}>
            {/* glow */}
            <div style={s.heroCardGlow} />

            <p style={s.heroCardTitle}>📊 Patient Dashboard</p>

            {/* stats */}
            <div style={s.heroStatRow}>
              {[
                { n: '12', l: 'Appointments' },
                { n: '98%', l: 'Satisfaction' },
                { n: '5★', l: 'Dr. Rating' },
              ].map((st, i) => (
                <div key={i} style={s.heroStatBox}>
                  <span style={s.heroStatNum}>{st.n}</span>
                  <span style={s.heroStatLbl}>{st.l}</span>
                </div>
              ))}
            </div>

            {/* upcoming appointments */}
            <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Upcoming
            </p>
            {appointments.map((ap, i) => (
              <div key={i} style={s.appointmentPreview}>
                <div style={s.apptIcon}>{ap.icon}</div>
                <div style={s.apptInfo}>
                  <div style={s.apptName}>{ap.name}</div>
                  <div style={s.apptTime}>{ap.time}</div>
                </div>
                <span style={{
                  ...s.apptBadge,
                  background: ap.status === 'Confirmed' ? 'rgba(34,197,94,0.15)' : 'rgba(251,191,36,0.15)',
                  color:      ap.status === 'Confirmed' ? '#4ADE80'              : '#FBBF24',
                  border:     ap.status === 'Confirmed' ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(251,191,36,0.25)',
                }}>
                  {ap.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features (White) ───────────────────────────────────────────────── */}
      <section style={s.featuresSection}>
        <div style={s.featuresSectionInner}>
          <span style={s.sectionLabel}>Why US-Clinic</span>
          <h2 style={s.sectionTitle}>Built for exceptional care</h2>
          <p style={s.sectionSubtitle}>
            We combine cutting-edge technology with compassionate care to deliver
            an outstanding healthcare experience for every patient.
          </p>

          <div style={s.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className="feature-card" style={s.featureCard}>
                <div style={s.featureIconWrap}>
                  <span style={s.featureIcon}>{f.icon}</span>
                </div>
                <h3 style={s.featureTitle}>{f.title}</h3>
                <p style={s.featureDescription}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats (Navy Gradient) ──────────────────────────────────────────── */}
      <section style={s.statsSection}>
        <div style={s.statsInner}>
          {stats.map((st, i) => (
            <div key={i} style={{
              ...s.statItem,
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <div style={s.statNumber}>
                {st.number}<span style={s.statAccent}>{st.suffix}</span>
              </div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services (Dark) ───────────────────────────────────────────────── */}
      <section style={s.servicesSection}>
        <div style={s.servicesContainer}>
          <span style={{ ...s.sectionLabel, color: '#60A5FA' }}>What We Offer</span>
          <h2 style={s.servicesSectionTitle}>Our Services</h2>
          <p style={s.servicesSectionSubtitle}>
            Comprehensive healthcare services tailored to meet every aspect of your medical needs.
          </p>

          <div style={s.servicesGrid}>
            {services.map((sv, i) => (
              <div key={i} className="service-card" style={s.serviceCard}>
                <span style={s.serviceIcon}>{sv.icon}</span>
                <h4 style={s.serviceTitle}>{sv.title}</h4>
                <p style={s.serviceDescription}>{sv.desc}</p>
                <p style={s.serviceArrow}>Learn more →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (White) ───────────────────────────────────────────────────── */}
      <section style={s.ctaSection}>
        <div style={s.ctaSectionInner}>
          <span style={s.sectionLabel}>Ready to Begin?</span>
          <h2 style={s.ctaTitle}>Book your appointment today</h2>
          <p style={s.ctaDescription}>
            Join thousands of satisfied patients who trust US-Clinic for their
            healthcare needs. Your health journey starts with a single click.
          </p>
          <div style={s.ctaButtonGroup}>
            <button
              className="cta-btn"
              style={s.ctaMainButton}
              onClick={handleBookAppointment}
            >
              {currentUser ? '📅 Go to Your Dashboard' : 'Create Free Account'}
            </button>
            {!currentUser && (
              <button
                className="sec-btn"
                style={{
                  ...s.secondaryButton,
                  color: '#0B1D3A',
                  border: '1.5px solid #CBD5E1',
                  background: 'transparent',
                }}
                onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <div style={s.footerTop}>
            {/* Brand */}
            <div style={s.footerBrand}>
              <span style={{...s.footerLogo, display: 'flex', alignItems: 'center', gap: '8px'}}>
                <img src="/logo.png" alt="US-Clinic Logo" style={{ height: '24px', width: 'auto' }} />
                US-Clinic
              </span>
              <p style={s.footerTagline}>
                Modern healthcare management built for patients and doctors alike.
                Quality care, simplified.
              </p>
            </div>

            {/* Links */}
            <div style={s.footerLinks}>
              <div style={s.footerColumn}>
                <span style={s.footerColumnTitle}>Company</span>
                {['About Us', 'Our Doctors', 'Careers', 'Blog'].map(l => (
                  <span key={l} className="footer-link" style={s.footerLink}>{l}</span>
                ))}
              </div>
              <div style={s.footerColumn}>
                <span style={s.footerColumnTitle}>Services</span>
                {['Dental Care', 'General Health', 'Lab Tests', 'Pharmacy'].map(l => (
                  <span key={l} className="footer-link" style={s.footerLink}>{l}</span>
                ))}
              </div>
              <div style={s.footerColumn}>
                <span style={s.footerColumnTitle}>Legal</span>
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                  <span key={l} className="footer-link" style={s.footerLink}>{l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={s.footerContent}>
            <p style={s.footerText}>© 2025 US-Clinic. All rights reserved.</p>
            <div style={s.footerBadge}>
              <span style={s.footerBadgeItem}>🔒 HIPAA Compliant</span>
              <span style={s.footerBadgeItem}>⭐ 4.9 Rated</span>
              <span style={s.footerBadgeItem}>🏥 Licensed</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Auth Modal ──────────────────────────────────────────────────────── */}
      <AuthModal 
        isOpen={authModal.isOpen} 
        initialMode={authModal.mode} 
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onLoginSuccess={(user) => {
          setAuthModal({ isOpen: false, mode: 'login' });
          // Don't navigate here - AuthModal will handle it or user will see updated navbar
        }}
      />
    </div>
  );
};

export default MainPage;
