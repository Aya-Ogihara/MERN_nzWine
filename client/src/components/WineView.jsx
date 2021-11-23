import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { WineContext } from '../context/WineContext';

function WineView() {
  //const { wines } = props;
  const { wines } = useContext(WineContext);
  const { name } = useParams();

  return (
      <div>
      {wines
          .filter(wine => wine.Name === name)
          .map(wine => 
            (
            <div key={ wine._id } className='body-wrapper'>
              <h2 className='page-title'>{wine.Name}</h2>
              <img src={wine.ImagePath} alt={wine.Name} className='desc-img' />
              <p className='description'>{wine.Description}</p>
              
            </div>
          ))}
      </div>
  )
}

export default WineView
