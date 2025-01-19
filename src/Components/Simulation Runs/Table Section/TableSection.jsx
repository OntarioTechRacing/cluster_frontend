import { Stack } from "@mui/material";
import React from "react";
import DataTable from "./DataTable";
import TableDropDown from "./TableDropDown";

export default function TableSection() {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        marginLeft: 4,
        marginTop: 12,
      }}
    >
      <DataTable />
      <TableDropDown />
    </Stack>
  );
}
