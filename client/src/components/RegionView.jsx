import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RegionContext } from '../context/RegionContext'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function RegionView() {
  const { regions } = useContext(RegionContext)
  const { name } = useParams();

  return (
      <div>
      {regions
          .filter(region => region.Name === name)
          .map(region => 
            (
            <div key={ region._id } className='body-wrapper'>
              <h2 className='page-title'>{region.Name}</h2>
              <div className="budge-wrapper">
                <h4  className='budge'>{region.Island} Island</h4>
              </div>
              <img src={region.ImagePath} alt={region.Name} className='desc-img'/>
              <p className='description'>{region.Description}</p>
              <h3 className='region-varieties'>Wine varieties</h3>
              <div className='cards-wrapper'>
                {region.Wine.map(wine => 
                  <div key={ wine._id } >
                    <Link to={`/wines/${wine.Name}`}>
                      <Card 
                        sx={{ width: 220 }}
                        className='card'>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="250"
                            image={ wine.ImagePath }
                            alt={ wine.Name }
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            { wine.Name }
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </div>
                  )}
                </div>
            </div>
          ))}
      </div>
  )
}

export default RegionView
