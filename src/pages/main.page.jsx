import React, { Component } from 'react';
import Well from '../components/well';
import Target from '../components/target';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetHeight: 50,
    };
  }

  setViewScope() {
    return this.setState({
      targetHeight: this.state.targetHeight + 0.00000001,
    });
  }
  
  render() {
    const { targetHeight } = this.state;

    window.addEventListener('scroll', () => this.setViewScope(targetHeight));

    return (
      <div>
        <Well />
        <Target targetHeight={targetHeight} />
      </div>
    );
  }
}
