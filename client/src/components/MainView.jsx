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
import SustainabilityView from './SustainabilityView';
import MyPageView from './MyPageView';

//MUI
import CircularProgress from '@mui/material/CircularProgress'

function MainView() {
  const navigate = useNavigate();
  const { regionLoading } = useContext(RegionContext)
  const { wineLoading } = useContext(WineContext)

  return (
      <div className='wrapper'>
        <header className='page-header'>
          <div className="header-wrapper">
            <h1 className='logo' onClick={() => navigate('/')}>nzWine</h1>
            <nav className="main-navigation">
              <p onClick={() => navigate('/')}>Home</p>
              <p onClick={() => navigate('/regions')}>Region</p>
              <p onClick={() => navigate('/wines')}>Variety</p>
            </nav>
          </div>
        </header>
        <div className='body-wrapper'>
        {regionLoading||wineLoading ? (
          <div className='loading'><CircularProgress /></div>
          ) : (
            <Routes>
              <Route path="/" element={<HomeView />} />  
              <Route path="regions/" element={<RegionsView />} />
              <Route path='regions/:name' element={ <RegionView />} />
              <Route path="wines/" element={<WinesView />} />
              <Route path='wines/:name' element={ <WineView />} />
              <Route path='sustainability' element={ <SustainabilityView />} />
              <Route path='tasting-note' element={ <MyPageView />} />
            </Routes>
            )}
        </div>
        <footer className='page-footer'>
          <p className='copy-right'>&#169; 2022 nzWine</p>
        </footer>
      </div>
  )
}

export default MainView
