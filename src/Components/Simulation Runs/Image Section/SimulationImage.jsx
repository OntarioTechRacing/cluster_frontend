import React from "react";
import plcaeholder from "../../../Images/placeholders/simulation-image-placeholder.png";
import { Box } from "@mui/material";
export default function SimulationImage() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        height: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white",
        padding: 2,
      }}
    >
      <img
        src={plcaeholder}
        alt=""
        style={{
          width: "100%",
        }}
      ></img>
    </Box>
  );
}
