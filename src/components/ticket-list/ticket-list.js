import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ticket-list.module.scss';
import TicketItem from '../ticket-item';

function TicketList() {
  const ticketList = useSelector((state) => state.tickets.tickets).splice(0, 5);
  const ticketsItemList = ticketList.map((ticket, index) => {
    return <TicketItem ticket={ticket} key={index} />;
  });
  return <ul className={classes['ticket-list']}>{ticketsItemList}</ul>;
}

export default TicketList;
