import React, { Component } from 'react';

import { RULER_HEIGHT } from '../constants';

export default class ViewScope extends Component {
  createViewScope(mainMeasuresCount) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customGrey = "rgba(0, 0, 0, 0.25)";

    ctx.fillStyle = customGrey;
    return ctx.fillRect(                // Set the ruler coords
      670,                              // Offset by horizontal (X)
      10,                               // Offset by vertical (Y)
      60,                               // Width
      RULER_HEIGHT / mainMeasuresCount, // Height
    );
  }

  render() {
    const { mainMeasuresCount } = this.props;

    this.createViewScope(mainMeasuresCount);

    return (
      <></>
    );
  }
}
