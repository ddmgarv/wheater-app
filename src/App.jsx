import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationList from "./components/WeatherLocation/LocationList";
import ForeCastExtended from "./components/WeatherLocation/ForeCastExtended";
// import "bootstrap/dist/css/bootstrap.css";
import "./main-style.css";
const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us",
  "La Plata,ar",
  "Quilmes,ar"
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: "Nueva Ciudad" };
  }
  handleSelectedLocation = city => {
    this.setState({ city });
  };
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <Col>
            <AppBar postiion="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  WeatherApp
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            {/* Crea una sombra en el div, el parametro elevation indica la profundida */}
            <Paper zDepth={4}>
              <div className="details">
                <ForeCastExtended city={city} />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
