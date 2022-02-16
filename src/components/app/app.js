import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import TabList from '../tab-list';
import FilterList from '../filter-list/filter-list';
import TicketList from '../ticket-list';
import AppFooter from '../app-footer';
import { getSearchId, getTickets } from '../../actions/asyncAction/tickets';

function App() {
  const tabsNameArray = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];
  const dispatch = useDispatch();

  const filtersNameObj = {
    all: 'Все',
    withoutTransfer: 'Без пересадок',
    oneTransfer: '1 пересадка',
    twoTransfer: '2 пересадки',
    threeTransfer: '3 пересадки',
  };

  useEffect(() => {
    if (!localStorage.getItem('searchId')) {
      getSearchId().then((searchId) => {
        localStorage.setItem('searchId', searchId);
      });
    }
    dispatch(getTickets(localStorage.getItem('searchId')));
  }, [dispatch]);

  return (
    <div className={classes['outer-wrapper']}>
      <div className={classes['content-wrapper']}>
        <AppHeader />
        <div className={classes['ticket-wrapper']}>
          <div>
            <FilterList filtersNameObj={filtersNameObj} />
          </div>
          <div className={classes['content-wrapper__ticket-info']}>
            <TabList tabsNameArray={tabsNameArray} />
            <TicketList />
            <AppFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
