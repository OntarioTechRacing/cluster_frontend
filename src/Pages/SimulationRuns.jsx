import React from "react";
import MainLayout from "../Components/Simulation Runs/MainLayout";
import { Box } from "@mui/material";
import TableSection from "../Components/Simulation Runs/Table Section/TableSection";
import ImageSection from "../Components/Simulation Runs/Image Section/ImageSection";
import Navbar from "../Components/NavBar/Navbar";

export default function SimulationRuns() {
  return (
    <Box
      sx={{
        height: { xs: "auto", lg: "100vh" },
        display: "flex",
      }}
    >
      <Navbar />
      <MainLayout>
        <TableSection />
        <ImageSection />
      </MainLayout>
    </Box>
  );
}
