import React from 'react';
import logo from './main-logo.svg';
import classes from './app-header.module.scss';

function AppHeader() {
  return (
    <div className={classes['app-header']}>
      <img src={logo} alt="Main Aviasales Logo" />
    </div>
  );
}

export default AppHeader;
