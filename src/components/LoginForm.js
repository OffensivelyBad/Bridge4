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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default LoginForm;
