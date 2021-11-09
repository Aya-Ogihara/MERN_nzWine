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
      <button onClick={() => navigate('/regions')}>Home</button>
      <button onClick={() => navigate('/regions')}>Region</button>
      <button onClick={() => navigate('/wines')}>Variety</button>
      <Routes>
        <Route path="/regions" element={<RegionsView regions={regions} />} />
        <Route path="/wines" element={<WinesView />} />
        <Route path='/regions/:name' element={ <RegionView regions={regions}/>} />

      </Routes>
    </div>
  )
}

export default MainView
