import React, { Component } from 'react';

import { RULER_HEIGHT, ADDITIONAL_MEASURES_COUNT } from '../constants';
import { utils } from '../utils';

export default class Well extends Component {
  createRuler() {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    const customLightGrey = "rgba(0, 0, 0, 0.10)";

    ctx.fillStyle = customLightGrey;
    return ctx.fillRect(  // Set the ruler coords
      10,                 // Offset by horizontal (X)
      10,                 // Offset by vertical (Y)
      100,                // Width
      RULER_HEIGHT,       // Height
    );
  }

  setMainMeasures(mainMeasuresCount, mainMeasuresHeight) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";

    for (let i = 0; i < mainMeasuresCount; i++) {
      const intervalBetweenMeasures = (i * mainMeasuresHeight) + 10;
      ctx.fillRect(10, intervalBetweenMeasures, 100, 1);
    }

    return;
  }

  setAdditionalMeasuresPart(margin, additionalMeasuresHeight) {
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";

    for (let i = 0; i < ADDITIONAL_MEASURES_COUNT; i++) {
      const intervalBetweenMeasures = (i * additionalMeasuresHeight) + margin;
      const isMiddleMeasure = (i === 5);

      // Mark central additional measure
      if (isMiddleMeasure) {
        ctx.fillRect(10, intervalBetweenMeasures, 30, 1);
      }

      ctx.fillRect(10, intervalBetweenMeasures, 20, 1);
    }

    return;
  }

  setMeasureValues(mainMeasuresCount, mainMeasuresHeight) {
    for (let i = 0; i < mainMeasuresCount; i++) {
      const canvas = document.getElementById("root");
      const ctx = canvas.getContext("2d");

      ctx.font = "30px Arial";
      ctx.strokeText(
        `${(i + 1) * 500}`,           // Value of a measure to render
        37,                           // Offset by horizontal (X)
        (i + 1) * mainMeasuresHeight  // Offset by vertical (Y)
      );
    }
    
    return;
  }

  // This function works as Facade pattern
  generateMeasures(
    mainMeasuresCount,
    mainMeasuresHeight,
    additionalMeasuresHeight
  ) {
    this.createRuler();
    
    for (let i = 0; i < mainMeasuresCount; i++) {
      this.setMainMeasures(mainMeasuresCount, mainMeasuresHeight);
      this.setAdditionalMeasuresPart((i * mainMeasuresHeight) + 10, additionalMeasuresHeight);
      this.setMeasureValues(mainMeasuresCount, mainMeasuresHeight);
    }

    return;
  }

  render() {
    const { mainMeasuresCount } = this.props;

    const mainMeasuresHeight = utils.calcMainMeasuresHeight(mainMeasuresCount);
    const additionalMeasuresHeight = utils.calcAdditionalMeasuresHeight(mainMeasuresCount);

    this.generateMeasures(
      mainMeasuresCount,
      mainMeasuresHeight,
      additionalMeasuresHeight,
    );

    return (
      <></>
    );
  }
}
