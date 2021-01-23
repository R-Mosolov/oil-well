import React, { Component } from 'react';

export default class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.createViewScope(this.props.targetHeight),
    };
  }

  createViewScope(targetHeight) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customGrey = "rgba(0, 0, 0, 0.25)";

    ctx.fillStyle = customGrey;
    return ctx.fillRect(        // Set the ruler coords
      660,                      // Offset by horizontal (X)
      410 - (targetHeight / 2), // Offset by vertical (Y)
      80,                       // Width
      targetHeight,             // Height
    );
  }

  render() {
    this.createViewScope(this.props.targetHeight);

    return (
      <></>
    );
  }
}
