'use client'; // Mark this file as a Client Component

import React, { useState } from 'react';
import Section from './Section';

const Leadership = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectSlides = [
    {
      title: 'Project 1',
      description: 'This is an example of a project showcasing leadership in development.',
      imgUrl: 'https://via.placeholder.com/500x300?text=Project+1', // Example image URL (replace with real project images)
    },
    {
      title: 'Project 2',
      description: 'Another project demonstrating leadership and technical expertise.',
      imgUrl: 'https://via.placeholder.com/500x300?text=Project+2', // Example image URL (replace with real project images)
    },
    {
      title: 'Project 3',
      description: 'A project where I led a team to build a scalable application.',
      imgUrl: 'https://via.placeholder.com/500x300?text=Project+3', // Example image URL (replace with real project images)
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projectSlides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projectSlides.length) % projectSlides.length
    );
  };

  return (
    <Section id="" title="Leadership" backgroundColor="#ffffff">
      <div style={styles.container}>
        {/* Left Side - Leadership Information */}
        <div style={styles.leftContainer}>
          <h2 style={styles.heading}>Leadership</h2>
          <p style={styles.paragraph}>
            As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.
          </p>
        </div>

        {/* Right Side - Project Slideshow */}
        <div style={styles.rightContainer}>
          <div style={styles.slideContainer}>
            <h3>{projectSlides[currentSlide].title}</h3>
            <div style={styles.imageContainer}>
              <img
                src={projectSlides[currentSlide].imgUrl}
                alt={`Slide ${currentSlide}`}
                style={styles.slideImage}
              />
              <div style={styles.arrowContainer}>
                <span onClick={goToPreviousSlide} style={styles.arrowButton}>←</span>
                <span onClick={goToNextSlide} style={styles.arrowButton}>→</span>
              </div>
            </div>
            <p>{projectSlides[currentSlide].description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    marginRight: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    textAlign: 'center',  // Centering the heading
    width: '100%',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
  rightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    textAlign: 'center',
    maxWidth: '500px',
  },
  imageContainer: {
    position: 'relative', // For positioning the arrows over the image
  },
  slideImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    transform: 'translateY(-50%)',
    padding: '0 20px',
  },
  arrowButton: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#007BFF',
    transition: 'color 0.3s ease',
  },
};

export default Leadership;
