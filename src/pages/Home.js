import React from "react";
import Header from "../sections/Header";
import Banner from "../components/Banner";
import Main from "../sections/Main";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        variant="home"
        showTitle={true}
        boxShadow="0px 4px 4px 0px #00000040"
        backgroundColor="rgba(0, 0, 0, 0.6)"
        marginTop="clamp(1.6875rem, 0.3158rem + 4.3893vw, 3.125rem)"
        marginBottom="clamp(1.375rem, 0.1226rem + 4.0076vw, 2.6875rem)"
      />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
