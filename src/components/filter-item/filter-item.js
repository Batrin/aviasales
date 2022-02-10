import React from 'react';
import PropTypes from 'prop-types';
import classes from './filter-item.module.scss';

function FilterItem({ filterName }) {
  return (
    <div className="filter">
      <label className={classes.check}>
        <input type="checkbox" className={classes.check__input} />
        <span className={classes.check__box} />
        {filterName}
      </label>
    </div>
  );
}

FilterItem.propTypes = {
  filterName: PropTypes.string,
};

export default FilterItem;
