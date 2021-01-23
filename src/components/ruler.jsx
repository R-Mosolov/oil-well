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
      result: this.createRuler(),
    });
  }

  createRuler() {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customLightGrey = "rgba(0, 0, 0, 0.10)";

    ctx.fillStyle = customLightGrey;
    return ctx.fillRect(  // Set the ruler coords
      10,                 // Offset by horizontal (X)
      10,                 // Offset by vertical (Y)
      100,                // Width
      800,                // Height
    );
  }

  setMainMeasures() {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";

    const measuresCount = 8;
    for (let i = 0; i < measuresCount; i++) {
      const intervalBetweenMeasures = (i * 100) + 10;
      ctx.fillRect(10, intervalBetweenMeasures, 100, 1);
    }

    return;
  }

  setAdditionalMeasuresPart(margin) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";

    const measuresCount = 10;
    for (let i = 0; i < measuresCount; i++) {
      const intervalBetweenMeasures = (i * 10) + margin;
      const isCentalMeasure = (i === 5);

      // Mark central additional measure
      if (isCentalMeasure) {
        ctx.fillRect(10, intervalBetweenMeasures, 30, 1);
      }

      ctx.fillRect(10, intervalBetweenMeasures, 20, 1);
    }

    return;
  }

  setAllAdditionalMeasures() {
    for (let i = 0; i < 8; i++) {
      this.setAdditionalMeasuresPart((i * 100) + 10);
    }

    return;
  }

  render() {
    const { result } = this.state;
    
    return (
      <>
        {result}
        {this.setMainMeasures()}
        {/* {this.setAdditionalMeasuresPart()} */}
        {this.setAllAdditionalMeasures()}
      </>
    );
  }
}
