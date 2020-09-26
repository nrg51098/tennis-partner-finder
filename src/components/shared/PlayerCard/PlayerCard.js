import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import playerShape from '../../../helpers/propz/playerShape';

const PlayerCard = (props) => {
  const { player, deletePlayer } = props;

  const singlePlayerLink = `/players/${player.id}`;
  const editLink = `/edit/${player.id}`;

  return (
    <div className="col-4 mb-3">
      <div className="Bird card border-0">
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.level}</p>
          <p className="card-text">{player.zipcode}</p>
          <p className="card-text">{player.homeCourt}</p>
          <p className="card-text">{player.dayAvailable}</p>
          <p className="card-text">{player.timeAvailable}</p>
          <div className="btn-group">
            <Link to={singlePlayerLink} className="btn btn-warning"><i className="fas fa-binoculars"></i></Link>
            <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link>
            <button className="btn btn-danger" onClick={() => { deletePlayer(player.id); }}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
        <div className="card-footer text-muted">
          Updated: {moment(player.seenAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: playerShape.playerShape,
  deletePlayer: PropTypes.func.isRequired,
};

export default PlayerCard;
