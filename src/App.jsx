import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import "bootstrap/dist/css/bootstrap.css";
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
  render() {
    return (
      <Grid className="main-body">
        <Row>
          <Col>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  <h3>WeatherApp</h3>
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            {/* Crea una sombra en el div, el parametro elevation indica la profundida */}
            <Paper zdepth={5}>
              <div className="details">
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
