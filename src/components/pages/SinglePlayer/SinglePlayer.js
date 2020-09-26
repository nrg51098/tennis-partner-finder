import React, { useState, useEffect } from 'react';

import playersData from '../../../helpers/data/playersData';

const SinglePlayer = (props) => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const { playerId } = props.match.params;

    playersData.getPlayerById(playerId)
      .then((res) => setPlayer(res.data))
      .catch((err) => console.error('get single player failed', err));
  }, [props.match.params]);

  const deletePlayer = () => {
    const { playerId } = props.match.params;
    playersData.deletePlayer(playerId)
      .then(() => props.history.push('/home'))
      .catch((err) => console.error('delete single player failed!', err));
  };

  return (
    <div className="Singleplayer mt-3 p-3 bg-success rounded">
      <h1>Welcome to the {player.name} page</h1>
      <p>Player Skill Level: {player.level}</p>
      <p>Player Zipcode: {player.zipcode}</p>
      <p>Player Home Court is: {player.homeCourt}</p>
      <p>Player is available on Day: {player.dayAvailable}</p>
      <p>at Time: {player.timeAvailable}</p>
      <button className="btn btn-danger col-12" onClick={deletePlayer}><i className="fas fa-trash-alt"></i></button>
    </div>
  );
};

export default SinglePlayer;
