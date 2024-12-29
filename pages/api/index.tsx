// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Section id="section1" title="Welcome to Section 1" backgroundColor="#FF5733" />
      <Section id="section2" title="Welcome to Section 2" backgroundColor="#33C3FF" />
      <Section id="section3" title="Welcome to Section 3" backgroundColor="#75FF33" />
      <Section id="section4" title="Welcome to Section 4" backgroundColor="#FFC300" />
    </div>
  );
};

export default Home;
