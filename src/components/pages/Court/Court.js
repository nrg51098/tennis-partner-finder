import React from 'react';

import CourtCard from '../../shared/CourtCard/CourtCard';

import courtData from '../../../helpers/data/courtData';

class Court extends React.Component {
  state = {
    courts: [],
  }

  getCourts = () => {
    courtData.getCourts()
      .then((courts) => this.setState({ courts }))
      .catch((err) => console.error('get players broke', err));
  }

  componentDidMount() {
    this.getCourts();
  }

  render() {
    const { courts } = this.state;

    const courtCards = courts.map((court) => <CourtCard key={court.id} court={court}/>);

    return (
      <div className="Home">
        <h1><span role="img" aria-label="player emoji">List of all the available courts</span> <span role="img" aria-label="house emoji"></span></h1>
        <div className="card-group">
            { courtCards }
        </div>
      </div>
    );
  }
}

export default Court;
