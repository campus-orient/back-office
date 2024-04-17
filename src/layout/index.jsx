import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FullScreenLoaderComponent from "../components/loader/full-screen";
import AppBarComponent from "../components/app-bar";
import { useAuthContext } from "../context/declarations";
import { verifyToken } from "../services/http/auth";
import { failedRequest } from "../utils/helpers/exception/http/failedRequest";

const AppLayout = () => {
  const navigate = useNavigate();
  const { authCheck, logged, setAuthCheck, setLogged } = useAuthContext();

  useEffect(() => {
    const verifyTokenFn = async () => {
      const response = await verifyToken();

      setAuthCheck(() => true);

      if (response.response) {
        setLogged(() => false);
        navigate("auth/login");
      } else {
        //
      }
    };

    verifyTokenFn();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100vw",
        height: "100vh",
      }}
    >
      {authCheck ? (
        <Box
          sx={{
            width: "100%",
          }}
        >
          {logged && <AppBarComponent />}
          <Container sx={{ mt: logged ? 10 : 0 }}>
            <Outlet />
          </Container>
        </Box>
      ) : (
        <FullScreenLoaderComponent />
      )}
    </Box>
  );
};

export default AppLayout;
