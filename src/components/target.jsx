import React, { Component } from 'react';

export default class Target extends Component {
  createRulerBackground() {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customGrey = "rgba(0, 0, 0, 0.25)";

    ctx.fillStyle = customGrey;
    return ctx.fillRect(  // Set the ruler coords
      650,                // Offset by horizontal (X)
      410,                // Offset by vertical (Y)
      100,                // Width
      50,                 // Height
    );
  }

  render() {
    this.createRulerBackground();

    return (
      <></>
    );
  }
}
