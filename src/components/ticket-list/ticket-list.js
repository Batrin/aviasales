import React from 'react';
import PropTypes from 'prop-types';
import TicketItem from '../ticket-item';
import classes from './ticket-list.module.scss';

function TicketList({ ticketArray }) {
  const ticketsItemArray = ticketArray.map((ticket, index) => {
    return <TicketItem ticket={ticket} key={index} />;
  });
  return <ul className={classes['ticket-list']}>{ticketsItemArray}</ul>;
}

TicketList.propTypes = {
  ticketArray: PropTypes.arrayOf(PropTypes.string),
};

export default TicketList;
