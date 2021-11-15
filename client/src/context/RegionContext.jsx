import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const RegionContext = createContext();

function RegionProvider(props) {
  const [ regions, setRegions ] = useState([]);
  const [ isloading, setIsLoading ] = useState(false);

  const getRegions = () => {
    setIsLoading(true)
    axios.get(`http://localhost:5000/regions`)
    .then(res => {
      //console.log(res.data)
      setRegions(res.data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
      setIsLoading(false)
    })
  }

  useEffect((getRegions),[]);

  return (
    <RegionContext.Provider value={{ regions, isloading }} >
      {props.children}
    </RegionContext.Provider>
  )
}

export default RegionProvider
