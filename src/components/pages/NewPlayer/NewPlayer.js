import React from 'react';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';

import 'react-datepicker/dist/react-datepicker.css';
import playersData from '../../../helpers/data/playersData';
// what does our player look like? You know, as an object
// set up state
// get items off state in render?
// make sure to get the uid from authData before creating player

class NewPlayer extends React.Component {
  state = {
    name: '',
    level: '',
    zipcode: '',
    homeCourt: '',
    timeAvailable: '',
    dayAvailable: '',
  };

  // do the same thing for everything else!
  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  changeLevelEvent = (e) => {
    e.preventDefault();
    this.setState({ level: e.target.value });
  }

  changeZipcodeEvent = (e) => {
    e.preventDefault();
    this.setState({ zipcode: e.target.value });
  }

  changeHomeCourtEvent = (e) => {
    e.preventDefault();
    this.setState({ homeCourt: e.target.value });
  }

  changeTimeAvailableEvent = (e) => {
    e.preventDefault();
    this.setState({ timeAvailable: e.target.value });
  }

  changeDayAvailableEvent = (e) => {
    e.preventDefault();
    this.setState({ dayAvailable: e.target.value });
  }

  changeLocation = (e) => {
    e.preventDefault();
    this.setState({ timeAvailable: e.target.value });
  }

  savePlayer = (e) => {
    e.preventDefault();
    // get player items off state
    // create new player object
    // pass that to a data function
    // do something on save?
    const keysIWant = [
      'name',
      'level',
      'zipcode',
      'homeCourt',
      'timeAvailable',
      'dayAvailable',
    ];

    const newPlayer = _.pick(this.state, keysIWant);
    newPlayer.uid = authData.getUid();

    playersData
      .createPlayer(newPlayer)
      .then((res) => {
        this.props.history.push(`/players/${res.data.name}`);
      })
      .catch((err) => console.error('new player broke', err));
  };

  render() {
    const {
      name,
      level,
      zipcode,
      homeCourt,
      timeAvailable,
      dayAvailable,
    } = this.state;

    return (
      <div className="newPlayer col-12">
        <h1>newPlayer</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="playerType">Name</label>
            <input
              type="text"
              className="form-control"
              id="playerType"
              placeholder="Enter player Name"
              value={name}
              onChange={this.changeNameEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerColor">Skill Level</label>
            <input
              type="text"
              className="form-control"
              id="playerColor"
              placeholder="Enter player Skill Level"
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
            <label htmlFor="playerAltColor">HomeCourt</label>
            <input
              type="text"
              className="form-control"
              id="playerAltColor"
              placeholder="Enter player HomeCourt"
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
              placeholder="Enter player time availability"
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
              placeholder="Enter player time availability"
              value={dayAvailable}
              onChange={this.changeDayAvailableEvent}
            />
          </div>
          <button className="btn btn-warning" onClick={this.savePlayer}>
            Save Player
          </button>
        </form>
      </div>
    );
  }
}

export default NewPlayer;
