'use client'; // Mark as a client component for interactivity
import React, { useState } from 'react';
import Section from './Section';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical'); // State to handle active tab

  // Technical Skills Data
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Data Structures', level: 80 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  // Soft Skills Data
  const softSkills = [
    { name: 'Goal-Oriented', level: 90 },
    { name: 'Collaboration', level: 85 },
    { name: 'Positivity', level: 80 },
    { name: 'Adaptability', level: 85 },
    { name: 'Problem Solving', level: 75 },
    { name: 'Empathy', level: 80 },
    
  ];

  // Progress Bar Style
  const progressBarStyle = (level) => ({
    width: `${level}%`,
    backgroundColor: '#007bff', // Blue color for progress
    height: '12px', // Fixed height for stability
    borderRadius: '6px',
    transition: 'width 1s ease', // Animation for the progress bar loading
  });

  // Container styles
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns for the skills grid
    gap: '30px', // Space between columns
    padding: '40px 0',
    backgroundColor: 'white', // Ensure the container has a white background
  };

  const tabStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
  };

  const tabButtonStyle = (active) => ({
    padding: '12px 30px',
    margin: '0 15px',
    cursor: 'pointer',
    fontSize: '1.3rem',
    border: 'none',
    borderRadius: '20px 20px 0 0', // Rounded top corners
    backgroundColor: active ? '#007bff' : '#f1f1f1',
    color: active ? 'white' : '#007bff',
    boxShadow: active ? '0 4px 10px rgba(0, 123, 255, 0.2)' : 'none',
    transition: 'all 0.3s ease',
  });

  const skillSectionStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa', // Subtle background for each section
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  };

  const skillCategoryTitleStyle = {
    textAlign: 'center',
    fontSize: '1.6rem',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold',
  };

  const skillItemStyle = {
    marginBottom: '25px',
    textAlign: 'left',
  };

  const progressBarContainerStyle = {
    backgroundColor: '#e9ecef',
    borderRadius: '6px',
    height: '12px',
    overflow: 'hidden', // Ensures rounded corners are visible
  };

  return (
    <Section id="skills" title="Skills" backgroundColor="white">
      {/* Title Section */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' ,color: 'black'}}>Skills</h2>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">Skills</h2>
      </div>

      {/* Tab navigation */}
      <div style={tabStyle}>
        <button
          style={tabButtonStyle(activeTab === 'technical')}
          onClick={() => setActiveTab('technical')}
        >
          Technical Skills
        </button>
        <button
          style={tabButtonStyle(activeTab === 'soft')}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </div>

      {/* Tab Content */}
      <div style={containerStyle}>
        {/* Technical Skills Section */}
        {activeTab === 'technical' && (
          <>
            {technicalSkills.map((skill, index) => (
              <div key={index} style={skillSectionStyle}>
                <h3 style={skillCategoryTitleStyle}>{skill.name}</h3>
                <div style={progressBarContainerStyle}>
                  <div style={progressBarStyle(skill.level)} />
                </div>
              </div>
            ))}
          </>
        )}

        {/* Soft Skills Section */}
        {activeTab === 'soft' && (
          <>
            {softSkills.map((skill, index) => (
              <div key={index} style={skillSectionStyle}>
                <h3 style={skillCategoryTitleStyle}>{skill.name}</h3>
                <div style={progressBarContainerStyle}>
                  <div style={progressBarStyle(skill.level)} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Section>
  );
};

export default Skills;
