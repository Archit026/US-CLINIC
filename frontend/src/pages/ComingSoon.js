// src/pages/ComingSoon.js
import React from 'react';

const ComingSoon = ({ title = "Coming Soon" }) => {
  return (
    <div style={{
      padding: '30px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      marginLeft: '240px',
      backgroundColor: '#f4f6f8',
      minHeight: '100vh'
    }}>
      <h1>{title}</h1>
      <p>This section is under development. Please check back later.</p>
    </div>
  );
};

export default ComingSoon;
