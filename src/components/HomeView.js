import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class HomeView extends Component {

    onClockButtonPressed() {
        Actions.qrScanView();
    }

    render() {
        const { buttonContainerStyle, welcomeTextStyle, containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <Card>
                    <CardSection style={{ flexDirection: 'column' }}>
                        <View style={buttonContainerStyle}>
                            <Text style={welcomeTextStyle}>Hello, Donald!</Text>
                            <Image
                                source={require('../images/CircleLogo.png')}
                                size={{ width: 200, height: 200 }}
                            />
                        </View>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Button onPress={this.onClockButtonPressed.bind(this)}>
                            Clock In
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    buttonContainerStyle: {
        alignItems: 'center'
    },
    welcomeTextStyle: {
        fontSize: 25
    },
    containerStyle: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
    }
};

export default HomeView;
