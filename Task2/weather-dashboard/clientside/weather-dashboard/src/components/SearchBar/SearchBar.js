import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value;
    onFormSubmit(location);
  };

  return (
    <div className="search-bar" onSubmit={handleSubmit}>
      <form>
        <TextField
          name="location"
          label="Enter location..."
          variant="outlined"
          size="small"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
