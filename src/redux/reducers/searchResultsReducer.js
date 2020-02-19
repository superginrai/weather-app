import { combineReducers } from 'redux';

//Stores API results for access by the DOM
const searchResults = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_RESULTS':
            console.log(action.payload);
            console.log(state);
            return [action.payload];
        case "CLEAR_RESULTS":
                return [];    
        default:
            return state;
    }
};

export default combineReducers({
    searchResults,
});