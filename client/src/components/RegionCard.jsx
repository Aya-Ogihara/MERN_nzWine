import React from 'react'

function RegionCard(props) {
  const { region } = props;

  return (
      <div>
        { region.Name }
      </div>
  )
}

export default RegionCard
