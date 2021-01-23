import React, { Component } from 'react';

const canvas = document.getElementById("root");
const ctx = canvas.getContext("2d");

const customGrey = "rgba(0, 0, 0, 0.20)";

ctx.fillStyle = customGrey;
ctx.fillRect(650, 10, 100, 850);

export default class Ruler extends Component {
  render() {
    return (
      <></>
    );
  }
}
