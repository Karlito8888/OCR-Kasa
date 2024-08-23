import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Main from '../sections/Main';
import Footer from '../sections/Footer';

const Home = () => {
    return (
      <>
        <Header />
        <Hero
          variant="home"
          showTitle={true}
          boxShadow="0px 4px 4px 0px #00000040"
          backgroundColor="rgba(0, 0, 0, 0.6)"
        />
        <Main />
        <Footer />
      </>
    );
};

export default Home;