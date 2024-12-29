'use client';

import React from 'react';
import Section from './Section';

const About = () => {
  const aboutSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#D3D3D3', // Grey background color
    padding: '0 20px',
    color: '#333',
    fontFamily: "'Roboto', sans-serif", // Custom font for the whole section
  };

  const profilePicStyle = {
    width: '375px',  // Larger size of profile picture (cricket ball size)
    height: '375px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '40px',
  };

  const aboutTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif", // Custom font for the heading
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
    lineHeight: '1.6',
    fontFamily: "'Roboto', sans-serif", // Custom font for paragraph
  };

  const resumeButtonStyle = {
    padding: '8px 16px',  // Smaller size for the button
  backgroundColor: 'transparent', // Transparent background by default
  color: 'black',  // Black text color initially
  fontSize: '0.9rem',  // Smaller text size for button
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: '2px solid black', // Black border
  borderRadius: '5px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',  // Smooth transition
  width: '30%',  // Decreased width to 30%
  marginLeft: '375px',  // Fixed margin to the left
  };

  const resumeButtonHoverStyle = {
    backgroundColor: 'black', // Black background on hover
    color: 'white',  // White text color on hover
  };

  return (
    <Section id="about" backgroundColor="#33C3FF">
      <div style={aboutSectionStyle}>
        {/* Profile Picture */}
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"  // Placeholder image, replace with your actual image URL
          alt="Mohd Shahid Iqbal"
          style={profilePicStyle}
        />
        
        {/* About Me Text */}
        <div style={aboutTextStyle}>
          <h2 style={headingStyle}>About Me</h2>
          <p style={paragraphStyle}>
            Hi, I'm Mohd Shahid Iqbal, a passionate developer with expertise in front-end and back-end technologies. 
            I'm committed to learning new technologies and building solutions that make a difference in the world.
            I specialize in creating responsive, user-friendly websites and web applications, and I always strive to 
            keep improving my skills.
          </p>
          
          {/* Resume Button */}
          <a
            href="https://www.example.com/resume.pdf"  // Replace with your actual resume link
            target="_blank"  // Opens the link in a new tab
            rel="noopener noreferrer"  // Security measure for opening the link in a new tab
            style={resumeButtonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = resumeButtonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = ''}
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;
