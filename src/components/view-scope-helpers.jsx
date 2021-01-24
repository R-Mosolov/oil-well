import React, { Component } from 'react';

export default class ViewScopeHelper extends Component {
  createViewScope(mainMeasuresCount) {
    const canvas = document.getElementById('root');
    const ctx = canvas.getContext('2d');

    // Create top of the helper
    ctx.beginPath();
    ctx.moveTo(120, 10);
    ctx.lineTo(1320, 10);
    ctx.stroke();

    // Create bottom of the helper
    ctx.beginPath();
    ctx.moveTo(120, 10 + (800 / mainMeasuresCount));
    ctx.lineTo(1320, 10 + (800 / mainMeasuresCount));
    ctx.stroke();
  }

  render() {
    const { mainMeasuresCount } = this.props;

    this.createViewScope(mainMeasuresCount);

    return (
      <></>
    );
  }
}
