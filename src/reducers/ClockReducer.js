import {
    CLOCK_IN,
    CLOCK_OUT
} from '../actions/types';

const INITIAL_STATE = {
    isClockedIn: false
};

export default (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CLOCK_IN:
            return { ...state, isClockedIn: true }
        case CLOCK_OUT:
            return { ...state, isClockedIn: false }
        default:
            return state;
    }
}
