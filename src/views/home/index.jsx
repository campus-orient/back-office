import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import InterestsIcon from "@mui/icons-material/Interests";
import { useUsersContext } from "../../context/declarations";
import FullScreenLoaderComponent from "../../components/loader/full-screen";
import SnackbarComponent from "../../components/feedback/snackbar";
import { failedRequest } from "../../utils/helpers/exception/http/failedRequest";
import LoginIcon from "@mui/icons-material/Login";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { Navigate, useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();

  const { userQuery } = useUsersContext();

  useEffect(() => {
    console.log("User query response", userQuery.data);
  }, [userQuery]);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const cardList = [
    {
      title: "Users",
      icon: <GroupsIcon sx={{ fontSize: 100 }} />,
      path: "users",
    },
    {
      title: "Interests Places",
      icon: <InterestsIcon sx={{ fontSize: 100 }} />,
      path: "interests-places",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 10 }}>
        Administrator
      </Typography>

      <Grid container justifyContent="center" alignItems="center">
        {cardList.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            lg={3}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              px: 1,
            }}
          >
            <Button
              sx={{
                display: "flex",
                width: "100%",
                ":focus": {
                  outline: "none",
                  border: "none",
                },
              }}
              onClick={() => navigate(item.path)}
            >
              <Card
                elevation={5}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item?.icon}

                <Typography sx={{ fontWeight: "500", px: 1 }}>
                  {item?.title}
                </Typography>
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>

      {userQuery.isLoading && <FullScreenLoaderComponent />}

      <SnackbarComponent
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleVisibility={(state) => {
          setSnackbar({
            ...snackbar,
            open: state,
          });
        }}
      />
    </Container>
  );
};

export default HomeView;
