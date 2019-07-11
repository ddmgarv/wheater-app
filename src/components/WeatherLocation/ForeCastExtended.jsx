import React, { Component } from "react";
import PropTypes from "prop-types";

class ForCastExtended extends Component {
  render() {
    const { city } = this.props;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        Pronóstico extendido Para: {city}
      </div>
    );
  }
}

ForCastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForCastExtended;
