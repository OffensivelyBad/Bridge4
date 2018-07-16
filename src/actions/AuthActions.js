import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    USER_FETCH_SUCCESS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER });

        firebase.auth().signOut()
            .then(logoutUserSuccess());
    }
}

const getUserDetails = (dispatch) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .once('value', snapshot => {
                dispatch({ 
                    type: USER_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    }
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    getUserDetails(dispatch);
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const logoutUserSuccess = () => {
    Actions.popTo("loginForm");
}
