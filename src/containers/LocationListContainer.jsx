import React, { Component } from "react";
import LocationList from "../components/WeatherLocation/LocationList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "./../actions";
import { getWeatherCities, getCity } from "./../reducers";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setCity, cities, city } = this.props;
    this.props.setWeather(cities);
    this.props.setCity(city);
  }

  handleSelectedLocation = city => {
    this.props.setCity(city);
  };
  render() {
    return (
      <LocationList
        cities={this.props.cities}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
  };
};

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
