import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classes from './filter-item.module.scss';
import { changeFilterState, changeAllFilterState, changeMainFilterState } from '../../actions/syncAction/actions';

function FilterItem({ filterName, filterKey }) {
  const activeFilterObject = useSelector((state) => state.filter.activeFilterObj);

  const isFilterActive = activeFilterObject[filterKey];

  const dispatch = useDispatch();

  const onCheckboxChange = (event) => {
    const { name } = event.target;
    dispatch(changeFilterState(name));
    if (String(filterKey) === 'all') {
      dispatch(changeAllFilterState());
    } else {
      dispatch(changeMainFilterState());
    }
  };

  return (
    <div className="filter">
      <label className={classes.check}>
        <input
          onChange={onCheckboxChange}
          checked={isFilterActive}
          name={filterKey}
          type="checkbox"
          className={classes.check__input}
        />
        <span className={classes.check__box} />
        {filterName}
      </label>
    </div>
  );
}

FilterItem.propTypes = {
  filterName: PropTypes.string,
  filterKey: PropTypes.string,
};

export default FilterItem;
