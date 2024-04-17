import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Card, Divider, Stack, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const UserListComponent = ({ users }) => {
  return (
    <Box>
      <Grid sx={{ width: "100%" }}>
        {users && users.length > 0 ? (
          <List dense={true}>
            {users.map((item) => (
              <ListItem
                sx={{ display: "flex", p: 0 }}
                key={item.id}
                secondaryAction={
                  <Stack
                    direction="row"
                    spacing={1}
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                    <IconButton aria-label="delete">
                      <AssignmentIndIcon sx={{ width: 20 }} />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <DeleteIcon sx={{ width: 20, color: "red" }} />
                    </IconButton>
                  </Stack>
                }
              >
                <AccountCircleIcon sx={{ mx: 1 }} />

                <ListItemText
                  primary={`${item.name} ${item.surname}`}
                  secondary={item.email}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No Users found</Typography>
        )}
      </Grid>
    </Box>
  );
};

UserListComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Define other PropTypes for each user object property
    })
  ),
};

export default UserListComponent;
