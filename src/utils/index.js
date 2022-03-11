const getArrivalDate = (startFlight, duration) => {
  const startDate = new Date(startFlight);
  const startDateMiliseconds = startDate.getTime();
  const durationMiliSeconds = duration * 60000;
  const arrivalDate = new Date(startDateMiliseconds + durationMiliSeconds);

  return arrivalDate;
};

const formatTimerString = (time) => (String(time).length === 1 ? `0${time}` : `${time}`);

const returnTimeString = (hours, minutes) => {
  return `${hours}:${minutes}`;
};

const getDurationTime = (duration) => {
  const hours = formatTimerString(Math.trunc(duration / 60));
  const minutes = formatTimerString(duration % 60);

  return `${hours}ч ${minutes}м`;
};

export const getTimeObject = (startFlight, duration) => {
  const startFlightDate = new Date(startFlight);
  const endFlightDate = new Date(getArrivalDate(startFlight, duration));

  const startObj = {
    hours: formatTimerString(startFlightDate.getHours()),
    minutes: formatTimerString(startFlightDate.getMinutes()),
  };

  const endObj = {
    hours: formatTimerString(endFlightDate.getHours()),
    minutes: formatTimerString(endFlightDate.getMinutes()),
  };

  return {
    start: returnTimeString(startObj.hours, startObj.minutes),
    end: returnTimeString(endObj.hours, endObj.minutes),
    durationTime: getDurationTime(duration),
  };
};

export const filterTickets = (ticketArr, filters) => {
  if (!ticketArr.length) {
    return ticketArr;
  }

  const filtersValues = Object.values(filters).slice(1);

  const filteredTickets = [];

  filtersValues.forEach((filterValue, index) => {
    if (filterValue) {
      filteredTickets.push(
        ...ticketArr.filter((ticket) => {
          return (
            (ticket.segments[0].stops.length === index || ticket.segments[1].stops.length === index) &&
            !filteredTickets.includes(ticket)
          );
        })
      );
    }
  });

  return filteredTickets;
};

const getFlightDuration = (ticket) => {
  const ticketsSegments = ticket.segments;
  const flightDuration = ticketsSegments[0].duration + ticketsSegments[1].duration;
  return flightDuration;
};

export const sortTickets = (ticketsArr, activeTab) => {
  switch (activeTab) {
    case 'cost':
      return ticketsArr.sort((prevTicket, nextTicket) => {
        return prevTicket.price - nextTicket.price;
      });
    case 'fast':
      return ticketsArr.sort((prevTicket, nextTicket) => {
        return getFlightDuration(prevTicket) - getFlightDuration(nextTicket);
      });
    case 'optimal':
      return ticketsArr.sort((prevTicket, nextTicket) => {
        return getFlightDuration(prevTicket) + prevTicket.price - (getFlightDuration(nextTicket) + nextTicket.price);
      });
    default:
      return ticketsArr;
  }
};
