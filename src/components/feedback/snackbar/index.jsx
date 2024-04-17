import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";

const SnackbarComponent = ({ open, severity, message, handleVisibility }) => {
  React.useEffect(() => {
    //
    if (open) {
      setTimeout(() => {
        handleVisibility(false);
      }, 3000);
    }
  }, [open, handleVisibility]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

SnackbarComponent.propTypes = {
  //
  open: PropTypes.bool,
  message: PropTypes.string,
  severity: PropTypes.string,
  handleVisibility: PropTypes.func,
};

export default SnackbarComponent;
