import React, { Component } from 'react';
import { 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AlertIOS,
    Text,
    View
} from 'react-native';


export default class LoginForm extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.field}
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    placeholder="Nhập tên bất kỳ"
                    returnKeyType="done"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    />
                    {/*
                <TextInput  
                    secureTextEntry={true} 
                    style={styles.field}
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    placeholder="Nhập mật khẩu bất kỳ"
                    returnKeyType="done"
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    />
                    */}

                <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }

    constructor(props) {
        super(props);
        this.state = {username: ''};
    }

    login = () => {
        
        if (this.state.username == '') {
            alert('Lỗi', 'Bạn chưa nhập tên người dùng',);
        } else {
            AlertIOS.alert('Xin chào ' + this.state.username, 
            'Nhấn <Tiếp> để vào chương trình.',
            [
                { text:'Tiếp', onPress: () => { this.props.navigation.navigate('MainScreen', {username: this.state.username}) }},
                { text:'Cancel' }
            ]);
        }
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 40,
        alignItems: 'center'
    },
    field: {
        height: 40,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        paddingHorizontal: 20,
        borderWidth: 0.8,
        borderColor: 'rgba(0,0,0,0.4)'
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderWidth: 0.8,
        borderColor: 'rgba(0,0,0,0.4)',
        width: '40%',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'center'
    }
})