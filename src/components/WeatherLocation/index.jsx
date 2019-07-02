import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";

const WeatherLocation = () => (
  <div>
    <Location city={"La Plata"} />
    <WeatherData />
  </div>
);
export default WeatherLocation;
