import React, { Component } from 'react';
import { View, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class App extends Component {
    render() {
        return (
            <QRCodeScanner/>
        );
    }
}

export default App;
