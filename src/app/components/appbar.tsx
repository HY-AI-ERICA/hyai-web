"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

export default function ButtonAppBar() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="rounded-b-lg"
        sx={{ backgroundColor: "#0E4A84" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              onClick={() => {
                router.push("/");
              }}
              src="/logo.png"
              alt="logo"
              className="cursor-pointer"
              width="100"
              height="40"
            />
          </Typography>
          <Button
            onClick={() => {
              router.push("/about");
            }}
            color="inherit"
          >
            About
          </Button>
          <Button
            onClick={() => {
              router.push("/module");
            }}
            color="inherit"
          >
            Module
          </Button>
          <Button
            onClick={() => {
              router.push("/event");
            }}
            color="inherit"
          >
            Event
          </Button>
          <Button
            onClick={() => {
              router.push("/blog");
            }}
            color="inherit"
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
