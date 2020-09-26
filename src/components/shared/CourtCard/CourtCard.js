import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import courtShape from '../../../helpers/propz/courtShape';

const CourtCard = (props) => {
  const { court } = props;

  const singleCourtLink = `/courts/${court.id}`;

  return (
    <div className="col-4 mb-3">
      <div className="Court card border-0">
        <div className="card-body">
          <h5 className="card-title">{court.name}</h5>
          <p className="card-text">{court.zipcode}</p>
          <p className="card-text">{court.available}</p>
          <div className="btn-group">
            <Link to={singleCourtLink} className="btn btn-warning"><i className="fas fa-binoculars"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CourtCard.propTypes = {
  court: courtShape.courtShape,
  deletecourt: PropTypes.func.isRequired,
};

export default CourtCard;
