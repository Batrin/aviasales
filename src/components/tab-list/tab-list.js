import React from 'react';
import PropTypes from 'prop-types';
import TabItem from '../tab-item/tab-item';
import classes from './tab-list.module.scss';

function TabList({ tabsNameArray }) {
  const tabsArray = tabsNameArray.map((tabName, tabIndex) => {
    return <TabItem key={tabIndex} tabName={tabName} />;
  });

  return <ul className={classes.tabs}>{tabsArray}</ul>;
}

TabList.propTypes = {
  tabsNameArray: PropTypes.arrayOf(PropTypes.string),
};

export default TabList;
