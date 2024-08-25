import React, { useContext } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Main from "../sections/Main";
import { DataContext } from "../context/DataContext";

const Logements = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
};

export default Logements;
