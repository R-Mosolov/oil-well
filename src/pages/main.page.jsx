import React, { Component } from 'react';
import Well from '../components/well';
import Target from '../components/target';

export default class MainPage extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.setViewScope);
  }

  setViewScope() {
    return alert(1);
  }
  
  render() {
    return (
      <div>
        <Well />
        <Target />
      </div>
    );
  }
}
