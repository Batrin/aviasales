const defaultTicketState = {
  tickets: [],
  stop: false,
  lastDisplayedTicket: 5,
};

const ticketReducer = (state = defaultTicketState, action) => {
  switch (action.type) {
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case 'SET_LOADING':
      return { ...state, stop: action.payload };
    case 'SET_LAST_TICKET':
      return { ...state, lastDisplayedTicket: state.lastDisplayedTicket + 5 };
    case 'RESET_LAST_TICKET':
      return { ...state, lastDisplayedTicket: 5 };
    default:
      return state;
  }
};

export default ticketReducer;
