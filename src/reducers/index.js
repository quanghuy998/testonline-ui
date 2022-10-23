import { combineReducers } from '@reduxjs/toolkit';

import TestsReducer from './tests';

const rootReducer = combineReducers({
    tests: TestsReducer,
});

export default rootReducer;
