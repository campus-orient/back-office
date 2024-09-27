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
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Delete from "@mui/icons-material/Delete";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useUsersLoginsContext } from "../../context/declarations";

const UsersLogins = () => {
  const { usersLoginsQuery } = useUsersLoginsContext();
  const [usersLogins, setUsersLogins] = useState([]);

  useEffect(() => {
    setUsersLogins(usersLoginsQuery?.data?.usersLogins || []);
    console.log("users logins", usersLogins);
  }, [usersLoginsQuery]);

  return (
    <Grid>
      {usersLogins && usersLogins.length > 0 ? (
        <Box sx={{ maxHeight: 500, overflowY: "auto" }}>
          <List dense={true}>
            {usersLogins.map((item) => (
              <ListItem
                sx={{ display: "flex", py: 0 }}
                key={item.id}
                secondaryAction={
                  <Stack
                    direction="row"
                    spacing={1}
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                  </Stack>
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
        </Box>
      ) : (
        <Typography>No Interests Places found</Typography>
      )}
    </Grid>
  );
};

UsersLogins.propTypes = {
  usersLogins: PropTypes.array,
};

export default UsersLogins;
