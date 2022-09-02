import { useState, useEffect } from 'react';

const StarterBox = (props) => {

  // Deconstruct Props Object.
  const { colorData, starterBox } = props;

  // Loop through our color data and create boxes accordingly. 
  // Create an array of ul components that will hold the boxes
  const brushArr = [];

  // For in loop through our colorData
  for (const prop in colorData) {
    if (colorData[prop] <= 2) {
      brushArr.push(
        <ul className={`brushBox-${prop}`}>
          <li>{colorData[prop]} brushes</li>
          <li>{colorData[prop]} replacement head</li>
        </ul>
      )
    }
  }

 // Conditional Rendering Func (Ensures all data has prop drilled)
 function renderFunc () {
  if (colorData) return (
    <ul className='summary-starter'>
      <li>Starter Boxes: {starterBox} </li>
      <li>Brushes: {colorData.totalBrushes}</li>
      <li>Replacement Heads: {colorData.totalBrushes}</li>
    </ul>
  )
 }

  return(
    <div className='starter-box'>
      <h4 className='summary-title'>Summary:</h4>
        {renderFunc()}
      <div className='starter-brushBox'>
        {brushArr}
      </div>
    </div>
  )
};

export { StarterBox };
