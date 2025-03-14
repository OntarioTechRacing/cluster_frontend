import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
const CustomSelect = styled(Select)(() => ({
  width: 250,
  "& .MuiSvgIcon-root": {
    color: "purple",
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9EBEE1",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#C4AEE5",
    },
  },
}));
export default function DropDown() {
  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Box>
      <FormControl
        sx={{
          minWidth: 120,
          marginTop: 3,
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "white",
          }}
        >
          Data
        </InputLabel>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Select Unit"
          onChange={handleChange}
          sx={{
            color: "white",
          }}
        >
          <MenuItem value={10}>N</MenuItem>
          <MenuItem value={20}>m</MenuItem>
          <MenuItem value={30}>s</MenuItem>
        </CustomSelect>
      </FormControl>
    </Box>
  );
}
