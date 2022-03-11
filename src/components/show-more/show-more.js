import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './show-more.module.scss';
import { setLastTicket } from '../../redux-store/actions/syncAction/actions';

function ShowMore() {
  const dispatch = useDispatch();

  const onFooterClick = () => {
    dispatch(setLastTicket());
  };

  return (
    <div className={classes['show-more']}>
      <button
        onClick={onFooterClick}
        type="button"
        aria-label="Показать ещё 5 билетов!"
        className={classes['show-more__button']}
      >
        Показать ещё 5 билетов!
      </button>
    </div>
  );
}

export default ShowMore;
