import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Autocomplete, Card, Grid, TextField, useTheme } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import { userTypes } from "../../../../mock/users";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ManageUserDialog = ({
  open,
  mode,
  user,
  handleClose,
  handleCreate,
  handleUpdate,
}) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Card
          elevation={10}
          sx={{
            m: 1,
            p: 1,
            // color: "white",
            textAlign: "center",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccountCircle sx={{ mr: 1 }} />
          <DialogTitle sx={{ p: 0 }}>Create new user</DialogTitle>
        </Card>

        <Grid container spacing={2} sx={{ p: 1, my: 0.1, width: 600 }}>
          <Grid item xs={12} md={6} sx={{}}>
            <TextField
              size="small"
              sx={{}}
              fullWidth
              // error
              id="outlined-error-helper-text"
              label="Name"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
            <TextField
              size="small"
              sx={{}}
              fullWidth
              // error
              id="outlined-error-helper-text"
              label="Surname"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
            <TextField
              size="small"
              sx={{}}
              fullWidth
              // error
              id="outlined-error-helper-text"
              label="Email Address"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Autocomplete
              size="small"
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={userTypes}
              renderInput={(params) => <TextField {...params} label="I am a" />}
            />
          </Grid>
        </Grid>

        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ color: "red" }}
            onClick={() => handleClose(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{}}
            onClick={() => handleClose(false)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

ManageUserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(["create", "update", ""]).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ManageUserDialog;
