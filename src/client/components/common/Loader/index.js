import React from 'react';
import PropTypes from 'prop-types';

import '../../../assets/styles/loader.css';

const Loader = ({ className }) => (<div className={className
  ? `spinner ${className}`
  : 'spinner'}
/>);

Loader.propTypes = {
  className: PropTypes.string
};

export default Loader;
