import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/NavBar/Navbar";
import MainLayout from "../Components/Simulation-Comparison/MainLayout";
export default function SimulationComparison() {
  return (
    <Box
      sx={{
        height: { xs: "auto", lg: "100vh" },
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Navbar />
      <MainLayout>
        <div>Hello</div>
      </MainLayout>
    </Box>
  );
}
