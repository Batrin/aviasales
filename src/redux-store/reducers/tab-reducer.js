const defaultTabState = {
  activeTabName: 'cost',
};

const tabReducer = (state = defaultTabState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTabName: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
