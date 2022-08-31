import { useState, useEffect } from 'react';

const StarterBoxes = (props) => {

  // Deconstruct Props Object.
  const { colorData } = props;

  return(
    <div className='starter-box'>
      <h4><strong>Summary:</strong></h4>
      <ul className='summary-starter'>
        <li>Starter Boxes: </li>
        <li>Brushes: </li>
        <li>Replacement Heads: </li>
      </ul>
    </div>
  )
};

export { StarterBoxes };
