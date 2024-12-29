'use client';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the section
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page when logo is clicked
  };

  return (
    <nav style={styles.navbar}>
      <div onClick={handleLogoClick} style={styles.logo}>Mohd</div> {/* Scroll to top on logo click */}
      <ul style={styles.navLinks}>
        <li onClick={() => handleScroll('project')} style={styles.link}>Projects</li>
        {/* "Resume" link opens the PDF in a new tab */}
        <li style={styles.link}>
          <a
            href="https://www.example.com/resume.pdf" // Replace with your actual resume URL
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security measure for opening in a new tab
            style={styles.resumeLink}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.resumeButtonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = ''}
          >
            Resume
          </a>
        </li>
        <li onClick={() => handleScroll('about')} style={styles.link}>About</li>
        <li onClick={() => handleScroll('skills')} style={styles.link}>Skills</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(255, 255, 255, 0.3)', // Translucent background
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '20px', // Add spacing between the logo and links
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '500',
    color: '#000',
  },
  resumeLink: {
    textDecoration: 'none',
    fontWeight: '500',
    color: '#000',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0', // Default background
  },
  resumeButtonHoverStyle: {
    backgroundColor: '#e0e0e0', // Background color on hover
  },
};

export default Navbar;
