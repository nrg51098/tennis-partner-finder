import PropTypes from 'prop-types';

const courtShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
});

export default { courtShape };
