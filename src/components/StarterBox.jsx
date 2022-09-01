import { useState, useEffect } from 'react';

const StarterBox = (props) => {

  // Deconstruct Props Object.
  const { colorData, starterBox, data } = props;

  // Loop through our color data and create boxes accordingly. 
  // Create an array of ul components that will hold the boxes
  const brushArr = [];

  console.log('data', data);
  for (const prop in colorData) {
    if (colorData[prop] <= 2) {
      brushArr.push(
        <ul className='brushBox'>
          <li>{colorData[prop]} brushes</li>
          <li>{colorData[prop]} replacement head</li>
        </ul>
      )
    }
  }

  // Adding the total number dividing by two to acquire the total number of boxes
  // Find a way to add all the blue, green, and pink into separate boxes. 

  return(
    <div className='starter-box'>
      <h4><strong>Summary:</strong></h4>
      <ul className='summary-starter'>
        <li>Starter Boxes: {starterBox} </li>
        <li>Brushes: {colorData.totalBrushes}</li>
        <li>Replacement Heads: {colorData.totalBrushes}</li>
      </ul>
      <div className='starter-brushBox'>
        {brushArr}
      </div>
    </div>
  )
};

export { StarterBox };
