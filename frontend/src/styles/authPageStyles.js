const authPageStyles = {
  page: {
    minHeight: '100vh',
    background: '#0B1D3A',
    fontFamily: "'Outfit', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    margin: '0',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    maxWidth: '1000px',
    width: '100%',
    minHeight: '650px',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    borderRadius: '40px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
  },

  formSection: {
    flex: '1.2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 50px',
    background: 'linear-gradient(135deg, #122952 0%, #1A3A6B 100%)',
    position: 'relative',
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
  },
  
  imageSection: {
    flex: '0.8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    background: 'transparent',
    gap: '30px',
    position: 'relative',
  },

  formCard: {
    width: '100%',
    maxWidth: '420px',
  },

  heading: {
    fontSize: '38px',
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: '8px',
    letterSpacing: '-1px',
  },

  subtitle: {
    fontSize: '16px',
    color: '#94A3B8',
    textAlign: 'left',
    marginBottom: '40px',
    lineHeight: '1.6',
    fontWeight: '400',
  },

  formGroup: {
    marginBottom: '24px',
    position: 'relative',
  },

  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#94A3B8',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  
  input: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#FFFFFF',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    outline: 'none',
  },

  inputFocus: {
    border: '1px solid #2A7DE1',
    background: 'rgba(255, 255, 255, 0.08)',
    boxShadow: '0 0 0 4px rgba(42, 125, 225, 0.1)',
  },
  
  select: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    background: '#1A3A6B',
    color: '#FFFFFF',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer',
  },

  selectFocus: {
    border: '1px solid #2A7DE1',
    boxShadow: '0 0 0 4px rgba(42, 125, 225, 0.1)',
  },
  button: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #2A7DE1 0%, #1A5CB8 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    marginTop: '10px',
    boxShadow: '0 4px 14px rgba(42, 125, 225, 0.4)',
    position: 'relative',
    overflow: 'hidden',
  },

  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(42, 125, 225, 0.6)',
    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  },
  errorMessage: {
    color: '#F87171',
    fontSize: '14px',
    fontWeight: '500',
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '20px',
    textAlign: 'center',
  },

  successMessage: {
    color: '#4ADE80',
    fontSize: '14px',
    fontWeight: '500',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '20px',
    textAlign: 'center',
  },

  inputError: {
    border: '1px solid #ef4444',
    boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.1)',
  },

  inputSuccess: {
    border: '1px solid #10b981',
    boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)',
  },

  linkContainer: {
    marginTop: '25px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#94A3B8',
  },

  link: {
    color: '#60A5FA',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },

  linkHover: {
    color: '#93C5FD',
    textDecoration: 'underline',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    padding: '20px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },

  image: {
    width: '180px',
    height: 'auto',
    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))',
    transition: 'all 0.3s ease',
  },

  imageHover: {
    transform: 'translateY(-10px) scale(1.05)',
    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
  },

  welcomeText: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '15px',
  },

  welcomeSubtext: {
    fontSize: '16px',
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: '1.6',
    maxWidth: '300px',
  },
  
  responsive: {
    mobile: {
      container: {
        flexDirection: 'column',
        minHeight: 'auto',
        maxWidth: '500px',
        margin: '20px',
      },
      
      formSection: {
        padding: '30px 20px',
        order: 1,
      },
      
      imageSection: {
        padding: '30px 20px',
        order: 0,
        background: 'rgba(255, 255, 255, 0.02)',
      },
      
      formCard: {
        padding: '30px 20px',
        maxWidth: '100%',
      },
      
      heading: {
        fontSize: '28px',
      },
      
      image: {
        width: '100px',
      },
      
      welcomeText: {
        fontSize: '22px',
      },
      
      welcomeSubtext: {
        fontSize: '14px',
        maxWidth: '250px',
      }
    }
  },
  
  loadingSpinner: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    marginRight: '8px',
  },
};

export default authPageStyles;
