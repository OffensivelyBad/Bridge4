import firebase from 'firebase';
import { USER_FETCH_SUCCESS } from './types';

export const getUserDetails = (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}`)
        .once('value', snapshot => {
            dispatch({ 
                type: USER_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        });
}
