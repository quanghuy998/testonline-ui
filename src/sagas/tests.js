import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/tests';
import testApi from '~/api/apiFiles/testApi';
import Types from '../constants/tests';

function* fetchTests() {
    try {
        const tests = yield call(testApi.getTests);
        console.log(tests);
        yield put(
            actions.fetchTestsSucceeded({
                tests,
            }),
        );
    } catch (e) {
        put(actions.fetchTestsFailed({ error: e }));
    }
}

function* watchFetchTests() {
    yield takeEvery(Types.FETCH_TESTS_LOADING, fetchTests);
}

export default watchFetchTests;
