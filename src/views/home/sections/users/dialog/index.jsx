import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Autocomplete, Card, Grid, TextField, useTheme } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import { validateName } from "../../../../../utils/helpers/validate-name";
import validateEmail from "../../../../../utils/helpers/validate-email";
import { validateType } from "../../../../../utils/helpers/validate-type";

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

  const [name, setName] = useState({
    value: "",
    isError: false,
    error: "",
  });

  const [surname, setSurname] = useState({
    value: "",
    isError: false,
    error: "",
  });

  const [email, setEmail] = useState({
    value: "",
    isError: false,
    error: "",
  });

  const [type, setType] = useState({
    value: "",
    isError: false,
    error: "",
  });

  const [form, setForm] = useState({
    submitted: false,
    isValid: false,
    isSubmitting: false,
  });

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
              id="outlined-error-helper-text"
              label="Name"
              error={
                form.submitted
                  ? validateName(name.value, "Name")
                    ? true
                    : false
                  : false
              }
              helperText={validateName(name.value, "Name")}
              value={name.value}
              onChange={(e) => setName({ ...name, value: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
            <TextField
              size="small"
              sx={{}}
              fullWidth
              id="outlined-error-helper-text"
              label="Surname"
              error={
                form.submitted
                  ? validateName(surname.value, "Surname")
                    ? true
                    : false
                  : false
              }
              helperText={validateName(surname.value, "Surname")}
              value={surname.value}
              onChange={(e) =>
                setSurname({ ...surname, value: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
            <TextField
              size="small"
              sx={{}}
              fullWidth
              id="outlined-error-helper-text"
              label="Email"
              error={
                form.submitted
                  ? validateEmail(email.value)
                    ? true
                    : false
                  : false
              }
              helperText={validateEmail(email.value)}
              value={email.value}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Autocomplete
              size="small"
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={["", "student", "staff", "admin"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="User is"
                  helperText={validateType(type.value)}
                />
              )}
              noOptionsText="No user types were found"
              value={type.value}
              onChange={(event, newValue) =>
                setType({ ...type, value: newValue })
              }
            />
          </Grid>
        </Grid>

        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ color: "red" }}
            onClick={() => handleClose(1, false, mode)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            size="small"
            disabled={
              validateName(name.value)
                ? true
                : false || validateName(surname.value)
                ? true
                : false || validateEmail(email.value)
                ? true
                : false || validateType(type.value)
                ? true
                : false
            }
            sx={{}}
            onClick={() =>
              handleCreate({
                name: name.value,
                surname: surname.value,
                email: email.value,
                type: type.value,
              })
            }
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
  mode: PropTypes.string,
  handleClose: PropTypes.func,
  handleCreate: PropTypes.func,
};

export default ManageUserDialog;
