import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeView from './components/HomeView';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="loginForm" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        key="homeView"
                        component={HomeView}
                        title="Home"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
