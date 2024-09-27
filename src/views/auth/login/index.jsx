import {
  Box,
  Button,
  Card,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const LoginView = () => {
  return (
    <Container>
      {/* Header horizontal row */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box sx={{ m: 1, flexGrow: 1 }}>
          <Paper
            elevation={10}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle-1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              250
            </Typography>

            <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
              250
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ m: 1, flexGrow: 1 }}>
          <Paper
            elevation={10}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle-1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              250
            </Typography>

            <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
              250
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ m: 1, flexGrow: 1 }}>
          <Paper
            elevation={10}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle-1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              250
            </Typography>

            <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
              250
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ m: 1, flexGrow: 1 }}>
          <Paper
            elevation={10}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle-1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              250
            </Typography>

            <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
              250
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ m: 1, flexGrow: 1 }}>
          <Paper
            elevation={10}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle-1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              250
            </Typography>

            <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
              250
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Body horizontal row */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            m: 1,
            flexGrow: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            elevation={10}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="subtitle-1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              250
            </Typography>

            <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
              250
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Box sx={{ m: 1, flexGrow: 1 }}>
            <Paper
              elevation={10}
              sx={{
                flexGrow: 1,
                px: 2,
                py: 2,
                borderRadius: 5,
              }}
            >
              <Typography
                variant="subtitle-1"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                250
              </Typography>

              <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
                250
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ m: 1, flexGrow: 1 }}>
            <Paper
              elevation={10}
              sx={{
                flexGrow: 1,
                px: 2,
                py: 2,
                borderRadius: 5,
              }}
            >
              <Typography
                variant="subtitle-1"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                250
              </Typography>

              <Typography variant="h6" sx={{ flexGrow: 1, p: 5 }}>
                250
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginView;
