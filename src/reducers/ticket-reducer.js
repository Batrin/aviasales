const defaultTicketState = {
  tickets: [],
};

const ticketReducer = (state = defaultTicketState, action) => {
  switch (action.type) {
    case 'ADD_TICKETS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ticketReducer;
