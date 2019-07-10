import React from "react";
import WeatherLocation from "./index";
import PropTypes from "prop-types";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log("Handle WL click");
    onSelectedLocation(city);
  };
  const strToComponents = cities =>
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
      />
    ));

  return <div>{strToComponents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
