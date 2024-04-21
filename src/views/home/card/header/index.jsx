import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import ControlPoint from "@mui/icons-material/ControlPoint";

const CardHeaderComponent = ({ item, toggleDialog }) => {
  return (
    <Box>
      <Card
        elevation={5}
        sx={{ flex: 1, display: "flex", p: 1, justifyContent: "center" }}
      >
        {item?.icon}
        <Typography sx={{ fontWeight: "500", px: 1 }}>{item?.title}</Typography>

        <Typography sx={{ fontWeight: "500" }}>{item?.count}</Typography>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {item?.addDialog ? (
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
              onClick={() => toggleDialog(item.id, true, "create")}
            >
              <ControlPoint sx={{ color: "green" }} />
            </IconButton>
          </Card>
        ) : (
          <Box sx={{ height: 25 }} />
        )}
      </Box>
    </Box>
  );
};

CardHeaderComponent.propTypes = {
  item: PropTypes.object,
  toggleDialog: PropTypes.func,
};

export default CardHeaderComponent;
