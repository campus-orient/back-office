import {
  Box,
  Button,
  Card,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import validateEmail from "../../../utils/helpers/exception/verify-email";
import validatePassword from "../../../utils/helpers/exception/verify-password";
import { login } from "../../../services/http/auth";
import SnackbarComponent from "../../../components/feedback/snackbar";
import { failedRequest } from "../../../utils/helpers/exception/http/failedRequest";

const LoginView = () => {
  const [email, setEmail] = useState({
    value: "",
    isError: false,
    message: "",
  });

  const [password, setPassword] = useState({
    value: "",
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    submitted: false,
    isValid: false,
    isSubmitting: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const submit = async () => {
    //
    setForm({ ...form, submitted: true });

    console.log("Submit form", validateEmail(email.value) ? true : false);

    setEmail({
      ...email,
      isError: validateEmail(email.value),
    });

    setPassword({
      ...password,
      isError: validatePassword(password.value),
    });

    if (!validateEmail(email.value) && !validatePassword(password.value)) {
      setForm({ ...form, isSubmitting: true });

      console.log("isSubmitting", form.isSubmitting);
      const response = await login({
        email: email.value,
        password: password.value,
      });

      setForm({ ...form, isSubmitting: false });

      setPassword({ ...password, value: "" });

      setSnackbar({
        ...snackbar,
        open: true,
        message: failedRequest(response).message,
        severity: "error",
      });

      console.log("Login response", response);
    }
  };

  useEffect(() => {
    if (!validateEmail(email.value) && !validatePassword(password.value))
      setForm((f) => ({
        ...f,
        isValid: true,
      }));
  }, [email, password, form.isSubmitting]);

  useEffect(() => {
    if (!email.value || !password.value || form.isSubmitting)
      setForm((f) => ({ ...f, isValid: false }));
  }, [email.value, password.value, form]);

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Card sx={{ p: 2, width: 400 }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Campus Orient
            </Typography>

            <Box
              sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}
            >
              <AlternateEmailIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                fullWidth
                type="email"
                label="email address"
                variant="standard"
                error={
                  form.submitted
                    ? validateEmail(email.value)
                      ? true
                      : false
                    : false
                }
                helperText={form.submitted ? validateEmail(email.value) : null}
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.target.value })}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                mb: 5,
              }}
            >
              <LockPersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                type="password"
                label="password"
                variant="standard"
                error={
                  form.submitted
                    ? validatePassword(password.value)
                      ? true
                      : false
                    : false
                }
                helperText={
                  form.submitted ? validatePassword(password.value) : null
                }
                value={password.value}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
              />
            </Box>

            <Button
              variant="outlined"
              color="success"
              onClick={submit}
              disabled={!form.isValid}
            >
              {form.isSubmitting ? "Processing..." : "Submit"}
            </Button>
          </Stack>
        </Card>
      </Box>

      <SnackbarComponent
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleVisibility={(state) => {
          setSnackbar({
            ...snackbar,
            open: state,
          });
        }}
      />
    </Container>
  );
};

export default LoginView;
