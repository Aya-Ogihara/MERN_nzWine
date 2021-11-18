import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const WineContext = createContext();

function WineProvider(props) {
  const [ wines, setWines ] = useState([]);
  const [ wineLoading, setWineLoading ] = useState(false);
  const getWine = () => {
    setWineLoading(true)
    axios.get(`http://localhost:5000/wines`)
    .then(res => {
      //console.log(res.data)
      setWines(res.data)
      setWineLoading(false)
    })
    .catch(err => {
      console.log(err)
      setWineLoading(false)
    })
  }

  useEffect((getWine),[]);


  return (
    <WineContext.Provider value={{ wines, wineLoading }} >
      {props.children}
    </WineContext.Provider>
  )
}

export default WineProvider
