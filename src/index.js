import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducers';

import rootSaga from './redux/sagas';

const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

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