import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.buttonContainerStyle}>
                        <Image
                            style={styles.buttonContainerStyle}
                            source={require('../images/B4SLogo.png')}
                            size={{ width: 400, height: 200 }}
                        />
                    </View>
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='email@email.com'
                        autoCorrect={false}
                        autoCapitalize={"none"}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='password'
                        secureTextEntry={true}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }

}

const styles = {
    buttonContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 100
    },
    imageStyle: {
        aspectRatio: 1
    }
};

export default LoginForm;
