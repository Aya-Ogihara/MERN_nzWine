import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RegionContext } from '../context/RegionContext'

function RegionView() {
  const { regions } = useContext(RegionContext)
  const { name } = useParams();

  return (
      <div>
      {regions
          .filter(region => region.Name === name)
          .map(region => 
            (
            <div key={ region._id }>
              <h2>{region.Name}</h2>
              <h4>{region.Island} Island</h4>
              <img src={region.ImagePath} alt={region.Name}/>
              <p>{region.Description}</p>
              <h3>Wine varieties</h3>
              {region.Wine.map(wine => 
                <div key={ wine._id }>
                  <Link to={`/wines/${wine.Name}`}>{wine.Name}</Link>
                </div>
                )}
            </div>
          ))}
      </div>
  )
}

export default RegionView
