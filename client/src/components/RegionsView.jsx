import React, { useContext } from 'react'
import { RegionContext } from '../context/RegionContext'

// Components
import RegionCard from './RegionCard';

function RegionsView() {
  const { regions } = useContext(RegionContext)
  //const { regions } = props;

  return (
    <>
      <h2>New Zealand Wine Regions</h2>
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
    </>
  )
}

export default RegionsView
