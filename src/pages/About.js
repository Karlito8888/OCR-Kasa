import React from "react";
import Header from "../sections/Header";
import Banner from "../containers/Banner";
import Main from "../sections/Main";
import Footer from "../sections/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Banner
        variant="about"
        showTitle={false}
        boxShadow="none"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        marginTop="clamp(1.1875rem, 0.0544rem + 3.626vw, 2.375rem)"
        marginBottom="clamp(1.1875rem, 0.0544rem + 3.626vw, 2.375rem)"
      />
      <Main />
      <Footer />
    </>
  );
};

export default About;
