import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { DID_CLOCK } from './types';

export const clockedIn = () => {
    return {
        type: DID_CLOCK,
        payload: true
    }
}

export const clockedOut = () => {
    return {
        type: DID_CLOCK,
        payload: false
    }
}
