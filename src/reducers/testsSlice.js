import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tests: [],
    status: 'idle',
    error: null,
};

const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        fetchTestsLoading(state) {
            state.status = 'loading';
        },
        fetchTestsSuccess(state, action) {
            state.tests = action.payload.tests;
            state.status = 'success';
        },
        fetchTestsFailed(state, action) {
            state.status = 'failed';
            state.error = action.payload.error;
        },
    },
});

// Actions
export const testsAction = testsSlice.actions;

// Selectors

// Reducer
const testsReducer = testsSlice.reducer;
export default testsReducer;
