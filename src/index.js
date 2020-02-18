import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducers';

import rootSaga from './redux/sagas';

// const weather = (state = [], action) => {
//     if (action.type === 'SEARCH_WEATHER_API') {
//         axios({
//             url: `http://api.weatherapi.com/v1/current.json?key=696e9369164547f080e155915201402&q=${action.payload}`,
//             method: 'GET',
//         })
//             .then(response => {
                 
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//         return [...state, ...action.payload];

//     } else if (action.type === 'RESET') {
//         return [];
//     }
//     return state;
// };

// const searchResults = (state = [], action) => {
//     switch (action.type) {
//         case 'SEARCH_RESULTS':
//             return action.payload;
//         default:
//             return state;
//     }
// };

// const searchResults = (state = [], action) => {
//     if (action.type === 'SEARCH_RESULTS') {
//         console.log(action);
//         return [...state, ...action.payload];
//     } else if (action.type === 'RESET') {
//         return [];
//     }
//     return state;
// };

// const tacos = (state = [], action) => {
//     if (action.type === 'SEARCH_WEATHER_API') {
//         console.log(action);
//         return [...state, ...action.payload];
//     } else if (action.type === 'RESET') {
//         return [];
//     }
// };

// const storeInstance = createStore(
//     combineReducers({
//         searchResults,
//         // tacos,
//     }),
//    // applyMiddleware(logger),
// )

const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

const storeInstance = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();