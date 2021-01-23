import React, { Component } from 'react';

export default class ViewScope extends Component {
  createViewScope(viewScopeHeight) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customGrey = "rgba(0, 0, 0, 0.25)";

    ctx.fillStyle = customGrey;
    return ctx.fillRect(            // Set the ruler coords
      660,                          // Offset by horizontal (X)
      410 - (viewScopeHeight / 2),  // Offset by vertical (Y)
      80,                           // Width
      viewScopeHeight,              // Height
    );
  }

  render() {
    this.createViewScope(this.props.viewScopeHeight);

    return (
      <></>
    );
  }
}
