import { combineReducers } from 'redux';
import searchResults from './searchResultsReducer';

const store = combineReducers({
  searchResults,
});

export default store;
