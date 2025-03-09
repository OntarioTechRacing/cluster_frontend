import { Stack } from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";
export default function MainLayout({ children }) {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={{ xs: 6, lg: 0 }}
      sx={{
        backgroundColor: "#0C0918",
        height: "100%",
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingX: 6,
        paddingY: { xs: 4, lg: 0 },
      }}
    >
      {children}
    </Stack>
  );
}
