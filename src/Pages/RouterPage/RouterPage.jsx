import React from "react";
import { Route, Routes } from "react-router-dom";
import Lending from "../Lending/Lending";
import Auth from "../Auth/Auth";
const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </>
  );
};

export default RouterPage;
