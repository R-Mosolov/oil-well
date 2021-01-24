import React, { Component } from 'react';

export default class ViewScopeHelper extends Component {
  createViewScope(viewScopeHeight) {
    const canvas = document.getElementById('root');
    const ctx = canvas.getContext('2d');

    // Create top helper
    ctx.beginPath();
    ctx.moveTo(120, 360 - (viewScopeHeight / 2));
    ctx.lineTo(1320, 360 - (viewScopeHeight / 2));
    ctx.stroke();

    // Create bottom helper
    ctx.beginPath();
    ctx.moveTo(120, 360 - (viewScopeHeight / 2) + viewScopeHeight);
    ctx.lineTo(1320, 360 - (viewScopeHeight / 2) + viewScopeHeight);
    ctx.stroke();
  }

  render() {
    this.createViewScope(this.props.viewScopeHeight);

    return (
      <></>
    );
  }
}
