"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { AttachFile, NorthEast } from "@mui/icons-material";

export default function Home() {
  const suggestions = [
    "Generate a sticky header",
    "How can I structure LLM output?",
    "Write code to implement a min heap",
  ];
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background: #f0f0f0" }}>
      {/* Hero Section */}
      <Container maxWidth="md">
        <Box
          sx={{
            mt: 4,
            mb: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 600,
              fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            What can I help you ship?
          </Typography>

          {/* Search Input */}
          <TextField
            fullWidth
            placeholder="Ask v0 a question..."
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: "background.paper",
                "& fieldset": {
                  borderColor: "divider",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="text"
                      endIcon={<NorthEast />}
                      sx={{ color: "text.secondary" }}
                    >
                      Project
                    </Button>
                    <IconButton>
                      <AttachFile />
                    </IconButton>
                  </Stack>
                </InputAdornment>
              ),
            }}
          />

          {/* Suggestions */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            sx={{ gap: 1 }}
          >
            {suggestions.map((suggestion) => (
              <Chip
                key={suggestion}
                label={suggestion}
                onClick={() => {}}
                sx={{
                  borderRadius: "8px",
                  bgcolor: "background.paper",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
