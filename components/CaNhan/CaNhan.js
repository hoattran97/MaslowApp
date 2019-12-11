import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class CaNhan extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     let tabBarLabel = 'Cá nhân';
    //     let tabBarIcon = () => (
    //         <Image
    //             source={require('../../icon/user1.png')}
    //             style={{ width: 20, height: 20, tintColor: 'gray' }}
    //         />
    //     );
    //     return { tabBarLabel, tabBarIcon };
    // }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'goldenrod', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>This is a CaNhan Screen</Text>
            </View>
        )
    }
}