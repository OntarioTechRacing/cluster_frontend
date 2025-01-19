import { Box } from "@mui/material";
import React from "react";

export default function MainLayout({ Children }) {
  return (
    <Box
      direction="row"
      sx={{
        backgroundColor: "#0C0918",
        height: "100vh",
        flexGrow: 1,
      }}
    >
      {Children}
    </Box>
  );
}
