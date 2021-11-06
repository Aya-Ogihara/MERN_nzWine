import React, { useState, useEffect } from 'react'
import axios from 'axios';

// Components
import RegionCard from './RegionCard';
//import RegionView from './RegionView';

function RegionsView() {
  const [ regions, setRegions ] = useState([])

  const getRegions = () => {
    axios.get(`http://localhost:5000/regions`)
    .then(res => {
      //console.log(res.data)
      setRegions(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect((getRegions),[])

  return (
    <>
      <h2>New Zealand Wine Regions</h2>
      {/* {regions.map(region => <div key={region._id}>{region.Name}</div>)} */}
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
    </>
  )
}

export default RegionsView
