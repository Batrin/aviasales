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

console.log(getTimeObject(Date.now(), 60));
