import React, { Component } from 'react';

import { RULER_HEIGHT } from '../constants';

export default class Well extends Component {
  createWell() {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customLightGrey = "rgba(0, 0, 0, 0.10)";

    ctx.fillStyle = customLightGrey;
    return ctx.fillRect(  // Set the ruler coords
      650,                // Offset by horizontal (X)
      10,                 // Offset by vertical (Y)
      100,                // Width
      RULER_HEIGHT,       // Height
    );
  }

  render() {
    this.createWell();

    return (
      <></>
    );
  }
}
