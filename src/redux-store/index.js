import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tabReducer from '../reducers/tab-reducer';
import filtersReducer from '../reducers/filters-reducer';
import ticketReducer from '../reducers/ticket-reducer';

const rootReducer = combineReducers({
  tab: tabReducer,
  filter: filtersReducer,
  tickets: ticketReducer,
});

const index = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default index;
