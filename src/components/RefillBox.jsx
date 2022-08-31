import { useState, useEffect } from 'react';

const RefillBox = (props) => {
  
  // Deconstruct the Props object
  const { colorData, refillBox } = props;

  return (
    <div className='refill-box'>
      <h4><strong>Summary:</strong></h4>
      <ul className='summary-refill'>
        <li>Refill Boxes: {refillBox} </li>
        <li>Replacement Heads: {colorData.totalBrushes}</li>
      </ul>
    </div>
  )
}

export { RefillBox };