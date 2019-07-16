import React from "react";
import PropTypes from "prop-types";
import WeatherData from "./../WeatherLocation/WeatherData";

const ForeCastItem = ({ weekDay, hour, data }) => (
  <div>
    <h2>
      Dia: {weekDay} - hora: {hour}
      {" hs"}
    </h2>
    <WeatherData data={data} />
  </div>
);

ForeCastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default ForeCastItem;
