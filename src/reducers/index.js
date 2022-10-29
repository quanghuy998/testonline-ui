import { combineReducers } from '@reduxjs/toolkit';

import testsReducer from './testsSlice';

const rootReducer = combineReducers({
    tests: testsReducer,
});

export default rootReducer;
