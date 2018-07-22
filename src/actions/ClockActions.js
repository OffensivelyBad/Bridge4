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
        var ref = firebase.database().ref(`/users/${currentUser.uid}`);
            ref.update({ clockedIn: true })
            .then(() => {
                var clockRef = ref.child('clocks');
                clockRef.update({ lastClockIn: timestamp })
                .then(() => {
                    clockIn(dispatch);
                });
            });
    }
}

export const clockedOut = ({ user, timestamp }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        var ref = firebase.database().ref(`/users/${currentUser.uid}`);
            ref.update({ clockedIn: false })
            .then(() => {
                var clockRef = ref.child('clocks');
                clockRef.update({ lastClockOut: timestamp })
                .then(() => {
                    clockOut(dispatch, user, timestamp);
                });
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
