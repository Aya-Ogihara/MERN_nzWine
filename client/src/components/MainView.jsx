import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import RegionsView from './RegionsView';
import WinesView from './WinesView';
import RegionView from './RegionView';

function MainView() {
  const navigate = useNavigate();
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
    <div className='main-content'>
      <h1>Welcome to nzWine app</h1>
      <p>You can learn about New Zealand Wine...</p>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/regions')}>Region</button>
      <button onClick={() => navigate('/wines')}>Variety</button>
      <Routes>
        <Route path="/regions/*" element={<RegionsView regions={regions} />} />
        <Route path="/wines" element={<WinesView />} />
        {/* <Route path='/regions/:name' render={({ match }) => { return <RegionView region={regions.find(region => region.Name === match.params.name)}/> }} /> */}
        <Route path='/regions/Marlborough' element={ <RegionView />} />
      </Routes>
    </div>
  )
}

export default MainView
