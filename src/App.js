import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

import "./App.css";
import HomePage from "./pages/HomePage";
import Mission from "./pages/Mission";
import PhotoCollection from "./pages/PhotoCollection";
import Gallery from "./pages/Gallery";
import Customers from "./pages/Customers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Navigation from "./components/Navigation";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader loading={loading} size={100} color={"#bb8e12"} />
        </div>
      ) : (
        <>
          <Navigation />
          <HomePage />
          <Mission />
          <PhotoCollection />
          <Gallery />
          <Customers />
          <Membership />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
