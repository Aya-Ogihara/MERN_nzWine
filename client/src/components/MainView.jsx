import React, { useState, useEffect } from 'react'
import axios from 'axios';

// Components
import RegionCard from './RegionCard';
import RegionView from './RegionView';

function MainView() {

  const [ regions, setRegions ] = useState([])
  const [ wines, setWines ] = useState([])

  
  const getRegion = () => {
    axios.get(`http://localhost:5000/regions`)
    .then(res => {
      //console.log(res.data)
      setRegions(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const getWine = () => {
    axios.get(`http://localhost:5000/wines`)
    .then(res => {
      //console.log(res.data)
      setWines(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect((getRegion),[])
  useEffect((getWine),[])

  return (
    <div className='main-content'>
      <h2>Region</h2>
      {/* {regions.map(region => <div key={region._id}>{region.Name}</div>)} */}
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
      <h2>Wine</h2>
      {wines.map(wine => <div key={wine._id}>{wine.Name}</div>)}
    </div>
  )
}

export default MainView
