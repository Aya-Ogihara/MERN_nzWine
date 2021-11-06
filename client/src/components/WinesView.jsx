import React, { useState, useEffect } from 'react'
import axios from 'axios';

function WinesView() {
  const [ wines, setWines ] = useState([])

  const getWine = () => {
    axios.get(`http://localhost:5000/wines`)
    .then(res => {
      //console.log(res.data)
      setWines(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect((getWine),[])

  return (
    <div>
      <h2>New Zealand Wine Varieties</h2>
      {wines.map(wine => <div key={wine._id}>{wine.Name}</div>)}
    </div>
  )
}

export default WinesView
