const authPageStyles = {  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, rgb(116, 201, 234) 0%, rgb(117, 203, 215) 50%, #E0F6FF 100%)',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    margin: '0',
    position: 'relative',
    overflow: 'hidden',
    '::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
      `,
      pointerEvents: 'none',
    }
  },
  container: {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    minHeight: '600px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    animation: 'fadeInUp 0.8s ease-out',
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  },

  formSection: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 40px',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  imageSection: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    background: 'rgba(255, 255, 255, 0.02)',
    gap: '30px',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: '10%',
      left: '10%',
      width: '6px',
      height: '6px',
      background: 'rgba(255, 255, 255, 0.4)',
      borderRadius: '50%',
      animation: 'float 3s ease-in-out infinite',
    },
    '::after': {
      content: '""',
      position: 'absolute',
      bottom: '20%',
      right: '15%',
      width: '4px',
      height: '4px',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      animation: 'float 4s ease-in-out infinite reverse',
    }
  },

  formCard: {
    width: '100%',
    maxWidth: '400px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
  },

  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: '10px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  subtitle: {
    fontSize: '16px',
    color: '#374151',
    textAlign: 'center',
    marginBottom: '30px',
    lineHeight: '1.5',
  },

  formGroup: {
    marginBottom: '20px',
  },

  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    fontSize: '16px',
    border: '2px solid rgba(30, 58, 138, 0.2)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    color: '#1f2937',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    outline: 'none',
    backdropFilter: 'blur(5px)',
    position: 'relative',
  },

  inputFocus: {
    border: '2px solid #1e3a8a',
    boxShadow: '0 0 0 4px rgba(30, 58, 138, 0.1)',
    background: 'rgba(255, 255, 255, 0.95)',
    transform: 'translateY(-1px)',
  },
  select: {
    width: '100%',
    padding: '14px 18px',
    fontSize: '16px',
    border: '2px solid rgba(30, 58, 138, 0.2)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    color: '#1f2937',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: 'right 12px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '16px',
    paddingRight: '40px',
    backdropFilter: 'blur(5px)',
  },

  selectFocus: {
    border: '2px solid #1e3a8a',
    boxShadow: '0 0 0 4px rgba(30, 58, 138, 0.1)',
    background: 'rgba(255, 255, 255, 0.95)',
    transform: 'translateY(-1px)',
  },
  button: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '10px',
    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
    position: 'relative',
    overflow: 'hidden',
    ':active': {
      transform: 'translateY(1px)',
    }
  },

  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.6)',
    background: 'linear-gradient(45deg, #2563eb, #1d4ed8)',
  },
  errorMessage: {
    color: '#ef4444',
    fontSize: '14px',
    fontWeight: '500',
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '20px',
    textAlign: 'center',
    animation: 'shake 0.5s ease-in-out',
  },

  successMessage: {
    color: '#10b981',
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
    border: '2px solid #ef4444',
    boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
  },

  inputSuccess: {
    border: '2px solid #10b981',
    boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
  },

  linkContainer: {
    marginTop: '25px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#374151',
  },

  link: {
    color: '#1e3a8a',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },

  linkHover: {
    color: '#3b82f6',
    textDecoration: 'underline',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    padding: '20px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
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
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: '15px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  welcomeSubtext: {
    fontSize: '16px',
    color: '#374151',
    textAlign: 'center',
    lineHeight: '1.6',
    maxWidth: '300px',
  },
  // Responsive styles
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
        background: 'rgba(255, 255, 255, 0.08)',
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
  // Animation keyframes (for CSS-in-JS compatibility)
  animations: {
    fadeInUp: {
      '0%': {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    
    pulse: {
      '0%, 100%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(1.02)'
      }
    },

    shake: {
      '0%, 100%': {
        transform: 'translateX(0)'
      },
      '10%, 30%, 50%, 70%, 90%': {
        transform: 'translateX(-5px)'
      },
      '20%, 40%, 60%, 80%': {
        transform: 'translateX(5px)'
      }
    },    spin: {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },

    float: {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-10px)'
      }
    },

    slideInLeft: {
      '0%': {
        opacity: 0,
        transform: 'translateX(-50px)'
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)'
      }
    },

    slideInRight: {
      '0%': {
        opacity: 0,
        transform: 'translateX(50px)'
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)'
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
    animation: 'spin 1s ease-in-out infinite',
    marginRight: '8px',
  },

  // Media query breakpoints
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  }
};

export default authPageStyles;
