import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
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
            .catch(() => createUser({dispatch, email, password}));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER });

        firebase.auth().signOut()
            .then(logoutUserSuccess());
    }
}

const createUser = ({ dispatch, email, password }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => createUserDBEntry(dispatch, user))
        .catch(() => loginUserFail(dispatch));
}

const createUserDBEntry = (dispatch, user) => {
    const { currentUser } = firebase.auth();
    const name = 'Shawn';
    const phone = '666-6666';
    const shift = '';
    const userID = currentUser.uid;

    console.log(`creating db entry: ${name}, ${phone}, ${shift}, ${userID}`);

    firebase.database().ref('/users/')
        .push({ userID, name, phone, shift })
        .then(() => {
            dispatch(() => loginUserSuccess(dispatch, user));
        });
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const logoutUserSuccess = () => {
    Actions.popTo("loginForm");
}
