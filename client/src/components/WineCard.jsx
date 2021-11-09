import React from 'react';
import { Link } from 'react-router-dom';

function WineCard(props) {
  const { wine } = props;
  const { Name } = wine
  return (
    <Link to={`/wines/${Name}`}>
      <div>
        { Name }
      </div>
    </Link>
  )
}

export default WineCard
