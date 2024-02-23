import PropTypes from 'prop-types';
import React from 'react';
import './Badge.css';

const Badge = ({ color, text }) => {
  return (
    <div className={`badge ${color}`}>
      <div className="BADGE">{text}</div>
    </div>
  );
};

Badge.propTypes = {
  color: PropTypes.oneOf(['grey', 'blue', 'green', 'orange', 'red']),
  text: PropTypes.string,
};

export default Badge;
