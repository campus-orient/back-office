import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Outlet />
    </Container>
  );
};

export default AppLayout;
