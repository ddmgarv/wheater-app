import React, { Component } from "react";
import WeatherLocation from "./components/weather-location";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h2>Weather App!!</h2>
      <WeatherLocation />
    </div>
  );
}

export default App;
