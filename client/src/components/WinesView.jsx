import React from 'react';

//Component
import WineCard from './WineCard';
function WinesView(props) {
  
  const { wines } = props

  return (
    <>
      <h2>New Zealand Wine Varieties</h2>
      {wines.map(wine => <WineCard key={wine._id} wine={wine}/>)}
    </>
  )
}

export default WinesView
