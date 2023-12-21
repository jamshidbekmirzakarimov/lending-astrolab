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
          <Business />
          <Automation />
          <AstroProduct />
          <Price />
          <OurClients />
          <Customers />
          <RequestDemo />
          <Social />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Lending;
