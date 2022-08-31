import { useState, useEffect } from 'react';

const StarterBox = (props) => {

  // Deconstruct Props Object.
  const { colorData, starterBox } = props;

  return(
    <div className='starter-box'>
      <h4><strong>Summary:</strong></h4>
      <ul className='summary-starter'>
        <li>Starter Boxes: {starterBox} </li>
        <li>Brushes: {colorData.totalBrushes}</li>
        <li>Replacement Heads: {colorData.totalBrushes}</li>
      </ul>
    </div>
  )
};

export { StarterBox };
