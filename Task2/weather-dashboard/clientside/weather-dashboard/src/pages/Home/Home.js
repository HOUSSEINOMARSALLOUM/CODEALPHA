import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Map from "../../components/Map/Map";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <WeatherCard />
      <Map />
    </div>
  );
};

export default Home;
