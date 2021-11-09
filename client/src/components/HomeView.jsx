import React from 'react';
import { Link } from 'react-router-dom';
function HomeView() {
  return (
    <div>
      <h1>Welcome to nzWine app!</h1>
      <p>You can learn about New Zealand Wine...</p>
      <Link to={'/regions'} >
        <h2>New Zealand Wine Regions</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/42_Degrees_Winery_1.jpg" alt='vineyard' style={{width: '600px'}} />
      </Link>
      <Link to={'/wines'} >
        <h2>New Zealand Wine Varieties</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Color_of_port_wine.jpg" alt='vineyard' style={{width: '600px'}} />
      </Link>
    </div>
  )
}

export default HomeView
