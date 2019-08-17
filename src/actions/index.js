import transformForecast from "./../services/transformForeCast";
import transformWeather from "./../services/transformWeather";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const SET_CITY = "SET_CITY";

export const SET_WEATHER_CITY = "SET_WEATHER";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "a099183b807b408a8de93c2e3ccc81b1";

export const setSelectedCity = payload => {
  return (dispatch, getState) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    dispatch(setCity(payload));
    const state = getState();
    const date =
      state.cities[payload] && state.cities[payload].forecastDataDate;
    const now = new Date();
    if (date && (now - date) < 1 * 60 * 1000) {
      return;
    }
    return fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));
      const api_weather = `${url}?q=${city}&appid=${api_key}`;
      fetch(api_weather)
        .then(data => {
          return data.json();
        })
        .then(weather_data => {
          const data = transformWeather(weather_data);
          dispatch(setWeatherCity({ city, data }));
        });
    });
  };
};
