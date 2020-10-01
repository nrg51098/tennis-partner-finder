import React from 'react';

import playersData from '../../../helpers/data/playersData';
import authData from '../../../helpers/data/authData';

class UpdatePlayer extends React.Component {
  state = {
    player: {
      name: '',
      level: '',
      zipcode: '',
      homeCourt: '',
      timeAvailable: '',
      dayAvailable: '',
    },
  }

  componentDidMount() {
    playersData.getPlayerByUid(authData.getUid())
      .then((playersWithUid) => {
        const player = playersWithUid[0];
        console.warn(player);
        this.setState({ player });
      })
      .catch((err) => console.error('err in get single player', err));
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.name = e.target.value;
    this.setState({ player });
  }

  changeLevelEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.level = e.target.value;
    this.setState({ player });
  }

  changeZipcodeEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.zipcode = e.target.value;
    this.setState({ player });
  }

  changeHomeCourtEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.homeCourt = e.target.value;
    this.setState({ player });
  }

  changeTimeAvailableEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.timeAvailable = e.target.value;
    this.setState({ player });
  }

  changeDayAvailableEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.dayAvailable = e.target.value;
    this.setState({ player });
  }

  updatePlayer = (e) => {
    e.preventDefault();
    playersData.getPlayerByUid(authData.getUid())
      .then((playersWithUid) => {
        const player = playersWithUid[0];
        console.warn(player);
        this.setState({ player });
        playersData
          .updatePlayer(player.id, this.state.player)
          .then(() => {
            this.props.history.push(`/players/${player.id}`);
          })})
      .catch((err) => console.error('err in get single player', err));
  };

  render() {
    const {
      name,
      level,
      zipcode,
      homeCourt,
      timeAvailable,
      dayAvailable,
    } = this.state.player;

    return (
      <div className="Editplayer col-12">
        <h1>Edit player</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="playerType">Name</label>
            <input
              type="text"
              className="form-control"
              id="playerType"
              placeholder="Enter player name"
              value={name}
              onChange={this.changeNameEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerColor">Level</label>
            <input
              type="text"
              className="form-control"
              id="playerColor"
              placeholder="Enter player level"
              value={level}
              onChange={this.changeLevelEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerSize">Zipcode</label>
            <input
              type="text"
              className="form-control"
              id="playerSize"
              placeholder="Enter player zipcode"
              value={zipcode}
              onChange={this.changeZipcodeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerAltColor">Home Court</label>
            <input
              type="text"
              className="form-control"
              id="playerAltColor"
              placeholder="Enter player home court"
              value={homeCourt}
              onChange={this.changeHomeCourtEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerLocation">Time Available</label>
            <input
              type="text"
              className="form-control"
              id="playerLocation"
              placeholder="Enter player time available"
              value={timeAvailable}
              onChange={this.changeTimeAvailableEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerLocation">Day Available</label>
            <input
              type="text"
              className="form-control"
              id="playerLocation"
              placeholder="Enter player day available"
              value={dayAvailable}
              onChange={this.changeDayAvailableEvent}
            />
          </div>
          <button className="btn btn-info" onClick={this.updatePlayer}>
            Update player
          </button>
        </form>
      </div>
    );
  }
}

export default UpdatePlayer;
