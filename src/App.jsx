import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQS from "./components/FAQS";

const App = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Services />
      <FAQS/>
    </div>
  );
};

export default App;
