import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const WineContext = createContext();

function WineProvider(props) {
  const [ wines, setWines ] = useState([]);

  const getWine = () => {
    //setIsLoading(true)
    axios.get(`http://localhost:5000/wines`)
    .then(res => {
      //console.log(res.data)
      setWines(res.data)
      //setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
      //setIsLoading(false)
    })
  }

  useEffect((getWine),[]);


  return (
    <WineContext.Provider value={{ wines }} >
      {props.children}
    </WineContext.Provider>
  )
}

export default WineProvider
