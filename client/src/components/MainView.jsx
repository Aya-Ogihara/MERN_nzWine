import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import RegionsView from './RegionsView';
import WinesView from './WinesView';
import RegionView from './RegionView';

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

        {/* <Route path='/regions/:name' render={({ match }) => { return <RegionView region={regions.find(region => region.Name === match.params.name)}/> }} /> */}
        <Route path='/regions/Marlborough' element={ <RegionView />} />
      </Routes>
    </div>
  )
}

export default MainView
