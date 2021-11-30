import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const RegionContext = createContext();

function RegionProvider(props) {
  const [ regions, setRegions ] = useState([]);
  const [ regionLoading, setRegionLoading ] = useState(false);

  const getRegions = () => {
    setRegionLoading(true)
    // axios.get(`http://localhost:5000/regions`)
    axios.get(`https://nzwine-api.herokuapp.com/regions`)
    .then(res => {
      //console.log(res.data)
      setRegions(res.data)
      setRegionLoading(false)
    })
    .catch(err => {
      console.log(err)
      setRegionLoading(false)
    })
  }

  useEffect((getRegions),[]);

  return (
    <RegionContext.Provider value={{ regions, regionLoading }} >
      {props.children}
    </RegionContext.Provider>
  )
}

export default RegionProvider
