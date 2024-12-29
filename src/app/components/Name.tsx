'use client';  // Mark this file as a Client Component

import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Section from './Section';

const Name = () => {
  const heroSectionStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw', // Ensure full screen width
    height: '100vh', // Ensure full screen height
    margin: '0', // Remove any default margin
    padding: '0', // Remove any padding that may affect layout
    color: 'white',
    background: 'linear-gradient(45deg, #ff5733, #33c3ff, #75ff33)',
    backgroundSize: '400% 400%',
    animation: 'glitterBackground 3s ease infinite',
  };

  const heroTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const heroTaglineStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
  };

  const socialLinkStyle = {
    color: 'white',
    transition: 'color 0.3s ease',
  };

  const socialLinkHoverStyle = {
    color: '#ffeb3b', // Highlight color on hover
  };

  const moreAboutBtnStyle = {
    padding: '15px 30px',
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const moreAboutBtnHoverStyle = {
    backgroundColor: 'white',
    color: '#333',
  };

  return (
    <Section id="section1" backgroundColor="#FF5733">
      <div style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Mohd Shahid Iqbal</h1>
        <p style={heroTaglineStyle}>Passionate about changing the world with technology.</p>

        {/* Social Icons */}
        <div style={socialIconsStyle}>
          <a
            href="https://www.linkedin.com/in/mohdshahid"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => e.target.style.color = socialLinkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = ''}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/mohdshahid"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => e.target.style.color = socialLinkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = ''}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.facebook.com/mohdshahid"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => e.target.style.color = socialLinkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = ''}
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/mohdshahid"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => e.target.style.color = socialLinkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = ''}
          >
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Button */}
        <a
          href="#about"
          style={moreAboutBtnStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = moreAboutBtnHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = ''}
        >
          More about me
        </a>
      </div>

      {/* Adding keyframe animation for glitter effect */}
      <style>
        {`
          @keyframes glitterBackground {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </Section>
  );
};

export default Name;
