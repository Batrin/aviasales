import React from 'react';
import classes from './app-footer.module.scss';

function AppFooter() {
  const footerButtonText = 'Показать ещё 5 билетов!';

  return (
    <div className={classes['app-footer']}>
      <button type="button" aria-label={footerButtonText} className={classes['app-footer__button']}>
        {footerButtonText}
      </button>
    </div>
  );
}

export default AppFooter;
