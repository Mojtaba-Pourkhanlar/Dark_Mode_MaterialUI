import { AppBar, Container, Typography } from "@mui/material";
import React from "react";
import { Theme } from "../functions/Theme";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xl"
        sx={{ p: "20px", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3">ChangeTheme</Typography>
        <Theme/>
      </Container>
    </AppBar>
  );
};

export default Header;
