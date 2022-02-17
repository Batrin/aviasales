import React from 'react';
import PropTypes from 'prop-types';
import classes from './ticket-item.module.scss';
import { getTimeObject } from '../../utils';

function TicketItem({ ticket }) {
  const { price, segments, carrier } = ticket;

  const ticketInfoSection = segments.map((segment, index) => {
    const { origin, destination, stops, date, duration } = segment;
    const flightDateObject = getTimeObject(date, duration);
    const { start, end, durationTime } = flightDateObject;

    return (
      <section key={index} className={classes['ticket-info__section']}>
        <div className={classes['ticket-info__single-block']}>
          <h2>
            {origin}-{destination}
          </h2>
          <p>
            {start}-{end}
          </p>
        </div>
        <div className={classes['ticket-info__single-block']}>
          <h2>В пути</h2>
          <p>{durationTime}</p>
        </div>
        <div className={classes['ticket-info__single-block']}>
          <h2>{stops.length} пересадок</h2>
          <p>{stops.join(',')}</p>
        </div>
      </section>
    );
  });

  return (
    <div className={classes['ticket-item']}>
      <div className={classes['ticket-item__header']}>
        <p>{price} Р</p>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="avia-logo" />
      </div>
      <div>{ticketInfoSection}</div>
    </div>
  );
}

TicketItem.propTypes = {
  ticket: PropTypes.instanceOf(Object),
};

export default TicketItem;
