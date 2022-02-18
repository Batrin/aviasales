import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TabItem from '../tab-item/tab-item';
import classes from './tab-list.module.scss';

function TabList({ tabsNameObj }) {
  const activeTabName = useSelector((state) => state.tab.activeTabName);
  const tabsArray = [];

  for (const tab in tabsNameObj) {
    const tabName = tabsNameObj[tab];
    const isTabActive = activeTabName === tab;

    tabsArray.push(<TabItem key={tab} name={tab} tabName={tabName} isActiveTab={isTabActive} />);
  }

  return <ul className={classes.tabs}>{tabsArray}</ul>;
}

TabList.propTypes = {
  tabsNameObj: PropTypes.instanceOf(Object),
};

export default TabList;
