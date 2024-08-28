import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Error404 from "../components/Error404";

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <div className="not-found-main-container">
          <Error404 />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
