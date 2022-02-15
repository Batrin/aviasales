import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import classes from './tab-item.module.scss';
import { setActiveTab } from '../../actions/actions';

function TabItem({ tabName, isActiveTab }) {
  const dispatch = useDispatch();

  const defaultClass = classes.tab;
  const activeTab = classes.tab__active;

  const classNames = classnames({
    [defaultClass]: true,
    [activeTab]: isActiveTab,
  });

  const onTabClick = (event) => {
    const { name } = event.target;
    dispatch(setActiveTab(name));
  };

  return (
    <button name={tabName} onClick={onTabClick} type="button" aria-label={tabName} className={classNames}>
      {tabName}
    </button>
  );
}

TabItem.propTypes = {
  tabName: PropTypes.string,
  isActiveTab: PropTypes.bool,
};

export default TabItem;
