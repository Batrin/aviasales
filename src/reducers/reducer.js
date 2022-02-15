import initialState from '../redux-store/initial-state';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTabName: action.payload };
    case 'CHANGE_FILTER_STATE':
      return {
        ...state,
        activeFilterObj: { ...state.activeFilterObj, [action.payload]: !state.activeFilterObj[action.payload] },
      };
    case 'CHANGE_ALL_FILTER_STATE':
      const filtersCopy = { ...state.activeFilterObj };
      for (const filter in filtersCopy) {
        filtersCopy[filter] = filtersCopy.all;
      }
      return { ...state, activeFilterObj: filtersCopy };
    case 'CHANGE_MAIN_FILTER_STATE':
      const secondaryFiltersState = [];
      const filters = { ...state.activeFilterObj };
      for (const filter in filters) {
        if (String(filter) !== 'all') {
          secondaryFiltersState.push(filters[filter]);
        }
      }
      const isMainFilterActive = !secondaryFiltersState.includes(false);
      return {
        ...state,
        activeFilterObj: { ...state.activeFilterObj, all: isMainFilterActive },
      };
    default:
      return state;
  }
};

export default reducer;
