'use client'; // Mark this file as a Client Component

import React from 'react';
import Section from './Section';

const Project = () => {
  // Sample project data (replace with actual data)
  const projects = [
    {
      title: 'myportfolio',
      description: '',
      repoLink: 'https://github.com/username/myportfolio',
      languages: { JavaScript: '51.5%', SCSS: '45.3%', HTML: '3%' },
      updatedDate: 'January 17, 2024',
    },
    {
      title: 'create-react-app-lambda',
      description: 'Code yet to be deployed.',
      repoLink: 'https://github.com/username/create-react-app-lambda',
      languages: 'Code yet to be deployed.',
      updatedDate: 'December 7, 2023',
    },
    {
      title: 'Task-Management',
      description:
        'A task management system where users can track their tasks with statuses of in-progress, pending, and completed.',
      repoLink: 'https://github.com/username/task-management',
      languages: { JavaScript: '78.8%', CSS: '19%', HTML: '2.1%' },
      updatedDate: 'February 5, 2023',
    },
    {
      title: 'Mohd-shahid-iqbal',
      description: 'Config files for my GitHub profile.',
      repoLink: 'https://github.com/username/mohd-shahid-iqbal',
      languages: 'Code yet to be deployed.',
      updatedDate: 'October 27, 2021',
    },
  ];

  const styles = {
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      backgroundColor: '#f9f9f9', // Grey background color
      padding: '0px',
      color: '#333',
      margin: '0px',
      fontFamily: "'Roboto', sans-serif", // Custom font for the whole section
      flexDirection: 'column',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '30px',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      width: '100%',  // Make the grid container full width
      maxWidth: '1200px',  // Limit max width for larger screens
      padding: '0 20px',
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    cardDescription: {
      marginBottom: '20px',
      color: '#555',
    },
    languages: {
      marginBottom: '10px',
      fontSize: '0.9rem',
      color: '#777',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    button: {
      padding: '10px 15px',
      borderRadius: '5px',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#007BFF',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: '0.9rem',
      border: 'none',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    updatedDate: {
      fontSize: '0.8rem',
      color: '#888',
      marginTop: '10px',
    },
  };

  return (
    <Section id="project" title="Projects" backgroundColor="#f9f9f9">
      <div style={styles.section}>
        <h2 style={styles.heading}>Recent Projects</h2>
        <div style={styles.cardsContainer}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseOut={(e) => {
                Object.assign(e.currentTarget.style, styles.card);
              }}
            >
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardDescription}>{project.description}</p>
              <div style={styles.languages}>
                {typeof project.languages === 'string'
                  ? project.languages
                  : Object.entries(project.languages).map(([lang, perc], i) => (
                      <span key={i}>
                        {lang}: {perc}
                        {i < Object.entries(project.languages).length - 1 && ', '}
                      </span>
                    ))}
              </div>
              <div style={styles.buttonsContainer}>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      styles.buttonHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = styles.button.backgroundColor)
                  }
                >
                  Repo
                </a>
                <button style={styles.button}>Clone Project</button>
              </div>
              <p style={styles.updatedDate}>
                Updated on {project.updatedDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;
