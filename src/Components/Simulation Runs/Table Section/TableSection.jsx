import { Stack } from "@mui/material";
import React from "react";
import DataTable from "./DataTable";
import DropDown from "../../DropDown";

export default function TableSection() {
  return (
    <Stack direction="column" spacing={2}>
      <DataTable />
      <DropDown />
    </Stack>
  );
}
