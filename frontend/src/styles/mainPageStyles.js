// ─── US-CLINIC Main Page Styles ───────────────────────────────────────────────
// Color Palette:
//   Navy Dark  : #0B1D3A
//   Navy Mid   : #122952
//   Navy Light : #1A3A6B
//   Accent Blue: #2A7DE1
//   White      : #FFFFFF
//   Off-White  : #F0F4FF
//   Gray Text  : #94A3B8
// ──────────────────────────────────────────────────────────────────────────────

const mainPageStyles = {

  // ── Page Wrapper ─────────────────────────────────────────────────────────────
  page: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#0B1D3A',
    color: '#FFFFFF',
    overflowX: 'hidden',
  },

  // ── Google Font Inject (applied via index.html or index.css) ─────────────────

  // ── Navbar ───────────────────────────────────────────────────────────────────
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 60px',
    height: '72px',
    background: 'rgba(11, 29, 58, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(42, 125, 225, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 24px rgba(0,0,0,0.4)',
  },

  logo: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: '-0.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },

  logoAccent: {
    color: '#2A7DE1',
  },

  navLinks: {
    display: 'flex',
    gap: '36px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  navLink: {
    color: '#94A3B8',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.25s ease',
    textDecoration: 'none',
    letterSpacing: '0.3px',
  },

  navButtonContainer: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },

  loginButton: {
    padding: '9px 22px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#FFFFFF',
    background: 'transparent',
    border: '1.5px solid rgba(255,255,255,0.25)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    letterSpacing: '0.3px',
  },

  signupButton: {
    padding: '9px 22px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#FFFFFF',
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: '0 4px 14px rgba(42,125,225,0.45)',
    letterSpacing: '0.3px',
  },

  // ── Hero Section ──────────────────────────────────────────────────────────────
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 60px',
    gap: '60px',
    flexWrap: 'wrap',
    minHeight: 'calc(100vh - 72px)',
  },

  heroContent: {
    flex: '1',
    minWidth: '320px',
    maxWidth: '580px',
  },

  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(42, 125, 225, 0.15)',
    border: '1px solid rgba(42, 125, 225, 0.35)',
    borderRadius: '100px',
    padding: '6px 16px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#60A5FA',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    marginBottom: '24px',
  },

  heroTitle: {
    fontSize: '58px',
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: '1.1',
    marginBottom: '24px',
    letterSpacing: '-1.5px',
  },

  heroTitleAccent: {
    background: 'linear-gradient(135deg, #2A7DE1 0%, #60A5FA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  heroSubtitle: {
    fontSize: '18px',
    color: '#94A3B8',
    lineHeight: '1.75',
    marginBottom: '44px',
    fontWeight: '400',
  },

  heroButtonContainer: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  ctaButton: {
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 22px rgba(42,125,225,0.5)',
    letterSpacing: '0.3px',
  },

  secondaryButton: {
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    background: 'transparent',
    color: '#FFFFFF',
    border: '1.5px solid rgba(255,255,255,0.2)',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.3px',
  },

  heroTrustRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '48px',
  },

  heroAvatarGroup: {
    display: 'flex',
  },

  heroAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '2px solid #0B1D3A',
    fontSize: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-8px',
    background: 'linear-gradient(135deg, #1A3A6B, #2A7DE1)',
    flexShrink: 0,
  },

  heroTrustText: {
    fontSize: '13px',
    color: '#94A3B8',
    lineHeight: '1.5',
  },

  heroTrustNumber: {
    fontWeight: '700',
    color: '#FFFFFF',
  },

  heroVisual: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '520px',
    position: 'relative',
  },

  heroCard: {
    background: 'linear-gradient(135deg, #122952 0%, #1A3A6B 100%)',
    borderRadius: '24px',
    padding: '40px',
    border: '1px solid rgba(42,125,225,0.2)',
    boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
    position: 'relative',
    overflow: 'hidden',
  },

  heroCardGlow: {
    position: 'absolute',
    top: '-60px',
    right: '-60px',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(42,125,225,0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },

  heroCardTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#60A5FA',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '24px',
  },

  heroStatRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '28px',
  },

  heroStatBox: {
    flex: 1,
    background: 'rgba(255,255,255,0.06)',
    borderRadius: '12px',
    padding: '18px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.08)',
  },

  heroStatNum: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#FFFFFF',
    display: 'block',
  },

  heroStatLbl: {
    fontSize: '12px',
    color: '#94A3B8',
    marginTop: '4px',
    display: 'block',
  },

  appointmentPreview: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    border: '1px solid rgba(255,255,255,0.07)',
    marginBottom: '12px',
  },

  apptIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #2A7DE1, #1A5CB8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    flexShrink: 0,
  },

  apptInfo: {
    flex: 1,
  },

  apptName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: '2px',
  },

  apptTime: {
    fontSize: '12px',
    color: '#94A3B8',
  },

  apptBadge: {
    background: 'rgba(34,197,94,0.15)',
    color: '#4ADE80',
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '100px',
    border: '1px solid rgba(34,197,94,0.25)',
  },

  // ── Divider ───────────────────────────────────────────────────────────────────
  divider: {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    margin: '0',
  },

  // ── Features Section (White Background) ──────────────────────────────────────
  featuresSection: {
    background: '#FFFFFF',
    padding: '100px 60px',
  },

  featuresSectionInner: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  sectionLabel: {
    display: 'block',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '700',
    color: '#2A7DE1',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '14px',
  },

  sectionTitle: {
    fontSize: '38px',
    fontWeight: '800',
    color: '#0B1D3A',
    textAlign: 'center',
    marginBottom: '16px',
    letterSpacing: '-0.8px',
  },

  sectionSubtitle: {
    fontSize: '17px',
    color: '#64748B',
    textAlign: 'center',
    maxWidth: '560px',
    margin: '0 auto 60px auto',
    lineHeight: '1.7',
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
  },

  featureCard: {
    background: '#F8FAFF',
    borderRadius: '18px',
    padding: '36px',
    border: '1px solid #E2EAF8',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },

  featureIconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    marginBottom: '24px',
    boxShadow: '0 8px 20px rgba(42,125,225,0.3)',
  },

  featureIcon: {
    fontSize: '26px',
    display: 'block',
  },

  featureTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0B1D3A',
    marginBottom: '10px',
    letterSpacing: '-0.3px',
  },

  featureDescription: {
    fontSize: '15px',
    color: '#64748B',
    lineHeight: '1.65',
  },

  // ── Services Section (Dark) ───────────────────────────────────────────────────
  servicesSection: {
    background: '#0B1D3A',
    padding: '100px 60px',
  },

  servicesContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  servicesSectionTitle: {
    fontSize: '38px',
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '16px',
    letterSpacing: '-0.8px',
  },

  servicesSectionSubtitle: {
    fontSize: '17px',
    color: '#94A3B8',
    textAlign: 'center',
    maxWidth: '560px',
    margin: '0 auto 60px auto',
    lineHeight: '1.7',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },

  serviceCard: {
    background: 'rgba(255,255,255,0.04)',
    borderRadius: '16px',
    padding: '32px 28px',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },

  serviceIcon: {
    fontSize: '36px',
    display: 'block',
    marginBottom: '18px',
  },

  serviceTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '8px',
  },

  serviceDescription: {
    fontSize: '14px',
    color: '#94A3B8',
    lineHeight: '1.6',
  },

  serviceArrow: {
    marginTop: '20px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#2A7DE1',
    letterSpacing: '0.3px',
  },

  // ── Stats Section (Blue Gradient) ─────────────────────────────────────────────
  statsSection: {
    background: 'linear-gradient(135deg, #122952 0%, #1A3A6B 100%)',
    padding: '80px 60px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },

  statsInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '0',
    textAlign: 'center',
  },

  statItem: {
    padding: '20px 30px',
    borderRight: '1px solid rgba(255,255,255,0.1)',
  },

  statNumber: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: '1',
    marginBottom: '10px',
    letterSpacing: '-1px',
  },

  statAccent: {
    color: '#2A7DE1',
  },

  statLabel: {
    fontSize: '15px',
    color: '#94A3B8',
    fontWeight: '500',
  },

  // ── CTA Section ───────────────────────────────────────────────────────────────
  ctaSection: {
    background: '#FFFFFF',
    padding: '100px 60px',
    textAlign: 'center',
  },

  ctaSectionInner: {
    maxWidth: '700px',
    margin: '0 auto',
  },

  ctaTitle: {
    fontSize: '42px',
    fontWeight: '800',
    color: '#0B1D3A',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },

  ctaDescription: {
    fontSize: '18px',
    color: '#64748B',
    marginBottom: '44px',
    lineHeight: '1.7',
  },

  ctaButtonGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  ctaMainButton: {
    padding: '16px 36px',
    fontSize: '16px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 22px rgba(42,125,225,0.4)',
    letterSpacing: '0.3px',
  },

  // ── Footer ────────────────────────────────────────────────────────────────────
  footer: {
    background: '#071224',
    padding: '60px 60px 32px 60px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },

  footerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  footerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '40px',
    paddingBottom: '48px',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    marginBottom: '32px',
  },

  footerBrand: {
    maxWidth: '280px',
  },

  footerLogo: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '12px',
    display: 'block',
  },

  footerTagline: {
    fontSize: '14px',
    color: '#94A3B8',
    lineHeight: '1.6',
  },

  footerLinks: {
    display: 'flex',
    gap: '60px',
    flexWrap: 'wrap',
  },

  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  footerColumnTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
  },

  footerLink: {
    fontSize: '14px',
    color: '#94A3B8',
    cursor: 'pointer',
    transition: 'color 0.25s ease',
    textDecoration: 'none',
  },

  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },

  footerText: {
    fontSize: '13px',
    color: '#475569',
  },

  footerBadge: {
    display: 'flex',
    gap: '8px',
  },

  footerBadgeItem: {
    fontSize: '12px',
    color: '#475569',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '6px',
    padding: '4px 10px',
  },

};

export default mainPageStyles;
