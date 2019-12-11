import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class DanhSach extends Component {
    // static navigationOptions = ({ navigation }) => {

    //     let tabBarLabel = 'Danh sách';
    //     let tabBarIcon = () => (
    //         <Image
    //             source={require('../../icon/notification.png')}
    //             style={{ width: 20, height: 20, tintColor: 'gray' }}
    //         />
    //     );
    //     return { tabBarLabel, tabBarIcon };

    // }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>This is a CaNhan Screen</Text>
            </View>
        )
    }
}