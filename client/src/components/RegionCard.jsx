import React from 'react'
import { Link } from 'react-router-dom';

function RegionCard(props) {
  const { Name } = props.region;

  //console.log(Name)
  return (
    <Link to={`/regions/${Name}`}>
      <div>
        { Name }
      </div>
    </Link>
  )
}

export default RegionCard
