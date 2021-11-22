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
      <>
        <header className='page-header'>
          <div className="header-wrapper">
            <h1 className='logo' onClick={() => navigate('/')}>nzWine</h1>
            <nav className="main-navigation">
              <button onClick={() => navigate('/')}>Home</button>
              <button onClick={() => navigate('/regions')}>Region</button>
              <button onClick={() => navigate('/wines')}>Variety</button>
            </nav>
          </div>
        </header>
        <div className='body-wrapper'>
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
        <footer className='page-footer'>
          <p className='copy-right'>&#169; 2021 nzWine</p>
        </footer>
      </>
  )
}

export default MainView
