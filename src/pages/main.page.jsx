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
    };
  }

  setViewScope(viewScopeHeight) {
    const canvas = document.getElementById('root');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    return this.setState({
      viewScopeHeight: viewScopeHeight + 50,
    });
  }
  
  render() {
    const { viewScopeHeight } = this.state;

    window.addEventListener('scroll', () => this.setViewScope(viewScopeHeight));

    return (
      <>
        <Ruler />
        <Well />
        <ViewScope viewScopeHeight={viewScopeHeight} />
        <ViewScopeHelper viewScopeHeight={viewScopeHeight} />
      </>
    );
  }
}
