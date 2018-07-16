import {
    USER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    userDetails: {}
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    console.log(state);

    switch(action.type) {
        case USER_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
