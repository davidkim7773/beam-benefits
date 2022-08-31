import { useState, useEffect } from 'react';
import { StarterBoxes } from '../components/StarterBoxes';
import { RefillBoxes } from '../components/RefillBoxes';
import beamData from '../perks.json';

const ShippingScreen = () => {

  // Initial State Call on Date and true or false state depending on if Starter or Refill box is toggled
  const [data, setData] = useState([]);
  const [starterToggle, setStarterToggle] = useState([]);

  // UseEffect call
  useEffect(() => {
    // fetchData();
    // Temp fix for endpoint issue 
    setData(beamData)
  }, []);

  // Fetching Data from endpoint
  // Initialize API Url 

  const dataUrl = 'https://beamtech.github.io/boxing-kata-js/perks.json';

  async function fetchData () {
    try {
      const res = await fetch(dataUrl, {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'no-cors'
      })
      // Json the response.
      const newData = res.json();
      setData(newData);

      // Error Handling
    } catch (err) {
      console.error(`Issue with FetchData ${err}`)
    }
  }

  // Create an object + or - that represents the number of colors per brush in this order blue, green, pink
  const colorData = {
    blue: 0,
    green: 0,
    pink: 0,
    total: 0,
  };

  // Itereate through the initial data with a for loop and fill array. 
  for (let i = 0; i < data.length; i++) {
    // Declare a Constant for whichever object we're currently on.
    const el = data[i];

    // Use a conditional to add values to our colorData object.
    if (colorData.hasOwnProperty(el.brush_color)) {
      colorData[el.brush_color] += 1 
    } 

    if (colorData.hasOwnProperty('total')) {
      colorData['total'] += 1;
    }
  }
  
  console.log(colorData)
  return (
    <div className='shipping'>
      <StarterBoxes
        colorData={colorData}
      />
      <RefillBoxes
        colorData={colorData}
      />
    </div>
  )

};

export { ShippingScreen };