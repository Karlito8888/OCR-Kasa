import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Footer from '../sections/Footer';

const About = () => {
    return (
      <>
        <Header />
        <Hero
          variant="about"
          showTitle={false}
          boxShadow="none"
          backgroundColor="transparent"
        />
        <h1>A PROPOS</h1>
        <Footer />
      </>
    );
};

export default About;