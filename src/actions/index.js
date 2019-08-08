import transformForecast from "./../services/transformForeCast";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const SET_CITY = "SET_CITY";

export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "a099183b807b408a8de93c2e3ccc81b1";

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    dispatch(setCity(payload));

    return fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);

        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};
