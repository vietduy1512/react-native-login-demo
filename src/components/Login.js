import React, { Component } from 'react';
import { 
    StyleSheet, 
    Image,
    Text,
    KeyboardAvoidingView,
    View
} from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.background}>
                    <Image style={styles.backgroundImage}
                    source={require('../images/login-form-background.jpg')}/>
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>Demo React Native</Text>
                    <Image style={styles.logo} 
                        source={require('../images/logo-khtn.png')} />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </KeyboardAvoidingView>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .8
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 128,
        height: 100,
    },
    title: {
        color: 'white',
        marginBottom: 30,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 15
    },
})