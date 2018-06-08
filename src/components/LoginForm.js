import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            );
        }
    }

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
                        onChangeText={value => this.props.emailChanged(value) }
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='password'
                        secureTextEntry={true}
                        onChangeText={value => this.props.passwordChanged(value) }
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

}

const styles = {
    buttonContainerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})(LoginForm);
