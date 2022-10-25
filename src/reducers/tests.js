import Types from '../constants/tests';

const initialState = {
    tests: [],
    status: 'idle',
    error: null,
};

const testsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_TESTS_LOADING: {
            return {
                ...state,
                status: 'loading',
            };
        }
        case Types.FETCH_TESTS_SUCCEEDED: {
            return {
                ...state,
                status: 'succeeded',
                tests: action.payload.tests,
            };
        }
        case Types.FETCH_TESTS_FAILED: {
            return {
                ...state,
                status: 'failed',
                error: action.payload.error,
            };
        }
        default: {
            return state;
        }
    }
};

export default testsReducer;
