import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../filter-item';
import classes from './filter-list.module.scss';

function FilterList({ filtersNameArr }) {
  const filterArr = filtersNameArr.map((filterName, filterIndex) => {
    return <FilterItem key={filterIndex} filterName={filterName} />;
  });

  return (
    <ul className={classes['filter-list']}>
      <p>Количество пересадок</p>
      {filterArr}
    </ul>
  );
}

FilterList.propTypes = {
  filtersNameArr: PropTypes.arrayOf(PropTypes.string),
};

export default FilterList;
