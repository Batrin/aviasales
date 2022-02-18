import React, { useEffect } from 'react';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import TabList from '../tab-list';
import FilterList from '../filter-list/filter-list';
import TicketList from '../ticket-list';
import AppFooter from '../app-footer';
import { getSearchId } from '../../api';

function App() {
  const tabsNameObj = {
    cost: 'Самый дешевый',
    fast: 'Самый быстрый',
    optimal: 'Оптимальный',
  };
  const filtersNameObj = {
    all: 'Все',
    withoutTransfer: 'Без пересадок',
    oneTransfer: '1 пересадка',
    twoTransfer: '2 пересадки',
    threeTransfer: '3 пересадки',
  };

  useEffect(() => {
    getSearchId();
  }, []);

  return (
    <div className={classes['outer-wrapper']}>
      <div className={classes['content-wrapper']}>
        <AppHeader />
        <div className={classes['ticket-wrapper']}>
          <div>
            <FilterList filtersNameObj={filtersNameObj} />
          </div>
          <div className={classes['content-wrapper__ticket-info']}>
            <TabList tabsNameObj={tabsNameObj} />
            <TicketList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
