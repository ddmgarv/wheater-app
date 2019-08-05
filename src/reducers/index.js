import { combineReducers } from "redux";
import { cities } from "./cities";
import { city } from "./city";

export default combineReducers({
  myCities: cities,
  currentCity: city
});
