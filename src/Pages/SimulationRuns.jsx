import React from "react";
import MainLayout from "../components/Simulation Runs/MainLayout";
import { Box } from "@mui/material";
import TableSection from "../components/Simulation Runs/Table Section/TableSection";
import ImageSection from "../components/Simulation Runs/Image Section/ImageSection";
import Navbar from "../components/NavBar/Navbar";

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
