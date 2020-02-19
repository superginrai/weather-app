import axios from 'axios';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';

const apiKey = '696e9369164547f080e155915201402'

//Sends call to WeatherAPI.com and dispatches results to searchResultsReducer for storage
function* searchApi(action) {
    try {
        yield dispatch({
            type: 'CLEAR_RESULTS',
        })
        const search = yield call (axios.get, `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${action.payload}&days=4`);
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