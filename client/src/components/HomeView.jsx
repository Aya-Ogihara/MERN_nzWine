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
                src= "https://upload.wikimedia.org/wikipedia/commons/f/fb/42_Degrees_Winery_1.jpg" 
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
                src= "https://upload.wikimedia.org/wikipedia/commons/f/f9/Color_of_port_wine.jpg" 
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
        <Link to={'/climate'} >
          <Card 
            md={{ width: 400 }}
            className='card home-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                src= "https://upload.wikimedia.org/wikipedia/commons/c/c8/View_from_McQueens_Pass_towards_Lyttelton_Harbour%2C_New_Zealand.jpg" 
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
        <Link to={'/tasting-note'} >
          <Card 
            md={{ width: 400 }}
            className='card home-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                src= "https://upload.wikimedia.org/wikipedia/commons/4/41/The_enjoyment_of_wine_%284455437234%29.jpg" 
                alt='vineyard'
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
