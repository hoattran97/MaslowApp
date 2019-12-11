import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppContainer from './components/AppContainer'
import Main from './components/Main'
//const Container = createAppContainer(AppContainer);

export default class App extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#4069E5' barStyle="light-content" />
                <AppContainer />
            </View>
        );
    }
}

