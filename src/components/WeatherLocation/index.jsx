import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import WeatherData from "./WeatherData";
import "./style.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props; // Por destructuring
    this.state = {
      city, // Asigno el valor a la propiedad city de city por destructuring
      data: null
    };
  }
  componentDidMount() {
    this.updateData();
  }

  updateData = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather)
      .then(resolve => {
        return resolve.json(); // Obtenemos una nueva promise a partir de esta funcion
      })
      .then(data => {
        const newWeather = transformWeather(data);
        this.setState({
          data: newWeather
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
      </div>
    );
  }
}
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
};
export default WeatherLocation;
