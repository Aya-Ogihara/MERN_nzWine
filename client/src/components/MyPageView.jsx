import React from 'react'
import { Link } from 'react-router-dom';

// MUI
import Button from '@mui/material/Button';

function MyPageView() {
  return (
    <div style={{margin: '40vh 0', textAlign: 'center'}}>
      <h2 style={{marginBottom: '20px'}}>Coming soon...</h2>
      <Link to={'/'} style={{textDecoration:'none'}}>
        <Button variant="outlined" color="secondary">Back to home</Button>
      </Link>
    </div>
  )
}

export default MyPageView
