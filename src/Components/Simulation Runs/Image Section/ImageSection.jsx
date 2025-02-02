import React from "react";
import { Stack } from "@mui/material";
import DropDown from "../DropDown";
import SimulationImage from "./SimulationImage";
export default function ImageSection() {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        maxWidth: 700,
        width: { sm: 350, md: 500, lg: 1 / 2 },
      }}
    >
      <SimulationImage />
      <DropDown />
    </Stack>
  );
}
