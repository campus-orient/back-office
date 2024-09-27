import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FullScreenLoaderComponent from "../components/loader/full-screen";
import AppBarComponent from "../components/app-bar";
import { useAuthContext, useUsersContext } from "../context/declarations";
import { verifyToken } from "../services/http/auth";
import { failedRequest } from "../utils/helpers/exception/http/failedRequest";

const AppLayout = () => {
  const navigate = useNavigate();
  const { authCheck, logged, setAuthCheck, setLogged, setUser, user } =
    useAuthContext();

  const { userQuery } = useUsersContext();

  useEffect(() => {
    const verifyTokenFn = async () => {
      const response = await verifyToken();

      console.log("token response", response);

      setAuthCheck(() => true);

      if (response) {
        setLogged(() => false);
        navigate("auth/login");
      } else {
        setLogged(() => true);
        navigate("/");
      }
    };

    verifyTokenFn();
  }, []);

  useEffect(() => {
    console.log("User query", userQuery.data);
  }, [userQuery]);

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
          {logged && userQuery?.data?.user && <AppBarComponent />}
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
