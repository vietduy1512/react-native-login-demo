import React, { Component } from 'react';
import { 
    StyleSheet, 
    Image,
    Text,
    KeyboardAvoidingView,
    View
} from 'react-native';

export default class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>1512068 - Lê Viết Duy</Text>
                <Text style={styles.title}>1512012 - Trần Thiên An</Text>
                <Text style={styles.title}>1512004 - Lê Việt Anh</Text>
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40ff00',
    },
    title: {
        color: '#4000ff',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 30,
        textShadowColor: '#aaa',
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 15
    },
})