import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleMouseClick = (event) => {
    toggleCycling()
  }
   
  handleKeyDown = (event) => {
    let type
    if (event.key === "a") {
      type = "+"
    } else if (event.key === "s") {
      type = "-"
    }
    resize(type)
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleMouseClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
