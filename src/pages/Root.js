import React from 'react';
import Header from '../sections/Header';
import Banner from '../containers/Banner';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../sections/Footer';

const Root = () => {
    const location = useLocation();
     const isHome = location.pathname === "/";
     const isAbout = location.pathname === "/about";

    return (
      <div>
        <Header />
        {(isHome || isAbout) && (
          <Banner
            variant={isHome ? "home" : "about"}
            showTitle={isHome}
            boxShadow={isHome ? "0px 4px 4px 0px #00000040" : "none"}
            backgroundColor={
              isHome ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)"
            }
            marginTop={
              isHome
                ? "clamp(1.6875rem, 0.3158rem + 4.3893vw, 3.125rem)"
                : "clamp(1.1875rem, 0.0544rem + 3.626vw, 2.375rem)"
            }
            marginBottom={
              isHome
                ? "clamp(1.375rem, 0.1226rem + 4.0076vw, 2.6875rem)"
                : "clamp(1.1875rem, 0.0544rem + 3.626vw, 2.375rem)"
            }
          />
        )}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

export default Root;
