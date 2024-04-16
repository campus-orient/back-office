import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, Container, IconButton, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import InterestsIcon from "@mui/icons-material/Interests";
import UserListComponent from "../../components/table/users";
import { users } from "../../mock/users";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ManageUserDialog from "../../components/dialog/users/manage";

const HomeView = () => {
  const [userDialog, setUserDialog] = useState({
    open: false,
    mode: "",
  });

  const cardList = [
    {
      title: "Users",
      icon: <GroupsIcon />,
      data: <UserListComponent users={users} />,
      count: users.length,
      dialog: true,
    },
    {
      title: "Points of Interests",
      icon: <InterestsIcon />,
      canAdd: true,
    },
    {
      title: "Frequently Visited",
    },
  ];

  const handleUserDialog = (openState, modeState) => {
    setUserDialog({ ...userDialog, open: openState, mode: modeState });
  };

  useEffect(() => {
    console.log("State", userDialog);
  }, [userDialog]);

  return (
    <Container>
      <Grid container spacing={2} sx={{}}>
        {cardList.map((item) => (
          <Grid key={item.title} item xs={12} md={4}>
            <Card
              elevation={5}
              sx={{ flex: 1, display: "flex", p: 1, justifyContent: "center" }}
            >
              {item.icon}
              <Typography sx={{ fontWeight: "500", px: 1 }}>
                {item.title}
              </Typography>

              <Typography sx={{ fontWeight: "500" }}>{item.count}</Typography>
            </Card>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {item.dialog && (
                <Card
                  sx={{
                    width: 25,
                    height: 25,
                    color: "red",
                    mt: -1,
                    bgcolor: "white",
                    borderRadius: 1000,
                    display: "flex",
                    p: 0.6,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    sx={{ m: 0, p: 0 }}
                    onClick={() => handleUserDialog(true, "create")}
                  >
                    <ControlPointIcon sx={{ color: "green" }} />
                  </IconButton>
                </Card>
              )}
            </Box>

            {item.data}
          </Grid>
        ))}
      </Grid>

      {userDialog.open && (
        <ManageUserDialog
          open={userDialog.open}
          mode={userDialog.mode}
          handleClose={() => handleUserDialog(false, "")}
        />
      )}
    </Container>
  );
};

export default HomeView;
