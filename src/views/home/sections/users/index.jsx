import React, { useEffect } from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Delete from "@mui/icons-material/Delete";
import AccountCircle from "@mui/icons-material/AccountCircle";

const UsersSection = ({ users, viewUser }) => {
  return (
    <Grid>
      {users && users.length > 0 ? (
        <Box sx={{ maxHeight: 500, overflowY: "auto" }}>
          <List dense={true}>
            {users.map((item) => (
              <ListItem
                sx={{ display: "flex", py: 0 }}
                key={item.id}
                secondaryAction={
                  <Stack
                    direction="row"
                    spacing={1}
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                    <IconButton aria-label="delete" sx={{ p: 0 }}>
                      <Delete sx={{ width: 15, height: 15, color: "red" }} />
                    </IconButton>
                  </Stack>
                }
              >
                <IconButton
                  aria-label="profile"
                  sx={{ p: 0, mr: 1 }}
                  onClick={() => viewUser(item)}
                >
                  <AccountCircle color="primary" />
                </IconButton>

                <ListItemText
                  primary={`${item.name} ${item.surname}`}
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "bold",
                  }}
                  secondary={item.email}
                  secondaryTypographyProps={{ fontSize: 13, fontWeight: "500" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Typography>No Users found</Typography>
      )}
    </Grid>
  );
};

UsersSection.propTypes = {
  users: PropTypes.array,
  viewUser: PropTypes.func,
};

export default UsersSection;
