import React from "react";

import "./App.css";
import HomePage from "./components/HomePage";
import Mission from "./components/Mission";
import PhotoCollection from "./components/PhotoCollection";
import Gallery from "./components/Gallery";
import Customers from "./components/Customers";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Mission />
      <PhotoCollection />
      <Gallery />
      <Customers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
