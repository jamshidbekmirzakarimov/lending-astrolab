import React from "react";
import { Route, Routes } from "react-router-dom";
import Lending from "../Lending/Lending";
import Auth from "../Auth/Auth";
import Layout from "../../components/Layout/Layout";
import News from "../News/News";
import PageInformation from "../PageInformation/PageInformation";
const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="/news" element={<News/>}/>
          <Route path="/information" element={<PageInformation/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default RouterPage;
