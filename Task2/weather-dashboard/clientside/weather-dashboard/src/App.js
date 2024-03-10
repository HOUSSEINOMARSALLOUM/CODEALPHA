import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import "./assets/styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <WeatherCard />
    </div>
  );
};

export default App;
