import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { RegionContext } from '../context/RegionContext';
import { WineContext } from '../context/WineContext';

// Components
import HomeView from './HomeView';
import RegionsView from './RegionsView';
import RegionView from './RegionView';
import WinesView from './WinesView';
import WineView from './WineView';

function MainView() {
  const navigate = useNavigate();
  const { regionLoading } = useContext(RegionContext)
  const { wineLoading } = useContext(WineContext)

  return (
      <div className='main-content'>
      <h1>nzWine</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/regions')}>Region</button>
      <button onClick={() => navigate('/wines')}>Variety</button>
      {regionLoading||wineLoading ? (
        <div>loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomeView />} />  
            <Route path="regions/" element={<RegionsView />} />
            <Route path='regions/:name' element={ <RegionView />} />
            <Route path="wines/" element={<WinesView />} />
            <Route path='wines/:name' element={ <WineView />} />
          </Routes>
          )}
    </div>
  )
}

export default MainView
