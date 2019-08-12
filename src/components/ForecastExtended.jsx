import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForeCastItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./WeatherLocation/style.css";

const renderForecastItemDays = forecastData =>
  forecastData.map(forecast => {
    return (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    );
  });
const renderProgress = () => {
  return <CircularProgress />;
};
const ForcastExtended = ({ city, forecastData }) => (
  <div>
    <h3 className="forecast-title">Pronóstico extendido Para: {city}</h3>
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
);

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
};

export default ForcastExtended;
