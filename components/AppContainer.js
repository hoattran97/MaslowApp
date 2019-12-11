import React, { Component } from 'react';
import {
    Icon, View, Text, Image
} from 'react-native'
import Splash from './Splash';
import HomeScreen from './Home/HomeScreen';
import TraCuu from './TraCuu';
import Main from './Main'
//import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ChiTiet from './ChiTiet/ChiTiet';
import DanhSach from './DanhSach/DanhSach';
import CaNhan from './CaNhan/CaNhan';
import { createAppContainer } from 'react-navigation';

// const NavigatorStack = createStackNavigator({
//     //Screens
//     Splash,
//     HomeScreen
//     // }, {
//     //     //settings
//     //     initialRouteName: 'Splash'
// });
const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'a01041234 - Kinh KỲ QUÁN...',
            headerStyle: {
                backgroundColor: '#4069E5',
            },
            headerTitleStyle: {
                textTransform: "uppercase",
                color: '#FFFFFF',
                fontWeight: '̀500',
                left: 45,
                fontStyle: 'normal',

            },
        },

    },
    TraCuu: {
        screen: TraCuu,
        navigationOptions: {
            headerTitle: 'lịch sử giao dịch',
            headerTitleStyle: {
                textTransform: "uppercase",
                color: '#FFFFFF',
                fontWeight: 'bold',
                left: 45
            },
            headerStyle: {
                backgroundColor: '#4069E5',

            }
        },
    },
    // ChiTiet: {
    //     screen: ChiTiet,
    //     navigationOptions: {
    //         headerTitle: '',
    //         // headerTitleStyle: {
    //         //     //color: '#FFFFFF'
    //         // },
    //         // headerStyle: {
    //         //     backgroundColor: 'rgba(0,0,0,0.3',

    //         // }
    //     }
    // }
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Trang chủ',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../icon/home.png')}
            style={{ width: 24, height: 24, tintColor: 'gray' }}
        />
        // <Icon name='' style={{ color: tintColor }} />
    )
}

const ChiTietStack = createStackNavigator({
    ChiTiet: {
        screen: ChiTiet,
        navigationOptions: {
            //ẩn header
            headerShown: false

        }
    }
});
ChiTietStack.navigationOptions = {
    tabBarLabel: 'Chi tiết',
    tabBarIcon: () => (
        <Image
            source={require('../icon/compose.png')}
            style={{ width: 24, height: 24, tintColor: 'gray' }}
        />
    )
}

const DanhSachStack = createStackNavigator({
    DanhSach: {
        screen: DanhSach,
        navigationOptions: ({ navigation }) => ({
            title: 'Danh sách',
        }),
    }
});
DanhSachStack.navigationOptions = {
    tabBarLabel: 'Danh sách',
    tabBarIcon: () => (
        <Image
            source={require('../icon/notification.png')}
            style={{ width: 24, height: 24, tintColor: 'gray' }}
        />
    )
}

const CaNhanStack = createStackNavigator({
    CaNhan: {
        screen: CaNhan,
        navigationOptions: ({ navigation }) => ({
            title: 'Cá nhân',
        }),
    }
});
CaNhanStack.navigationOptions = {
    tabBarLabel: 'Cá nhân',
    tabBarIcon: () => (
        <Image
            source={require('../assets/assets/images/merchant_tab_icon.png')}
            style={{ width: 24, height: 24, tintColor: 'gray' }}
        />

    ),

}


const Container = createBottomTabNavigator({
    HomeStack: { screen: HomeStack },
    ChiTietStack,
    DanhSachStack,
    CaNhanStack,
}, {
    tabBarOptions: {
        activeBackgroundColor: 'lightblue',
        showLabel: false,
        // activeTintColor: '#4069E5',
        // inactiveTintColor: 'tomato',
        style: {
            backgroundColor: '#FFFFFF',
            height: 65
        },

    }
    //order: [ChiTietStack, HomeStack, DanhSachStack, CaNhanStack]
    // tabBarPosition: 'bottom',
    //swipeEnabled: true,
    // animationEnabled: true
});

// const Container = createMaterialTopTabNavigator({
//     HomeStack,
//     ChiTietStack,
//     DanhSachStack,
//     CaNhanStack
// }, {

//     tabBarPosition: 'bottom',
//     animationEnabled: true,
//     swipeEnabled: true,
//     tabBarOptions: {
//         activeTintColor: '#4069E5',
//         inactiveTintColor: 'gray'
//     }
// })

const AppContainer = createAppContainer(Container);
export default AppContainer;