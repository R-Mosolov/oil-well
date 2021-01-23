import React, { Component } from 'react';

export default class Well extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: () => {},
    };
  }
  
  componentDidMount() {
    this.setState({
      result: this.createWell(),
    });
  }

  createWell() {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customLightGrey = "rgba(0, 0, 0, 0.10)";

    ctx.fillStyle = customLightGrey;
    return ctx.fillRect(  // Set the ruler coords
      650,                // Offset by horizontal (X)
      10,                 // Offset by vertical (Y)
      100,                // Width
      800,                // Height
    );
  }

  render() {
    const { result } = this.state;

    return (
      <>
        {result}
      </>
    );
  }
}
