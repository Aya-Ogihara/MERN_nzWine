import React from 'react'
//import { Routes, Route } from 'react-router-dom';
//import axios from 'axios';

// Components
import RegionCard from './RegionCard';
//import RegionView from './RegionView';

function RegionsView(props) {

  const { regions } = props;
  // const [ regions, setRegions ] = useState([])

  // const getRegions = () => {
  //   axios.get(`http://localhost:5000/regions`)
  //   .then(res => {
  //     //console.log(res.data)
  //     setRegions(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  // useEffect((getRegions),[])

  return (
    <>
      <h2>New Zealand Wine Regions</h2>
      {regions.map(region => <RegionCard key={region._id} region={region}/>)}
    </>
  )
}

export default RegionsView
