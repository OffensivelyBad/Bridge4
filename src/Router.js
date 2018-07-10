import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logoutUser } from './actions';
import LoginForm from './components/LoginForm';
import HomeView from './components/HomeView';
import QRScanView from './components/QRScanView';

class RouterComponent extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="loginForm" component={LoginForm} title="Please Login" initial hideNavBar />
                    </Scene>
                    <Scene key="main">
                        <Scene 
                            back
                            backTitle="Log out"
                            onBack={this.props.logoutUser.bind(this)}
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
    }
};

export default connect(null, { logoutUser })(RouterComponent);
