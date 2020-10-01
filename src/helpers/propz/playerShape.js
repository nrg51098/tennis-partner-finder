import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  homeCourt: PropTypes.string.isRequired,
  timeAvailable: PropTypes.string.isRequired,
});

export default { playerShape };
