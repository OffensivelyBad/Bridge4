import {
    DID_CLOCK
} from '../actions/types';

const INITIAL_STATE = {
    isClockedIn: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action)

    switch (action.type) {
        case DID_CLOCK:
            return { ...state, isClockedIn: action.payload }
        default:
            return state;
    }
}
