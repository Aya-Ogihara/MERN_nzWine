import React from 'react'

function RegionView(props) {
  const { region } = props;

  return (
    <div>
      <div>
        { region.Name }
      </div>
      <img src={region.ImagePath} alt={ region.Name } crossOrigin="anonymous"/>
      <div>{ region.Description }</div>
    </div>
  )
}

export default RegionView
