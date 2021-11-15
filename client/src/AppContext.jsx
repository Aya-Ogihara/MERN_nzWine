import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const AppContext = createContext();

function AppProvider(props) {
  const [ regions, setRegions ] = useState([]);

  const getRegions = () => {
    //setIsLoading(true)
    axios.get(`http://localhost:5000/regions`)
    .then(res => {
      //console.log(res.data)
      setRegions(res.data)
      //setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
      //setIsLoading(false)
    })
  }

  useEffect((getRegions),[]);

  return (
    <AppContext.Provider value={{ regions }} >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
