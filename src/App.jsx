import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Services />
      <FAQS />
      <Footer />
    </div>
  );
};

export default App;
