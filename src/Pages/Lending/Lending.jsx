import React from "react";
import {
  Automation,
  Benefits,
  Business,
  Footer,
  Header,
  Hero,
  ManageMobileWorker,
  Solutions,
} from "../../Modules";

const Lending = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-screen">
        <Header />
        <main>
          <Hero />
          <Solutions />
          <Benefits />
          <ManageMobileWorker />
          <Business />
          <Automation />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Lending;
