import { combineReducers } from 'redux';

const searchResults = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_RESULTS':
            console.log(action.payload);
            return [action.payload];
        default:
            return state;
    }
};

// const forecastResults = (state = [], action) => {
//     switch (action.type) {
//         case 'FORECAST_RESULTS':
//             console.log(action.payload);
//             return [action.payload];
//         default:
//             return state;
//     }
// };

export default combineReducers({
    searchResults,
});