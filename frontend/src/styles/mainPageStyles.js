const mainPageStyles = {
  page: {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#1f2937',
    backgroundColor: 'linear-gradient(135deg, rgb(116, 201, 234) 0%, rgb(117, 203, 215) 50%, #E0F6FF 100%)',
    minHeight: '100vh',
    margin: '0',
    padding: '0',
  },

  // Navigation Bar
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e3a8a',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  navButtonContainer: {
    display: 'flex',
    gap: '15px',
  },

  navButton: {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  loginButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#1e3a8a',
    border: '2px solid rgba(30, 58, 138, 0.3)',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
  },

  signupButton: {
    background: 'linear-gradient(45deg, #10b981, #059669)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
  },

  // Hero Section
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '80px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '60px',
    flexWrap: 'wrap',
  },

  heroContent: {
    flex: '1',
    minWidth: '400px',
    maxWidth: '600px',
  },

  heroTitle: {
    fontSize: '56px',
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: '20px',
    lineHeight: '1.1',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },

  heroSubtitle: {
    fontSize: '20px',
    color: '#374151',
    marginBottom: '40px',
    lineHeight: '1.6',
    fontWeight: '400',
  },

  heroButtonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },

  ctaButton: {
    padding: '16px 32px',
    fontSize: '18px',
    fontWeight: '600',
    background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  secondaryButton: {
    padding: '16px 32px',
    fontSize: '18px',
    fontWeight: '600',
    background: 'rgba(255, 255, 255, 0.3)',
    color: '#1e3a8a',
    border: '2px solid rgba(30, 58, 138, 0.3)',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  heroImageContainer: {
    flex: '1',
    minWidth: '400px',
    maxWidth: '500px',
    textAlign: 'center',
  },

  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    border: '3px solid rgba(255, 255, 255, 0.3)',
  },

  // Features Section
  featuresSection: {
    padding: '100px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  sectionTitle: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: '20px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  sectionSubtitle: {
    fontSize: '18px',
    color: '#374151',
    textAlign: 'center',
    marginBottom: '60px',
    maxWidth: '600px',
    margin: '0 auto 60px auto',
    lineHeight: '1.6',
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
    marginTop: '60px',
  },

  featureCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },

  featureIcon: {
    fontSize: '48px',
    marginBottom: '20px',
    display: 'block',
  },

  featureTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '15px',
  },

  featureDescription: {
    fontSize: '16px',
    color: '#374151',
    lineHeight: '1.6',
  },

  // Services Section
  servicesSection: {
    padding: '100px 40px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  },

  servicesContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '60px',
  },

  serviceCard: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '30px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },

  serviceIcon: {
    fontSize: '40px',
    marginBottom: '15px',
    display: 'block',
  },

  serviceTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '10px',
  },

  serviceDescription: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.5',
  },

  // Stats Section
  statsSection: {
    padding: '80px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    textAlign: 'center',
  },

  statCard: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '30px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },

  statNumber: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: '10px',
  },

  statLabel: {
    fontSize: '16px',
    color: '#374151',
    fontWeight: '500',
  },

  // CTA Section
  ctaSection: {
    padding: '100px 40px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  },

  ctaTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: '20px',
  },

  ctaDescription: {
    fontSize: '18px',
    color: '#374151',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
    lineHeight: '1.6',
  },

  // Footer
  footer: {
    padding: '60px 40px 30px 40px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },

  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },

  footerText: {
    fontSize: '14px',
    color: '#374151',
    marginBottom: '20px',
  },

  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },

  footerLink: {
    color: '#1e3a8a',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },

  // Responsive adjustments
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '36px',
    },
    heroSubtitle: {
      fontSize: '16px',
    },
    featuresGrid: {
      gridTemplateColumns: '1fr',
    },
    navbar: {
      padding: '15px 20px',
    },
    hero: {
      padding: '60px 20px',
      gap: '40px',
    },
  }
};

export default mainPageStyles;
