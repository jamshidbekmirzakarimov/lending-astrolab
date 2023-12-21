import React from "react";
import {
  AstroProduct,
  Automation,
  Benefits,
  Business,
  Customers,
  Footer,
  Header,
  Hero,
  ManageMobileWorker,
  OurClients,
  Price,
  RequestDemo,
  Social,
  Solutions,
} from "../../Modules";

const Lending = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Benefits />
        <ManageMobileWorker />
    <div className="hidden">
    <Business />
        <Automation />
        <AstroProduct />
        <Price />
        <OurClients />
        <Customers />
        <RequestDemo />
        <Social />
    </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Lending;
