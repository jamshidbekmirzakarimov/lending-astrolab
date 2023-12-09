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

import { motion, useScroll } from "framer-motion";
const Lending = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,
          background: "red",
          transformOrigin: "0%",
          zIndex: 999999
        }}
      ></motion.div>
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
      <Footer />
    </>
  );
};

export default Lending;
