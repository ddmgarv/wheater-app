import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import PropTypes from "prop-types";
import "./style.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "./../../../constants/weather";

const WeatherData = () => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={20} weatherState={CLOUDY} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);
export default WeatherData;
