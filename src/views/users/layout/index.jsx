import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useUsersContext } from "../../../context/declarations";

const UsersView = (props) => {
  const { usersQuery } = useUsersContext();

  const [users, setUsers] = useState(usersQuery?.data?.users || []);

  return (
    <Box sx={{ maxHeight: "100vh", overflowY: "auto" }}>
      {users.length ? (
        <List dense={true}>
          {users?.map((item) => (
            <ListItem
              sx={{ display: "flex", py: 0 }}
              key={item.id}
              secondaryAction={
                <Stack
                  direction="row"
                  spacing={1}
                  divider={<Divider orientation="vertical" flexItem />}
                ></Stack>
              }
            >
              <IconButton
                aria-label="profile"
                sx={{ p: 0, mr: 1 }}
                // onClick={() => viewUser(item)}
              >
                <AccountCircle color="primary" />
              </IconButton>

              <ListItemText
                primary={`${item.name}`}
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "bold",
                }}
                secondary={`${item.latitude}, ${item.longitude}`}
                secondaryTypographyProps={{ fontSize: 13, fontWeight: "500" }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          No users found
        </Typography>
      )}
    </Box>
  );
};

UsersView.propTypes = {};

export default UsersView;
