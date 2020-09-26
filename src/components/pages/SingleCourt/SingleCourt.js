import React, { useState, useEffect } from 'react';

import courtsData from '../../../helpers/data/courtData';

const SingleCourt = (props) => {
  const [court, setCourt] = useState({});

  useEffect(() => {
    const { courtId } = props.match.params;

    courtsData.getCourtById(courtId)
      .then((res) => setCourt(res.data))
      .catch((err) => console.error('get single player failed', err));
  }, [props.match.params]);

  return (
    <div className="Singleplayer mt-3 p-3 bg-success rounded">
      <h1>Welcome to the {court.name} page</h1>
      <p>court Zipcode: {court.zipcode}</p>
      <p>Is court available?: {court.available}</p>
      {court.available ? 'Yes' : 'No'}
    </div>
  );
};

export default SingleCourt;
