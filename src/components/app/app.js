import React from 'react';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import TabList from '../tab-list';
import FilterList from '../filter-list/filter-list';
import TicketList from '../ticket-list';
import AppFooter from '../app-footer';

function App() {
  const tabsNameArray = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

  const filtersNameObj = {
    all: 'Все',
    withoutTransfer: 'Без пересадок',
    oneTransfer: '1 пересадка',
    twoTransfer: '2 пересадки',
    threeTransfer: '3 пересадки',
  };

  const ticketsArray = ['1', '2', '3', '4', '5'];

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
            <TicketList ticketArray={ticketsArray} />
            <AppFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
