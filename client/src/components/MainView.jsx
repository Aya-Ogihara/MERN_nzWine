import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import RegionsView from './RegionsView';
import WinesView from './WinesView';

function MainView() {
  const navigate = useNavigate();
  return (
    <div className='main-content'>
      <h1>Welcome to nzWine app</h1>
      <p>You can learn about New Zealand Wine...</p>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/regions')}>Region</button>
      <button onClick={() => navigate('/wines')}>Variety</button>
      <Routes>
        <Route path="/regions" element={<RegionsView />} />
        <Route path="/wines" element={<WinesView />} />
      </Routes>
    </div>
  )
}

export default MainView
