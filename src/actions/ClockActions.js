import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    CLOCK_IN, 
    CLOCK_OUT
} from './types';

export const clockedIn = ({ user, timestamp }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .update({ clockedIn: true })
            .then(() => {
                dispatch({
                    type: CLOCK_IN,
                    payload: { user, timestamp }
                });
            });
    }
}

export const clockedOut = ({ user, timestamp }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .update({ clockedIn: false })
            .then(() => {
                dispatch({
                    type: CLOCK_OUT,
                    payload: { user, timestamp }
                });
            });
    }
}
