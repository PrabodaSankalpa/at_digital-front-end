import React from "react";
import FAQ from "./FAQ";

const FAQS = () => {
  return (
    <div className="flex flex-col px-5 md:px-10 lg:px-[152px] xl:px-[297px]">
      <p className="text-primary font-poppins font-semibold text-heading text-center tracking-wide leading-[33px] pb-5">
        Frequently asked questions
      </p>
      <FAQ
        title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
      />
      <FAQ
        title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
      />
      <FAQ
        title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
      />
    </div>
  );
};

export default FAQS;
