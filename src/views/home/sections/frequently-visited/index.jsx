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
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Delete from "@mui/icons-material/Delete";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const FrequentlyVisitedSection = ({ interestsPlaces, handleDelete }) => {
  useEffect(() => {
    //
    console.log("Interests places", interestsPlaces);
  }, []);

  const handleDeleteClick = (item) => {
    if (confirm(`Are you sure you want to delete ${item?.name}`))
      return handleDelete(item.id);
  };

  return (
    <Grid>
      {interestsPlaces && interestsPlaces.length > 0 ? (
        <Box sx={{ maxHeight: 500, overflowY: "auto" }}>
          <List dense={true}>
            {interestsPlaces.map((item) => (
              <ListItem
                sx={{ display: "flex", py: 0 }}
                key={item.id}
                secondaryAction={
                  <Stack
                    direction="row"
                    spacing={1}
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                    <IconButton
                      aria-label="delete"
                      sx={{ p: 0 }}
                      onClick={() => handleDeleteClick(item)}
                    >
                      <Delete sx={{ width: 15, height: 15, color: "red" }} />
                    </IconButton>
                  </Stack>
                }
              >
                <IconButton
                  aria-label="profile"
                  sx={{ p: 0, mr: 1 }}
                  // onClick={() => viewUser(item)}
                >
                  <Diversity2Icon color="primary" />
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
        <Typography>No Visits found</Typography>
      )}
    </Grid>
  );
};

FrequentlyVisitedSection.propTypes = {
  interestsPlaces: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default FrequentlyVisitedSection;
