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
        case Types.CREATE_TEST_LOADING: {
            return {
                state.status = 'loading',
                
                status: 'loading',
            };
        }
        case Types.CREATE_TEST_SUCCEEDED: {
            return {
                ...state,
                status: 'succeeded',
                state.tests.push(action.payload.test),
            };
        }

        default: {
            return state;
        }
    }
};

export default testsReducer;
