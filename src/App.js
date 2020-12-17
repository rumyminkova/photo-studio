import React from "react";

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
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Mission />
      <PhotoCollection />
      <Gallery />
      <Customers />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
