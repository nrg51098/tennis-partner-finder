import React from 'react';

import PlayerCard from '../../shared/PlayerCard/PlayerCard';

import playersData from '../../../helpers/data/playersData';

class Player extends React.Component {
  state = {
    players: [],
  }

  getPlayers = () => {
    playersData.getAllPlayers()
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get players broke', err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  deletePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error('Delete player failed', err));
  }

  render() {
    const { players } = this.state;

    const playerCards = players.map((player) => <PlayerCard key={player.id} player={player} deletePlayer={this.deletePlayer}/>);

    return (
      <div className="Home">
        <h1><span role="img" aria-label="player emoji">List of all the available Tennis players</span> <span role="img" aria-label="house emoji"></span></h1>
        <div className="card-group">
          {playerCards}
        </div>
      </div>
    );
  }
}

export default Player;
