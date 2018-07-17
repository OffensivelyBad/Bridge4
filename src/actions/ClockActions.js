import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    CLOCK_IN, 
    CLOCK_OUT
} from './types';
import { getUserDetails } from './UserActions';

export const clockedIn = ({ user, timestamp }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .update({ clockedIn: true })
            .then(() => {
                clockIn(dispatch);
            });
    }
}

export const clockedOut = ({ user, timestamp }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .update({ clockedIn: false })
            .then(() => {
                clockOut(dispatch, user, timestamp);
            });
    }
}

const clockIn = (dispatch, user, timestamp) => {
    getUserDetails(dispatch);
    dispatch({
        type: CLOCK_IN,
        payload: { user, timestamp }
    });
    Actions.pop();
}

const clockOut = (dispatch, user, timestamp) => {
    getUserDetails(dispatch);
    dispatch({
        type: CLOCK_OUT,
        payload: { user, timestamp }
    });
    Actions.pop();
}
