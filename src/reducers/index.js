import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCities
} from "./cities";
import { city } from "./city";

export default combineReducers({
  myCities: cities,
  currentCity: city
});

export const getCity = state =>
  createSelector(
    state => state.city,
    city => city
  );

export const getForecastDataFromCities = state =>
  createSelector(
    state => state.cities,
    getCity,
    _getForecastDataFromCities
  );
