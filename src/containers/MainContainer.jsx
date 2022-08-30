import { useState, useEffect } from 'react';
import { StarterBoxes } from '../components/StarterBoxes';
import beamData from '../perks.json';

const MainContainer = () => {

  // Initial State Call on Date
  const [data, setData] = useState([]);

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

  console.log('data', data)

  return (
    <div className='shipping'>
      <StarterBoxes/>
    </div>
  )

};

export { MainContainer };