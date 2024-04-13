import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import HomeView from "../views/home";
import AppBarComponent from "../components/app-bar";
import { Box } from "@mui/material";

const RouteStack = () => {
  return (
    <>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeView />} />
          {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default RouteStack;
