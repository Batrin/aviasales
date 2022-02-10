import React from 'react';
import PropTypes from 'prop-types';
import classes from './ticket-item.module.scss';

function TicketItem({ ticket }) {
  return <div className={classes['ticket-item']}>{ticket}</div>;
}

TicketItem.propTypes = {
  ticket: PropTypes.string,
};

export default TicketItem;
