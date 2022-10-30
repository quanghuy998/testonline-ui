import { call, put, takeEvery } from 'redux-saga/effects';

import testApi from '~/api/apiFiles/testApi';
import { testsAction } from '~/reducers/testsSlice';

function* fetchTests() {
    try {
        const tests = yield call(testApi.getTests);
        yield put(testsAction.fetchTestsSuccess({ tests }));
    } catch (e) {
        put(testsAction.fetchTestsFailed({ error: e }));
    }
}

function* watchFetchTests() {
    yield takeEvery(testsAction.fetchTestsLoading.type, fetchTests);
}

export default watchFetchTests;
