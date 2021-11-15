import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

// Components
import RegionCard from './RegionCard';

function RegionsView() {
  const { regions } = useContext(AppContext)
  //const { regions } = props;

  return (
    <>
      <h2>New Zealand Wine Regions</h2>
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
    </>
  )
}

export default RegionsView
