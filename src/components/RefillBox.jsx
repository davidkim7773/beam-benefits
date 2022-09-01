import { useState, useEffect } from 'react';

const RefillBox = (props) => {
  
  // Deconstruct the Props object
  const { colorData, refillBox, data } = props;

  const headArr = [];

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

  return (
    <div className='refill-box'>
      <h4><strong>Summary:</strong></h4>
      <ul className='summary-refill'>
        <li>Refill Boxes: {refillBox} </li>
        <li>Replacement Heads: {colorData.totalBrushes}</li>
      </ul>
      <div className='refill-headBox'>
      {headArr}
      </div>
    </div>
  )
}

export { RefillBox };