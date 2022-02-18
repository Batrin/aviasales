export const setActiveTab = (payload) => ({ type: 'SET_ACTIVE_TAB', payload });
export const changeFilterState = (payload) => ({ type: 'CHANGE_FILTER_STATE', payload });
export const changeAllFilterState = () => ({ type: 'CHANGE_ALL_FILTER_STATE' });
export const changeMainFilterState = () => ({ type: 'CHANGE_MAIN_FILTER_STATE' });
export const addTickets = (payload) => ({ type: 'ADD_TICKETS', payload });
export const setLoading = (payload) => ({ type: 'SET_LOADING', payload });
export const setLastTicket = () => ({ type: 'SET_LAST_TICKET' });
export const resetLastTicket = () => ({ type: 'RESET_LAST_TICKET' });
