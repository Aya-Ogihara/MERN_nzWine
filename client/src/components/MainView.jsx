import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import HomeView from './HomeView';
import RegionsView from './RegionsView';
import RegionView from './RegionView';
import WinesView from './WinesView';
import WineView from './WineView';

function MainView() {
  const navigate = useNavigate();
  const [ regions, setRegions ] = useState([]);
  const [ wines, setWines ] = useState([]);

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

  useEffect((getRegions),[]);
  useEffect((getWine),[]);

  return (
    <div className='main-content'>
      <h1>nzWine</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/regions')}>Region</button>
      <button onClick={() => navigate('/wines')}>Variety</button>
      <Routes>
        <Route path="/" element={<HomeView />} />  
        <Route path="regions/" element={<RegionsView regions={regions} />} />
        <Route path='regions/:name' element={ <RegionView regions={regions}/>} />
        <Route path="wines/" element={<WinesView wines={wines} />} />
        <Route path='wines/:name' element={ <WineView wines={wines}/>} />
      </Routes>
    </div>
  )
}

export default MainView
