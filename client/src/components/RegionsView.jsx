import React, { useContext } from 'react'
import { RegionContext } from '../context/RegionContext'

//MUI
//import Box from '@mui/material/Box';

// Components
import RegionCard from './RegionCard';

function RegionsView() {
  const { regions } = useContext(RegionContext)
  //const { regions } = props;

  return (
    <>
      <h2 className='page-title'>New Zealand Wine Regions</h2>
      <div className='cards-wrapper'>
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
      </div>
    </>
  )
}

export default RegionsView
