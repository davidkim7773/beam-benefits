import { useState, useEffect } from 'react';
import { MainData } from '../components/MainData';

const MainContainer = () => {

  // Initial State Call on Date
  const [data, setData] = useState([]);

  // UseEffect call for data fetch.
  useEffect(() => {
    fetchData();
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
        }
      })
      // Json the response.
      const newData = res.json();
      setData(newData);

      // Error Handling
    } catch (err) {
      console.error(`Issue with FetchData ${err}`)
    }
  }

  return (
    <div className='shipping'>
      <MainData/>
    </div>
  )

};

export { MainContainer };