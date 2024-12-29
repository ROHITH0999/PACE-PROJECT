'use client';  // Mark this file as a Client Component

import React from 'react';
import Section from './Section';

const Exp = () => {
  const expSectionStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: 'white', // Set background color to white
    color: '#333', // Set text color to dark for contrast
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
  };

  const companyImagesStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Use space-between to spread the images out
    gap: '40px', // Increased gap between images for better spacing
    marginBottom: '30px',
  };

  const companyImageContainerStyle = {
    textAlign: 'center', // Center text below each image
  };

  const companyImageStyle = {
    width: '200px',  // Increased image size
    height: 'auto',
    borderRadius: '8px',  // Optional: to round the corners of the images
    marginBottom: '10px',  // Space between image and text
    transition: 'transform 0.3s ease',
  };

  const companyTextStyle = {
    marginTop: '10px',  // Space between image and text
    fontSize: '1.2rem',
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  return (
    <Section id="section3" title="Experience" backgroundColor="white">
      <div style={expSectionStyle}>
        <h2 style={headingStyle}>Experience</h2>
        
        {/* Company Images in a Row */}
        <div style={companyImagesStyle}>
          {/* Simpana Tech Image */}
          <div style={companyImageContainerStyle}>
            <img
              src="/simp.png" // Replace with actual image URL for Simpana Tech
              alt="Simpana Tech"
              style={companyImageStyle}
            />
            <div style={companyTextStyle}>Simpana Tech</div>
          </div>
          
          {/* Vendify Image */}
          <div style={companyImageContainerStyle}>
            <img
              src="/vend.png" // Replace with actual image URL for Vendify
              alt="Vendify"
              style={companyImageStyle}
            />
            <div style={companyTextStyle}>Vendify</div>
          </div>
          
          {/* Pace Image */}
          <div style={companyImageContainerStyle}>
            <img
              src="/pace.png" // Replace with actual image URL for Pace
              alt="Pace"
              style={companyImageStyle}
            />
            <div style={companyTextStyle}>Pace</div>
          </div>
        </div>
        
        {/* Additional Text */}
      </div>
    </Section>
  );
};

export default Exp;
