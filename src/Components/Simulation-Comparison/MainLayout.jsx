import React from "react";
import { Container } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "red",
      }}
    >
      {children}
    </Container>
  );
}
