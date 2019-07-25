import React, { Component } from "react";
import PropTypes from "prop-types";
import ForeCastItem from "./ForeCastItem";
import transformForeCast from "./../services/transformForeCast";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./WeatherLocation/style.css";

class ForcastExtended extends Component {
  constructor() {
    super();
    this.state = {
      url_base_weather: "http://api.openweathermap.org/data/2.5/forecast",
      api_key: "a099183b807b408a8de93c2e3ccc81b1",
      forecastData: null
    };
  }

  renderForeCastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForeCastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }
  renderProgress() {
    return <CircularProgress color="primary" size={75} />;
  }
  componentDidMount() {
    this.updateCity(this.props.city);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }
  updateCity = city => {
    const url_forecast = `${this.state.url_base_weather}?q=${city}&appid=${
      this.state.api_key
    }`;
    fetch(url_forecast)
      .then(data => {
        return data.json();
      })
      .then(weather_data => {
        const forecastData = transformForeCast(weather_data);
        this.setState({ forecastData });
      })
      .catch(error => console.log(error));
  };
  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h3 className="forecast-title">Pronóstico extendido Para: {city}</h3>
        {forecastData
          ? this.renderForeCastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForcastExtended;
