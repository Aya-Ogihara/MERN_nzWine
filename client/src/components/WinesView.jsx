import React, { useContext } from 'react';
import { WineContext } from '../context/WineContext';

//Component
import WineCard from './WineCard';
function WinesView() {
  const { wines } = useContext(WineContext);
  //const { wines } = props;

  return (
    <>
      <h2 className='page-title'>New Zealand Wine Varieties</h2>
      <div className='cards-wrapper'>
      {wines.map(wine => <WineCard key={wine._id} wine={wine}/>)}
      </div>
    </>
  )
}

export default WinesView
