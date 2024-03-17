import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <TextField
        label="Enter location..."
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
