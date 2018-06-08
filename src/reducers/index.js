import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ClockReducer from './ClockReducer';

export default combineReducers({
    auth: AuthReducer,
    clock: ClockReducer
});
