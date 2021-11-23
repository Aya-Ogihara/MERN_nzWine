import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function WineCard(props) {
  const { wine } = props;
  const { Name, ImagePath } = wine
  return (
    <Link to={`/wines/${Name}`}>
      <Card 
        sx={{ width: 280 }}
        className='card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="345"
            image={ ImagePath }
            alt={ Name }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            { Name }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default WineCard
