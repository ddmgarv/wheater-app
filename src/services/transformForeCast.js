import moment from "moment";
import "moment/locale/es";
import transformWeather from "./transformWeather";

const transformForeCast = data =>
  data.list
    .filter(
      item =>
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 8 ||
        moment.unix(item.dt).hour() === 12
    )
    .map(item => ({
      weekDay: moment.unix(item.dt).format("ddd"),
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item)
    }));

export default transformForeCast;
