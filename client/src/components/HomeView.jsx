import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function HomeView() {
  return (
    <div>
      <h1 className='page-title'>Welcome to nzWine app!</h1>
      <h3 className='home-question'>What would you like to know about New Zealand Wine today?</h3>
      <div className='cards-wrapper'>
        <Link to={'/regions'} >
          <Card 
            md={{ width: 400 }}
            className='card home-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                src= "https://res.cloudinary.com/yaponka/image/upload/w_700,c_scale/nzWine/vineyard.jpg" 
                alt='vineyard'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                New Zealand Wine Regions
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to={'/wines'} >
          <Card 
            md={{ width: 400 }}
            className='card home-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                src= "https://res.cloudinary.com/yaponka/image/upload/w_700,c_scale/nzWine/wines.jpg" 
                alt='wines'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                New Zealand Wine Varieties
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to={'/sustainability'} >
          <Card 
            md={{ width: 400 }}
            className='card home-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                src= "https://res.cloudinary.com/yaponka/image/upload/w_700,c_scale/nzWine/mountains.jpg" 
                alt='mountains'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Sustainability of New Zealand Wines
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to={'/tasting-note'} >
          <Card 
            md={{ width: 400 }}
            className='card home-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                src= "https://res.cloudinary.com/yaponka/image/upload/w_700,c_scale/nzWine/wine_tasting.jpg" 
                alt='wine tasting'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                My New Zealand Wine Testing Note
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default HomeView
