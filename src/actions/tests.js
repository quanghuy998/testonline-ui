import Types from '../constants/tests.js';

const fetchTestsLoading = () => ({
    type: Types.FETCH_TESTS_LOADING,
});

const fetchTestsSucceeded = ({ tests }) => ({
    type: Types.FETCH_TESTS_SUCCEEDED,
    payload: {
        tests,
    },
});

const fetchTestsFailed = ({ error }) => ({
    type: Types.FETCH_TESTS_FAILED,
    payload: {
        error,
    },
});

export { fetchTestsLoading, fetchTestsSucceeded, fetchTestsFailed };
