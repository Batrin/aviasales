import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../filter-item';
import classes from './filter-list.module.scss';

function FilterList({ filtersNameObj }) {
  const filtersArr = [];

  for (const filter in filtersNameObj) {
    const item = <FilterItem key={filter} filterKey={filter} filterName={filtersNameObj[filter]} />;
    filtersArr.push(item);
  }

  return (
    <ul className={classes['filter-list']}>
      <p>Количество пересадок</p>
      {filtersArr}
    </ul>
  );
}

FilterList.propTypes = {
  filtersNameObj: PropTypes.instanceOf(Object),
};

export default FilterList;
