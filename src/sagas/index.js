import { all } from 'redux-saga/effects';
import testSaga from './tests';

function* rootSaga() {
    yield all([testSaga()]);
}

export default rootSaga;
