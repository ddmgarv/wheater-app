import React, { Component } from "react";
import PropTypes from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./style.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "./../../constants/weather";

const location_id = "3792743";
const api_key = "a099183b807b408a8de93c2e3ccc81b1";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?id=${location_id}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};
const data2 = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 20,
  wind: "30 m/s"
};
const data3 = {
  temperature: 25,
  weatherState: SNOW,
  humidity: 500,
  wind: "15 m/s"
};
class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "La Plata",
      data: data
    };
  }
  handleUpdateClick = () => {
    fetch(api_weather);
    console.log("Actualizado");
    this.setState({
      city: "Buenos Aires",
      data: data2
    });
  };
  handleUpdateClick2 = () => {
    this.setState({
      city: "Mar Del Plata",
      data: data3
    });
  };
  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
        <button onClick={this.handleUpdateClick2}>Actualizar 2</button>
      </div>
    );
  }
}

export default WeatherLocation;
