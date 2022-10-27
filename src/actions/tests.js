import Types from '../constants/tests.js';

const fetchTestsLoading = () => ({
    type: Types.FETCH_TESTS_LOADING,
});

const fetchTestsSucceeded = ({ tests }) => ({
    type: Types.FETCH_TESTS_SUCCEEDED,
    payload: { tests },
});

const fetchTestsFailed = ({ error }) => ({
    type: Types.FETCH_TESTS_FAILED,
    payload: { error },
});

const createTestLoading = () => ({
    type: Types.CREATE_TEST_LOADING,
});

const createTestSucceeded = ({ tests }) => ({
    type: Types.CREATE_TEST_SUCCEEDED,
    payload: { tests },
});

const createTestFailed = ({ error }) => ({
    type: Types.CREATE_TEST_FAILED,
    payload: { error },
});

const updateTestLoading = () => ({
    type: Types.UPDATE_TEST_LOADING,
});

const updateTestSucceeded = ({ test }) => ({
    type: Types.UPDATE_TEST_SUCCEEDED,
    payload: { test },
});

const updateTestFailed = ({ error }) => ({
    type: Types.UPDATE_TEST_FAILED,
    payload: { error },
});

export {
    fetchTestsLoading,
    fetchTestsSucceeded,
    fetchTestsFailed,
    createTestLoading,
    createTestSucceeded,
    createTestFailed,
    updateTestLoading,
    updateTestSucceeded,
    updateTestFailed,
};
