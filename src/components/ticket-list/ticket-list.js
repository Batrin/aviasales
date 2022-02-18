import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ticket-list.module.scss';
import TicketItem from '../ticket-item';
import { getSearchId, getTickets } from '../../api';
import { addTickets, setLoading } from '../../actions/syncAction/actions';
import { filterTickets, sortTickets } from '../../utils';
import Alert from '../alert';
import AppFooter from '../app-footer';

function TicketList() {
  const dispatch = useDispatch();
  const alertMessage = {
    loading: 'Билеты загружаются...',
    noTicket: 'По заданным фильтрам ничего не найдено',
  };
  const activeTab = useSelector((state) => state.tab.activeTabName);
  const lastDisplayedTicket = useSelector((state) => state.tickets.lastDisplayedTicket);
  const ticketList = useSelector((state) => state.tickets.tickets);
  const isStop = useSelector((state) => state.tickets.stop);
  const filters = useSelector((state) => state.filter.activeFilterObj);

  const alert = !isStop ? <Alert message={alertMessage.loading} /> : null;
  const filtersTickets = filterTickets(ticketList, filters).slice(0, lastDisplayedTicket);
  const filteredTickets = sortTickets(filtersTickets, activeTab);
  const noTicketAlert = isStop && !filteredTickets.length ? <Alert message={alertMessage.noTicket} /> : null;
  const footer = filteredTickets.length ? <AppFooter /> : null;

  const getAllTickets = (searchId) => {
    getTickets(searchId).then((res) => {
      if (!res.stop) {
        dispatch(addTickets(res.tickets));
        getAllTickets(searchId);
      }
      if (res.stop) {
        dispatch(setLoading(res.stop));
      }
    });
  };

  useEffect(() => {
    getSearchId().then((res) => {
      getAllTickets(res.searchId);
    });
    // eslint-disable-next-line
  }, []);

  let ticketsItemList = null;

  if (filteredTickets.length) {
    ticketsItemList = filteredTickets.map((ticket, index) => {
      return <TicketItem ticket={ticket} key={index} />;
    });
  }

  return (
    <>
      <ul className={classes['ticket-list']}>
        {alert}
        {ticketsItemList}
        {noTicketAlert}
      </ul>
      {footer}
    </>
  );
}

export default TicketList;
