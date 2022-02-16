import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './app-footer.module.scss';
import { getTickets } from '../../actions/asyncAction/tickets';

function AppFooter() {
  const footerButtonText = 'Показать ещё 5 билетов!';
  const dispatch = useDispatch();

  const onFooterClick = () => {
    dispatch(getTickets());
  };

  return (
    <div className={classes['app-footer']}>
      <button
        onClick={onFooterClick}
        type="button"
        aria-label={footerButtonText}
        className={classes['app-footer__button']}
      >
        {footerButtonText}
      </button>
    </div>
  );
}

export default AppFooter;
