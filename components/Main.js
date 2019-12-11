import Splash from './Splash';
import HomeScreen from './Home/HomeScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import { createBottomTabNavigator } from 'react-navigation-tabs';


// import ChiTiet from './ChiTiet/ChiTiet';
// import DanhSach from './DanhSach/DanhSach';
// import CaNhan from './CaNhan/CaNhan';

const Stack = createStackNavigator({
    //Screens
    Splash: {
        screen: Splash
    },
    HomeScreen: {
        screen: HomeScreen
    }
}, {
    //settings
    initialRouteName: 'Splash'
});

// const ChiTietStack = createStackNavigator({
//     ChiTiet
// });
// const DanhSachStack = createStackNavigator({
//     DanhSach
// });
// const CaNhanStack = createStackNavigator({
//     CaNhan
// });

// const Main = createBottomTabNavigator({
//     'Home': NavigatorStack,
//     'Chi tiet': ChiTietStack,
//     'Danh sach': DanhSachStack,
//     'Ca nhan': CaNhanStack
// });

// export default AppNavigator;
const Main = createAppContainer(Stack);
export default Main;