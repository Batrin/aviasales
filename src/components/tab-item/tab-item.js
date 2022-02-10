import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './tab-item.module.scss';

function TabItem({ tabName }) {
  const classNames = classnames(classes.tab);

  return (
    <button type="button" aria-label={tabName} className={classNames}>
      {tabName}
    </button>
  );
}

TabItem.propTypes = {
  tabName: PropTypes.string,
};

export default TabItem;
