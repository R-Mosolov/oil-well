import React, { Component } from 'react';
import Ruler from '../components/ruler';
import Well from '../components/well';
import ViewScope from '../components/view-scope';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetHeight: 50,
    };
  }

  setViewScope(targetHeight) {
    return this.setState({
      targetHeight: targetHeight + 50,
    });
  }
  
  render() {
    const { targetHeight } = this.state;

    window.addEventListener('scroll', () => this.setViewScope(targetHeight));

    return (
      <div>
        <Ruler />
        <Well />
        <ViewScope targetHeight={targetHeight} />
      </div>
    );
  }
}
