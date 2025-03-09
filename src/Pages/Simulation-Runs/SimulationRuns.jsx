import React from "react";
import SideNavBar from "../../Components/Side-Bar-Nav/SideNavBar";
import MainLayout from "../../Components/Simulation Runs/MainLayout";
import { Box } from "@mui/material";
import TableSection from "../../Components/Simulation Runs/Table Section/TableSection";
import ImageSection from "../../Components/Simulation Runs/Image Section/ImageSection";

export default function SimulationRuns() {
  return (
    <Box
      sx={{
        height: { xs: "auto", lg: "100vh" },
        display: "flex",
      }}
    >
      <SideNavBar />
      <MainLayout>
        <TableSection />
        <ImageSection />
      </MainLayout>
    </Box>
  );
}
