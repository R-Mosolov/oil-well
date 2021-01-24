import React, { Component } from 'react';

import Ruler from '../components/ruler';
import Well from '../components/well';
import ViewScope from '../components/view-scope';
import ViewScopeHelper from '../components/view-scope-helpers';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewScopeHeight: 100,
      mainMeasuresCount: 8,
    };
  }

  setViewScope(viewScopeHeight, mainMeasuresCount) {
    const canvas = document.getElementById('root');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    return this.setState({
      viewScopeHeight: viewScopeHeight + 100,
      mainMeasuresCount: mainMeasuresCount - 1
    });
  }
  
  render() {
    const { viewScopeHeight, mainMeasuresCount } = this.state;

    window.addEventListener('scroll', () => this.setViewScope(viewScopeHeight, mainMeasuresCount));

    return (
      <>
        <Ruler mainMeasuresCount={mainMeasuresCount} />
        <Well />
        <ViewScope viewScopeHeight={viewScopeHeight} />
        <ViewScopeHelper viewScopeHeight={viewScopeHeight} />
      </>
    );
  }
}
