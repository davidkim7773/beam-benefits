import { useState, useEffect } from 'react';

const RefillBox = (props) => {
  
  // Deconstruct the Props object
  const { colorData, refillBox, data } = props;

  // Loop through color data and create number values accordingly
  // Create an array of ul components representing the boxes
  const headArr = [];

  // For In loop through our colorData
  for (const prop in colorData) {
    if (colorData[prop] <= 2) {
      headArr.push(
        <ul className={`headBox-${prop}`}>
          <li>{colorData[prop]} replacement heads</li>
          <li>{colorData[prop]} replacement heads</li>
        </ul>
      )
    }
  }

  // Conditional Rendering Func (Ensures all data has prop drilled)
  function renderFunc() {
    if (colorData) {
      return (
        <ul className='summary-refill'>
        <li>Refill Boxes: {refillBox} </li>
        <li>Replacement Heads: {colorData.totalBrushes}</li>
      </ul>
      )
    }
  }

  return (
    <div className='refill-box'>
      <h4><strong>Summary:</strong></h4>
        {renderFunc()}
      <div className='refill-headBox'>
        {headArr}
      </div>
    </div>
  )
}

export { RefillBox };