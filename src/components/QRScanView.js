import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { clockedIn, clockedOut } from '../actions';

class QRScanView extends Component {
    onQRRead() {
        if(this.props.isClockedIn) {
            this.props.clockedOut();
        }
        else {
            this.props.clockedIn();
        }
    }

    render() {
        return (
            <View>
                <QRCodeScanner onRead={this.onQRRead.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        isClockedIn: state.clock.isClockedIn
    };
};

export default connect(mapStateToProps, { clockedIn, clockedOut })(QRScanView);
