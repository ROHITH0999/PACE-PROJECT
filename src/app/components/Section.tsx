'use client';

const Section = ({ id, title, backgroundColor, ht, children }) => {
  return (
    <section
      id={id}
      style={{
        ...styles.section,
        backgroundColor, // Apply background color
        height: ht || '100vh', // Apply height prop with fallback to '100vh'
      }}
    >
      <div style={styles.content}>
        {children} {/* This ensures the content inside <Section> tags is displayed */}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    // color: '#fff',
    marginBottom: '20px',
  },
  content: {
    textAlign: 'center',
    color: '#fff',
  },
};

export default Section;
