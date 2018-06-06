import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import QRCodeScanner from 'react-native-qrcode-scanner';
import firebaseconfig from './config/firebaseconfig';
// import reducers from './reducers';
import LoginForm from './components/LoginForm'



class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: firebaseconfig.apiKey,
            authDomain: firebaseconfig.authDomain,
            databaseURL: firebaseconfig.databaseURL,
            projectId: firebaseconfig.projectId,
            storageBucket: firebaseconfig.storageBucket,
            messagingSenderId: firebaseconfig.messagingSenderId
        });
    }

    render() {
        return (
            <LoginForm />
        );
    }
}

export default App;
