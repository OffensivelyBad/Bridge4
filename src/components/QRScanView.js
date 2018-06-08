import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { clockedIn, clockedOut } from '../actions';
import { Button } from './common';

class QRScanView extends Component {
    onQRRead(timestamp) {
        if(this.props.isClockedIn) {
            this.props.clockedOut({ user: this.props.user, timestamp: timestamp });
        }
        else {
            this.props.clockedIn({ user: this.props.user, timestamp: timestamp });
        }
    }

    renderText(timestamp) {
        var isClocked = '';
        if(this.props.isClockedIn) {
             isClocked = 'YES!@#@#$#';
        }
        else {
            isClocked = 'NO@#$#@$#$';
        }
        return (
            <View>
                <Text style={{ color: 'white' }}>timestamp</Text>
                <Text style={{ color: 'white' }}>isClocked</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
            <QRCodeScanner 
                onRead={this.onQRRead.bind(this)}
                bottomContent={
                    <Text style={{ color: 'white' }}>
                        Go to wikipedia.org/wiki/QR_code on your computer and scan the QR code.
                    </Text>
                    }
            />
            <Button onPress={this.onQRRead.bind('test123')}>testing123</Button>
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
