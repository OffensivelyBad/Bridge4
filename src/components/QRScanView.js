import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { clockedIn, clockedOut } from '../actions';
import { Button } from './common';

const testing = false;

class QRScanView extends Component {

    onQRRead(timestamp) {
        console.log(timestamp);
        if(this.props.isClockedIn) {
            this.props.clockedOut({ user: this.props.user, timestamp: timestamp });
        }
        else {
            this.props.clockedIn({ user: this.props.user, timestamp: timestamp });
        }
    }

    renderTestButton() {
        if(testing) {
            return (
                <Button onPress={() => this.onQRRead('2018-06-08 12:35:23:0000')}>testing123</Button>
            );
        }
    }

    render() {
        return (
            <View>
                <QRCodeScanner onRead={this.onQRRead.bind(this)}/>
                {this.renderTestButton()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        isClockedIn: state.clock.isClockedIn,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, { clockedIn, clockedOut })(QRScanView);
