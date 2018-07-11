import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    CLOCK_IN, 
    CLOCK_OUT
} from './types';

export const clockedIn = ({ user, timestamp }) => {
    return {
        type: CLOCK_IN,
        payload: { user, timestamp }
    }
}

export const clockedOut = ({ user, timestamp }) => {
    return {
        type: CLOCK_OUT,
        payload: { user, timestamp }
    }
}
