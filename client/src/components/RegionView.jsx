import React from 'react'
import { useParams } from 'react-router-dom';

function RegionView(props) {
  const { regions } = props;
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
                <div key={ wine._id }>{wine.Name}</div>
                )}
            </div>
          ))}
      </div>
  )
}

export default RegionView
