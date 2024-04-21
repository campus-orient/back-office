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

const HomeView = () => {
  const { userQuery, usersQuery, newUserMutation } = useUsersContext();

  const [userDialog, setUserDialog] = useState({
    open: false,
    mode: "",
  });

  const cardList = [
    {
      id: 1,
      title: "Users",
      addDialog: true,
      icon: <GroupsIcon />,
      section: <UsersSection users={usersQuery?.data?.users || []} />,
    },
    {
      id: 2,
      title: "Points of Interests",
      icon: <InterestsIcon />,
      addDialog: true,
      section: <InterestsPlacesSection />,
    },
    {
      id: 3,
      title: "Frequently Visited",
      section: <FrequentlyVisitedSection />,
    },
  ];

  const handleDialog = (id, openState, modeState) => {
    if (id == 1) {
      //set user dialog
      setUserDialog({ ...userDialog, open: openState, mode: modeState });
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

  const handleCreateUser = async (profile) => {
    console.log("Profile in handle func", profile);
    const response = await newUserMutation.mutateAsync(profile);

    if (response.message) return handleDialog(1, false, "create");
    console.log("Response", response);
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{}}>
        {cardList.map((item) => (
          <Grid key={item.title} item xs={12} md={4}>
            <CardHeaderComponent
              item={item}
              toggleDialog={(id, open, mode) => handleDialog(id, open, mode)}
            />

            {item.section}
          </Grid>
        ))}
      </Grid>

      {userDialog.open && (
        <ManageUserDialog
          open={userDialog.open}
          mode={userDialog.mode}
          handleClose={(id, open, mode) => handleDialog(id, open, mode)}
          handleCreate={(profile) => handleCreateUser(profile)}
        />
      )}
    </Container>
  );
};

export default HomeView;
