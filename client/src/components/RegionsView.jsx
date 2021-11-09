import React from 'react'

// Components
import RegionCard from './RegionCard';

function RegionsView(props) {

  const { regions } = props;

  return (
    <>
      <h2>New Zealand Wine Regions</h2>
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
    </>
  )
}

export default RegionsView
