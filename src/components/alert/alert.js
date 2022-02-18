import React from 'react';
import PropTypes from 'prop-types';
import classes from './alert.module.scss';

function Alert({ message }) {
  return (
    <div className={classes.alert}>
      <p>{message}</p>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
};

export default Alert;
