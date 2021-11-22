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
          {/* <h2>New Zealand Wine Regions</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/42_Degrees_Winery_1.jpg" alt='vineyard' style={{width: '400px'}} /> */}
          <Card 
            sx={{ width: 400 }}
            className='card'>
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
          {/* <h2>New Zealand Wine Varieties</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Color_of_port_wine.jpg" alt='wines' style={{width: '400px'}} /> */}
          <Card 
            sx={{ width: 400 }}
            className='card'>
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
        <Link to={'/regions'} >
          {/* <h2>New Zealand Wine Regions</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/42_Degrees_Winery_1.jpg" alt='vineyard' style={{width: '400px'}} /> */}
          <Card 
            sx={{ width: 400 }}
            className='card'>
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
          {/* <h2>New Zealand Wine Varieties</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Color_of_port_wine.jpg" alt='wines' style={{width: '400px'}} /> */}
          <Card 
            sx={{ width: 400 }}
            className='card'>
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
      </div>
    </div>
  )
}

export default HomeView
