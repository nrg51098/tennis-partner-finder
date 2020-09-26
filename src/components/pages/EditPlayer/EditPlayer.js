import React from 'react';

import playersData from '../../../helpers/data/playersData';

class EditPlayer extends React.Component {
  state = {
    player: {
      name: '',
      level: '',
      zipcode: '',
      homeCourt: '',
      timeAvailable: '',
    },
  }

  componentDidMount() {
    playersData.getPlayerById(this.props.match.params.playerId)
      .then((res) => {
        const player = res.data;
        this.setState({ player });
      })
      .catch((err) => console.error('err in get single player', err));
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.name = e.target.value;
    this.setState({ player });
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.level = e.target.value;
    this.setState({ player });
  }

  changeSizeEvent = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.zipcode = e.target.value;
    this.setState({ player });
  }

  changeAltColor = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.homeCourt = e.target.value;
    this.setState({ player });
  }

  changeLocation = (e) => {
    e.preventDefault();
    const { player } = this.state;
    player.timeAvailable = e.target.value;
    this.setState({ player });
  }

  updatePlayer = (e) => {
    e.preventDefault();
    const { playerId } = this.props.match.params;

    playersData
      .updatePlayer(playerId, this.state.player)
      .then(() => {
        this.props.history.push(`/players/${playerId}`);
      })
      .catch((err) => console.error('edit player broke', err));
  };

  render() {
    const {
      name,
      level,
      zipcode,
      homeCourt,
      timeAvailable,
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
              onChange={this.changeTypeEvent}
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
              onChange={this.changeColorEvent}
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
              onChange={this.changeSizeEvent}
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
              onChange={this.changeAltColor}
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
              onChange={this.changeLocation}
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

export default EditPlayer;
