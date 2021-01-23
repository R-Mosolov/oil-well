import React, { Component } from 'react';

export default class Target extends Component {
  createRulerBackground(targetHeight) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customGrey = "rgba(0, 0, 0, 0.25)";

    ctx.fillStyle = customGrey;
    return ctx.fillRect(  // Set the ruler coords
      650,                // Offset by horizontal (X)
      410,                // Offset by vertical (Y)
      100,                // Width
      targetHeight,       // Height
    );
  }

  render() {
    const { targetHeight } = this.props;

    this.createRulerBackground(targetHeight);

    return (
      <></>
    );
  }
}
