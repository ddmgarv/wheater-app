import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./style.css";
import { api_weather } from "./../../constants/api_urls";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "./../../constants/weather";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props
    this.state = {
      city: "La Plata",
      data: null
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.updateData();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  updateData = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json(); // Obtenemos una nueva promise a partir de esta funcion
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(data);
        this.setState({
          data: newWeather
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
      </div>
    );
  }
}
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired
}
export default WeatherLocation;
