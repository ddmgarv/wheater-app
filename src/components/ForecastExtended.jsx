import React, { Component } from "react";
import PropTypes from "prop-types";
import ForeCastItem from "./ForeCastItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./WeatherLocation/style.css";

// const days = [
//   "Lunes",
//   "Martes",
//   "Miércoles",
//   "Jueves",
//   "Viernes",
//   "Sábado",
//   "Domingo"
// ];
// const data = {
//   temperature: 25,
//   weatherState: "normal",
//   humidity: 15,
//   wind: "normal"
// };
const api_key = "a099183b807b408a8de93c2e3ccc81b1";
const url_base_weather =
  "api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";
class ForcastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }

  renderForeCastItemDays() {
    return "Render Items";
    //return days.map(day => <ForeCastItem weekday={day} hour={5} data={data} />);
  }
  renderProgress() {
    return <CircularProgress color="secondary" size={75} />;
  }
  componentDidMount() {}
  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h3 className="forecast-title">Pronóstico extendido Para: {city}</h3>
        {forecastData ? this.renderForeCastItemDays() : this.renderProgress()}
      </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForcastExtended;
