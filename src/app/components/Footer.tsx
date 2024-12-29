'use client'; // Mark as a client component for interactivity
import React from 'react';
import Section from './Section';

const Footer = () => {
  return (
    <Section
      id="section5"
      title="Get In Touch"
      backgroundColor="#cfddda"
      ht='30vh'
    >
      <div style={{ textAlign: 'center', marginBottom: '15px' }}> {/* Reduced marginBottom */}
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}> {/* Reduced font size */}
          Get In Touch
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}> {/* Reduced font size */}
          I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at{' '}
          <a href="mailto:khan_saif59@gmail.com" style={{ color: '#007bff' }}>
            khan_saif59@gmail.com
          </a>.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '15px' }}> {/* Reduced marginTop */}
        <p style={{ fontSize: '1rem', color: '#555' }}> {/* Reduced font size */}
          <span>Made with </span>
          <span style={{ color: '#e25555' }}>❤️</span>
          <span> by Mohd Shahid Iqbal using </span>
          <span style={{ fontWeight: 'bold' }}>React</span>
        </p>
      </div>
    </Section>
  );
};

export default Footer;
