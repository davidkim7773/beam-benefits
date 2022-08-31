import { useState, useEffect } from 'react';
import { StarterBox } from '../components/StarterBox';
import { RefillBox } from '../components/RefillBox';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import beamData from '../perks.json';
import { Star } from '@mui/icons-material';
import { color } from '@mui/system';

const ShippingScreen = () => {

  // Initial State Call on Date and true or false state depending on if Starter or Refill box is toggled
  const [data, setData] = useState([]);
  const [value, setValue] = useState(<StarterBox/>);

  // UseEffect call
  useEffect(() => {
    fetchData();
  }, []);

  // Fetching Data from endpoint
  // Initialize API Url 

  const dataUrl = 'https://beamtech.github.io/boxing-kata-js/perks.json';

  async function fetchData () {
    try {
      const res = await fetch(dataUrl, {
        header: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        }
      })
      // Json the response.
      const newData = await res.json();
      setData(newData);

      // Error Handling
    } catch (err) {
      console.error(`Issue with FetchData ${err}`)
    }
  };
  
  console.log('data', data)

  // Create an object + or - that represents the number of colors per brush in this order blue, green, pink
  const colorData = {
    blue: 0,
    green: 0,
    pink: 0,
    totalBrushes: 0,
  };

  // Itereate through the initial data with a for loop and fill array. 
  for (let i = 0; i < data.length; i++) {
    // Declare a Constant for whichever object we're currently on.
    const el = data[i];

    // Use a conditional to add values to our colorData object.
    if (colorData.hasOwnProperty(el.brush_color)) {
      colorData[el.brush_color] += 1 
      colorData['totalBrushes'] += 1;
    }
  };
  
  // Conditional Rendering Function
  function setToggle () {

  };

  return (
    <div className='shipping'>
      <Tabs>
        <TabList className='tabs-list'>
          <Tab className='starter-tab'>Starter Boxes</Tab>
          <Tab className='refill-tab'>Refill Boxes</Tab>
        </TabList>
        <TabPanel>
          <StarterBox
            colorData={colorData}
            starterBox={Math.ceil(colorData.totalBrushes / 2)}
          />
        </TabPanel>
        <TabPanel>
          <RefillBox
            colorData={colorData}
            refillBox={Math.floor(colorData.totalBrushes / 2)}
          />
        </TabPanel>
      </Tabs>
    </div>
  )

};

export { ShippingScreen };