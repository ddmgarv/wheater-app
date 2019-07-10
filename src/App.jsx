import React, { Component } from "react";
import LocationList from "./components/WeatherLocation/LocationList";

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us",
  "La Plata,ar",
  "Quilmes,ar"
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log("Handle selection location method");
  };
  render() {
    return (
      <div>
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
