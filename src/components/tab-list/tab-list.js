import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TabItem from '../tab-item/tab-item';
import classes from './tab-list.module.scss';

function TabList({ tabsNameArray }) {
  const activeTabName = useSelector((state) => state.tab.activeTabName);

  const tabsArray = tabsNameArray.map((tabName, tabIndex) => {
    const isActiveTab = tabName === activeTabName;
    return <TabItem key={tabIndex} tabName={tabName} isActiveTab={isActiveTab} />;
  });

  return <ul className={classes.tabs}>{tabsArray}</ul>;
}

TabList.propTypes = {
  tabsNameArray: PropTypes.arrayOf(PropTypes.string),
};

export default TabList;
