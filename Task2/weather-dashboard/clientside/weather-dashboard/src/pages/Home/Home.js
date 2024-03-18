import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Map from "../../components/Map/Map";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (location) => {
    setLocation(location);
  };

  return (
    <div className="container">
      {" "}
      <div className="row">
        {" "}
        <div className="col-md-6">
          {" "}
          <SearchBar onFormSubmit={handleSearch} />{" "}
          {location && <WeatherCard location={location} />}
        </div>{" "}
        <div className="col-md-6">
          {" "}
          <Map />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Home;
