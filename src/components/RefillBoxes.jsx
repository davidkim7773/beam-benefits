import { useState, useEffect } from 'react';

const RefillBoxes = (props) => {
  
  // Deconstruct the Props object
  const { colorData } = props;

  return (
    <div className='refill-box'>
      <h4><strong>Summary:</strong></h4>
      <ul>

      </ul>
    </div>
  )
}

export { RefillBoxes };