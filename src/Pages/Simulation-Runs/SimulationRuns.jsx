import React from "react";
import SideNavBar from "../../Components/Side-Bar-Nav/SideNavBar";
import "./SimuationRuns.css";
import MainLayout from "../../Components/Simulation Runs/MainLayout";
import { Box } from "@mui/material";
import DataTable from "../../Components/Simulation Runs/Table Section/DataTable";
import TableSection from "../../Components/Simulation Runs/Table Section/TableSection";
export default function SimulationRuns() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
      }}
    >
      <SideNavBar />
      <MainLayout Children={<TableSection />}></MainLayout>
    </Box>
  );
}
