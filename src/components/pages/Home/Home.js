import React from 'react';
import { Button } from 'reactstrap';

import GameCard from '../../shared/GameCard/GameCard';

import authData from '../../../helpers/data/authData';
import playersData from '../../../helpers/data/playersData';

class Home extends React.Component {
  state = {
    currentPlayer: '',
    matchedPlayer: '',
  }

  getPlayers = () => {
    playersData.getPlayerByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get players broke', err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  findPartner = () => {
    playersData.getAllPlayers()
      .then((players) => (
        playersData.getPlayerByUid(authData.getUid())
          .then((playersWithUid) => {
            const currentPlayer = playersWithUid[0];
            // eslint-disable-next-line max-len
            const matchedPlayer = players.find((player) => currentPlayer.name !== player.name && currentPlayer.zipcode === player.zipcode && currentPlayer.timeAvailable.toUpperCase() === player.timeAvailable.toUpperCase() && currentPlayer.dayAvailable.toUpperCase() === player.dayAvailable.toUpperCase());
            console.warn(currentPlayer.name, matchedPlayer.name);
            // eslint-disable-next-line no-unused-expressions
            this.setState({ currentPlayer, matchedPlayer });
          })
          .catch((err) => console.error('get players broke', err))
      ));
  }

  render() {
    const { currentPlayer, matchedPlayer } = this.state;

    const gameCard = <GameCard currentPlayer={currentPlayer} matchedPlayer={matchedPlayer}/>;

    return (
      <div className="Home">
        <h1><span role="img" aria-label="player emoji">Find a tennis partner in one click</span> <span role="img" aria-label="house emoji"></span></h1>
        <div className="custom-card-group">
          <Button className="btn btn-success findPartnerButton" onClick={ this.findPartner }>Find a Tennis Partner</Button>
        </div>
        <div className="custom-card-group">
          {(currentPlayer) ? gameCard : ''}
        </div>
      </div>
    );
  }
}

export default Home;
