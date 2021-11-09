import React from 'react';
import { useParams } from 'react-router-dom';

function WineView(props) {
  const { wines } = props;
  const { name } = useParams();

  return (
      <div>
      {wines
          .filter(wine => wine.Name === name)
          .map(wine => 
            (
            <div key={ wine._id }>
              <h2>{wine.Name}</h2>
              <img src={wine.ImagePath} alt={wine.Name} style={{width: '400px'}}/>
              <p>{wine.Description}</p>
              
            </div>
          ))}
      </div>
  )
}

export default WineView
