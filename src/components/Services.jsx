import React from "react";
import ServiceCard from "./ServiceCard";
import serviceImage01 from "../assets/image_1.png";
import serviceImage02 from "../assets/image_2.png";

const Services = () => {
  return (
    <div>
      <ServiceCard
        imageUrl={serviceImage02}
        title="Web & Mobile App Development"
        text="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        btnUrl="#"
        direction="md:flex-row"
      />
      <ServiceCard
        imageUrl={serviceImage01}
        title="Digital Strategy Consulting"
        text="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        btnUrl="#"
        direction="md:flex-row-reverse"
      />
    </div>
  );
};

export default Services;
