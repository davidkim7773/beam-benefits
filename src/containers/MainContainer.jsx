import { useState, useEffect } from 'react';
import { MainData } from '../components/MainData';
import beamData from '../perks.json';

const MainContainer = () => {

  // Initial State Call on Date
  const [data, setData] = useState([]);

  // UseEffect call for data fetch.
  useEffect(() => {
    fetchData();
  }, []);

  // 
  return (
    <div className='shipping'>
      <MainData/>
    </div>
  )

};

export { MainContainer };