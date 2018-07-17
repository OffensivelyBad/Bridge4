import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class HomeView extends Component {

    onClockButtonPressed() {
        Actions.qrScanView();
    }

    getButtonTitle() {
        var buttonTitle = 'Clock In';
        if (this.props.clockedIn) {
            buttonTitle = 'Clock Out';
        }
        return buttonTitle;
    }

    render() {
        const { buttonContainerStyle, welcomeTextStyle, containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <Card>
                    <CardSection>
                        <View style={buttonContainerStyle}>
                            <Text style={welcomeTextStyle}>Hello, Donald!</Text>
                            <Image
                                source={require('../images/CircleLogo.png')}
                                size={{ width: 200, height: 200 }}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                            <Button onPress={this.onClockButtonPressed.bind(this)}>
                                {this.getButtonTitle()}
                            </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    buttonContainerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    welcomeTextStyle: {
        fontSize: 25
    },
    containerStyle: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    }
};

const mapStateToProps = state => {
    const { clockedIn } = state.user;
    return { clockedIn };
}

export default connect(mapStateToProps)(HomeView);
