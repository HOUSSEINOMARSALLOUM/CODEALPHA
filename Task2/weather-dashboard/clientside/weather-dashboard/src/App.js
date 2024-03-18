import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import "./assets/styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />

      <Footer />
    </div>
  );
};

export default App;
