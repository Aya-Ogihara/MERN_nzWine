import React from 'react'
import { Link } from 'react-router-dom';

function RegionCard(props) {
  const { region } = props;

  return (
    <Link to={`/regions/${region.Name}`}>
      <div>
        { region.Name }
      </div>
    </Link>
  )
}

export default RegionCard
