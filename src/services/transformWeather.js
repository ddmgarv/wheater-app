import convert from "convert-units";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "./../constants/weather";

const getTemp = kelvin => {
  return Number(
    convert(kelvin)
      .from("K")
      .to("C")
      .toFixed(0)
  );
};
const getWeatherState = weather => {
  const { id } = weather;
  switch (id) {
    case id < 300:
      return THUNDER;
    case id < 400:
      return DRIZZLE;
    case id < 500:
      return RAIN;
    case id < 600:
      return SNOW;
    case id === 800:
      return SUN;
    default:
      return CLOUD;
  }
};
const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]);
  const temperature = getTemp(temp);

  const data = {
    temperature: temperature,
    humidity: humidity,
    wind: `${speed} m/s`,
    weatherState: weatherState
  };
  return data;
};
export default transformWeather;
