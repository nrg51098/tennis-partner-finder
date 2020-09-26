import React from 'react';

const GameCard = (props) => {
  const { currentPlayer, matchedPlayer } = props;

  return (
    <div className="mb-3">
      <div className="Court card border-0">
        <div className="card-body">
          <h1 className="card-title">Match is set for:</h1>
          <h3 className="card-text">Player1:</h3>
          <h3 className="card-text customStyle">{currentPlayer.name}</h3>
          <h3 className="card-text">Player2:</h3>
          <h3 className="card-text customStyle">{matchedPlayer.name}</h3>
          <h3 className="card-text">On Court:</h3>
          <h3 className="card-text customStyle">{currentPlayer.homeCourt}</h3>
          <h3 className="card-text">On Day:</h3>
          <h3 className="card-text customStyle">{currentPlayer.dayAvailable}</h3>
          <h3 className="card-text">In the:</h3>
          <h3 className="card-text customStyle">{currentPlayer.timeAvailable}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
