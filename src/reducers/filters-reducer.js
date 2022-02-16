const defaultFilterState = {
  activeFilterObj: {
    all: false,
    withoutTransfer: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false,
  },
};

const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
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

export default filtersReducer;
