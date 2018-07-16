import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ClockReducer from './ClockReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    auth: AuthReducer,
    clock: ClockReducer,
    user: UserReducer
});
