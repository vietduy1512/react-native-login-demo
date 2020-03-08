import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './Login'
import Main from './Main'
import About from './About'

export const MainStack = StackNavigator({
    LoginScreen: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    MainScreen: {
        screen: Main,
        navigationOptions: {
            title: 'Main'
        }
    },
})

export const AboutStack = StackNavigator({
    AboutScreen: {
        screen: About,
        navigationOptions: {
            title: 'About'
        }
    },
})
export const Tabbar = TabNavigator({
    Main: {
        screen: MainStack,
        navigationOptions: {
            tabBarLabel: 'Trang chính'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'Về nhóm'
        }
    },
},
{
    tabBarOptions: {
       labelStyle: {
            fontSize: 14,
       },
        activeTintColor: 'blue'
    },
    swipeEnabled: true,
})