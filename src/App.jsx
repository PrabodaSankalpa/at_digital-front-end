import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
