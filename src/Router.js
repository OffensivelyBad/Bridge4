import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeView from './components/HomeView';
import QRScanView from './components/QRScanView';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="loginForm" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main" initial>
                    <Scene 
                        key="homeView"
                        component={HomeView}
                        title="Home"
                        initial
                    />
                    <Scene
                        key="qrScanView"
                        component={QRScanView}
                        title="Scan QR Code"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
