import { useState, useEffect } from 'react';
import { MainData } from '../components/MainData';
import beamData from '../perks.json';

const MainContainer = () => {

  // Initial State Call on Date
  const [data, setData] = useState([]);

  // UseEffect call
  useEffect(() => {
    setData(beamData);
  }, []);

  // Crea

  console.log('data', data)
  return (
    <div className='shipping'>
      <MainData/>
    </div>
  )

};

export { MainContainer };