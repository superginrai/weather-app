import axios from 'axios';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';

const apiKey = ''

function* searchApi(action) {
    try {
        console.log('are we there yet?', action.payload)
        const search = yield call (axios.get, `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${action.payload}&days=4`);
        console.log(search);
        yield JSON.stringify(search);
        yield dispatch({
            type: 'SEARCH_RESULTS',
            payload: search,
        })
    } catch (error) { }

}

function* searchApiSaga() {
    yield takeEvery('SEARCH_WEATHER_API', searchApi);
}

export default searchApiSaga;