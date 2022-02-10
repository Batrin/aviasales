import React from 'react';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import TabList from '../tab-list';
import FilterList from '../filter-list/filter-list';
import TicketList from '../ticket-list';

function App() {
  const tabsNameArray = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

  const filtersNameArray = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  const ticketsArray = ['1', '2', '3', '4', '5'];

  return (
    <div className={classes['outer-wrapper']}>
      <div className={classes['content-wrapper']}>
        <AppHeader />
        <div className={classes['ticket-wrapper']}>
          <div>
            <FilterList filtersNameArr={filtersNameArray} />
          </div>
          <div className={classes['content-wrapper__ticket-info']}>
            <TabList tabsNameArray={tabsNameArray} />
            <TicketList ticketArray={ticketsArray} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
