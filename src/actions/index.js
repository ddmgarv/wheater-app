export const SET_CITY = "SET_CITY";

export const setCity = payload => ({ type: SET_CITY, payload });

const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "a099183b807b408a8de93c2e3ccc81b1";

export const fetchForecast = payload => {
  return dispatch => {
    const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;

    // Activar en el estado una busqueda de datos
    fetch(url_forecast)
      .then(data => {
        return data.json();
      })
      .then(weather_data => {
        const forecastData = transformForeCast(weather_data);
        // Modificar el estado con el resultadod de la promise(fetch)
      })
      .catch(error => console.log(error));
    return;
  };
};
