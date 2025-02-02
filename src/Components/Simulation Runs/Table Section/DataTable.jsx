import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0C0918",
    color: theme.palette.common.white,
    fontSize: "1rem",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#0C0918",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "#9EBEE1 !important",
  },
  "&:nth-of-type(even) th, &:nth-of-type(even) td": {
    color: "white",
  },
}));

function createData(name, Values) {
  return { name, Values };
}

const rows = [
  createData("field 1", "value 1"),
  createData("field 2", "value 2"),
  createData("field 3", "value 3"),
  createData("field 4", "value 4"),
  createData("field 5", "value 5"),
  createData("field 6", "value 6"),
];

export default function DataTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        border: 4,
        borderColor: "white",
        maxWidth: 500,
        width: { xs: 300, md: 350, lg: 400 },
      }}
    >
      <Table
        sx={{ width: "100%", maxWidth: 500 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Fields</StyledTableCell>
            <StyledTableCell align="right">Values</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} hover>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Values}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
