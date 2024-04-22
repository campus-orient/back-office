import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Card, Container, IconButton, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import InterestsIcon from "@mui/icons-material/Interests";
import { useUsersContext } from "../../context/declarations";
import CardHeaderComponent from "./card/header";
import UsersSection from "./sections/users";
import InterestsPlacesSection from "./sections/interests-places";
import FrequentlyVisitedSection from "./sections/frequently-visited";
import ManageUserDialog from "./sections/users/dialog";
import FullScreenLoaderComponent from "../../components/loader/full-screen";
import SnackbarComponent from "../../components/feedback/snackbar";
import { failedRequest } from "../../utils/helpers/exception/http/failedRequest";

const HomeView = () => {
  const { userQuery, usersQuery, newUserMutation, updateUserMutation } =
    useUsersContext();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const [userDialog, setUserDialog] = useState({
    open: false,
    mode: "",
    user: null,
  });

  const cardList = [
    {
      id: 1,
      title: "Users",
      addDialog: true,
      icon: <GroupsIcon />,
      section: (
        <UsersSection
          users={usersQuery?.data?.users || []}
          viewUser={(user) => handleDialog(1, true, "update", user)}
        />
      ),
    },
    {
      id: 2,
      title: "Points of Interests",
      icon: <InterestsIcon />,
      addDialog: false,
      section: <InterestsPlacesSection />,
    },
    {
      id: 3,
      title: "Frequently Visited",
      addDialog: false,
      section: <FrequentlyVisitedSection />,
    },
  ];

  const handleDialog = (id, openState, modeState, user) => {
    if (id == 1) {
      //set user dialog
      setUserDialog({
        ...userDialog,
        open: openState,
        mode: modeState,
        user: user,
      });
    }

    if (id == 2) {
      //set interests place dialog
    }
    console.log(
      "Handle dialog called",
      "id",
      id,
      "open",
      openState,
      "mode",
      modeState
    );
  };

  useEffect(() => {
    console.log("Token", localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    console.log("State", userDialog);
  }, [userDialog]);

  useEffect(() => {
    console.log("User query", userQuery.data, "Users query", usersQuery.data);
  }, [userQuery, usersQuery]);

  const handleSubmitUser = async (profile) => {
    console.log("Handle submit user mode", userDialog.mode);
    const response =
      userDialog.mode == "create"
        ? await newUserMutation.mutateAsync(profile)
        : await updateUserMutation.mutateAsync(profile);

    console.log("Response", response);

    setSnackbar({
      ...snackbar,
      open: true,
      message: response.response
        ? failedRequest(response).message
        : response.message,
      severity: response.response ? "error" : "success",
    });

    return handleDialog(1, false, userDialog.mode, {});
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{}}>
        {cardList.map((item) => (
          <Grid key={item.title} item xs={12} md={4}>
            <CardHeaderComponent
              item={item}
              toggleDialog={(id, open, mode) =>
                handleDialog(id, open, mode, {})
              }
            />

            {item.section}
          </Grid>
        ))}
      </Grid>

      {userDialog.open && (
        <ManageUserDialog
          open={userDialog.open}
          mode={userDialog.mode}
          handleClose={(id, open, mode) => handleDialog(id, open, mode, {})}
          handleSubmit={(profile) => handleSubmitUser(profile)}
          user={userDialog.user}
        />
      )}

      {(userQuery.isLoading ||
        usersQuery.isLoading ||
        newUserMutation.isLoading) && <FullScreenLoaderComponent />}

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
