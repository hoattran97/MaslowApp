import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Splash extends Component {
    // Ẩn header
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        //this.props.navigation.navigate("HomeScreen");
        setTimeout(() => {
            this.props.navigation.navigate("HomeScreen")
        }, 1500);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/assets/images/splash.png')}
                    style={{ width: 300, height: 300 }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Splash;