import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    //ImageBackground,
    StyleSheet,
    ScrollView
} from 'react-native';
import Button from 'react-native-button';
import HomeScreen from '../Home/HomeScreen';

export default class ChiTiet extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView>
                    <StatusBar backgroundColor='#4069E5' barStyle="light-content" />

                    <View style={{ height: 294, backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <Image
                            source={require('../../assets/assets/images/bia_chitiet.png')}
                            style={{ height: 294, width: screenWidth }}
                        />
                        {/* <View>
                            <Image
                                source={require('../../icon/icon-back.png')}
                                style={{ width: 16, height: 13, tintColor: '#FFFFFF', marginLeft: 10, marginTop: 59 }}
                            />
                        </View> */}
                        {/* <View>
                            <Image
                                source={require('../../icon/icon-camera.png')}
                                style={{ width: 27, height: 25, tintColor: '#FFFFFF', marginLeft: 348, marginTop: 246 }}
                            />
                        </View> */}

                        {/* <Image
                        source={require('../../icon/icon-camera.png')}
                        style={{ width: 27, height: 25, tintColor: '#FFFFFF', marginLeft: 348, marginTop: 246 }}
                    /> */}
                    </View>



                    <View style={{
                        height: 1,
                        width: 343,
                        marginTop: 41,
                        backgroundColor: '#E0E1E3',
                        marginLeft: 30
                    }}>

                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{ marginTop: 42, width: 338, height: 34, borderRadius: 8, backgroundColor: '#4069E5', justifyContent: 'center' }}
                            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                //this.props.navigate(DetailScreen)
                                //this.props.navigation.navigate('TraCuu')
                            }}
                        >
                            Quản lí thông báo tạm dừng cashback
                                </Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{ marginTop: 14, width: 338, height: 34, borderRadius: 8, backgroundColor: '#4069E5', justifyContent: 'center' }}
                            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                //this.props.navigate(DetailScreen)
                                //this.props.navigation.navigate('TraCuu')
                            }}
                        >
                            Quản lí sản phẩm không áp dụng ưu đãi
                                </Button>
                    </View>
                    <View style={{
                        height: 1,
                        width: 343,
                        marginTop: 20,
                        backgroundColor: '#E0E1E3',
                        marginLeft: 30
                    }}>

                    </View>
                    <View>
                        <Text style={styles.textChiTiet}>liên hệ</Text>
                        <View>
                            <View style={{ flexDirection: 'row', marginLeft: 40, marginTop: 14 }}>
                                <View>
                                    <Image
                                        source={require('../../icon/phone-chitiet.png')}
                                        style={{ width: 9, height: 12, tintColor: '#535352' }}
                                    />
                                    <Image
                                        source={require('../../icon/traidat-chitiet.png')}
                                        style={{ marginTop: 7, width: 12, height: 12, tintColor: '#535352' }}
                                    />
                                </View>
                                <View style={{ marginLeft: 13 }}>
                                    <Text style={{ fontSize: 12, color: '#535352' }}>0167522001</Text>
                                    <Text style={{ fontSize: 12, color: '#535352' }}>https://www.kinhkyquan.com/</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <Button
                            containerStyle={{ marginTop: 16, width: 338, height: 34, borderWidth: 1, borderRadius: 5, borderColor: '#979CA0', justifyContent: 'center' }}
                            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                //this.props.navigate(DetailScreen)
                                //this.props.navigation.navigate('TraCuu')
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/compose.png')}
                                    style={{ tintColor: '#535352', width: 12, height: 12 }}
                                />
                                <Text style={{ marginLeft: 8, color: '#535352', fontSize: 12, textAlign: 'center' }}>Sửa</Text>
                            </View>
                        </Button>
                    </View>
                    <View>
                        <Text style={styles.textChiTiet}>Mô tả</Text>
                        <Text style={{ width: 323, height: 88, marginLeft: 40, marginTop: 12, lineHeight: 22, fontSize: 12, color: '#535352' }}>Totoro là đơn vị có hơn 16 năm hoạt động trong lĩnh vực ẩm thực với các sản phẩm ẩm thực nổi tiếng trên thế giới. Tự tin là một trong những cửa hàng đứng đầu đem lại sự phục vụ, dịch vụ uy tín với chất lượng cao nhất.</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{ marginTop: 16, width: 338, height: 34, borderWidth: 1, borderRadius: 5, borderColor: '#979CA0', justifyContent: 'center' }}
                            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                //this.props.navigate(DetailScreen)
                                //this.props.navigation.navigate('TraCuu')
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/compose.png')}
                                    style={{ tintColor: '#535352', width: 12, height: 12 }}
                                />
                                <Text style={{ marginLeft: 8, color: '#535352', fontSize: 12, textAlign: 'center' }}>Sửa</Text>
                            </View>
                        </Button>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.textChiTiet, { width: 150 }]}>Ảnh</Text>
                        <Button
                            containerStyle={{ width: 342, height: 48, justifyContent: 'center' }}
                            style={{ marginTop: 20, fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#535352' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                this.props.navigation.navigate('HomeScreen')
                            }}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <View><Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#4069E5',
                                    paddingTop: 18.08
                                }}>Xem thêm</Text></View>
                                <View style={{ paddingTop: 21.08 }}>
                                    <Image
                                        source={require('../../icon/arrow-right-icon.png')}
                                        style={{ width: 14, height: 14, tintColor: '#4069E5' }}
                                    /></View>
                            </View>
                        </Button>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 16 }}>
                        <Image
                            source={require('../../assets/assets/images/anh1-chitiet.png')}
                            style={{ width: 110, height: 110 }}
                        />
                        <Image
                            source={require('../../assets/assets/images/anh2-chitiet.png')}
                            style={{ width: 110, height: 110, marginLeft: 4 }}
                        />
                        <Image
                            source={require('../../assets/assets/images/anh3-chitiet.png')}
                            style={{ width: 110, height: 110, marginLeft: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 4 }}>
                        <Image
                            source={require('../../assets/assets/images/anh4-chitiet.png')}
                            style={{ width: 110, height: 110 }}
                        />
                        <Image
                            source={require('../../assets/assets/images/anh5-chitiet.png')}
                            style={{ width: 110, height: 110, marginLeft: 4 }}
                        />
                        <Image
                            source={require('../../assets/assets/images/anh6-chitiet.png')}
                            style={{ width: 110, height: 110, marginLeft: 4 }}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            containerStyle={{ marginTop: 12, width: 338, height: 34, borderWidth: 1, borderRadius: 5, borderColor: '#979CA0', justifyContent: 'center' }}
                            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                //this.props.navigate(DetailScreen)
                                //this.props.navigation.navigate('TraCuu')
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icon/compose.png')}
                                    style={{ tintColor: '#535352', width: 12, height: 12 }}
                                />
                                <Text style={{ marginLeft: 8, color: '#535352', fontSize: 12, textAlign: 'center' }}>Quản lý thư viện ảnh</Text>
                            </View>
                        </Button>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.textChiTiet, { width: 150 }]}>Bản đồ</Text>
                        <Button
                            containerStyle={{ width: 342, height: 48, justifyContent: 'center' }}
                            style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#535352' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                this.props.navigation.navigate('HomeScreen')
                            }}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <View><Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#4069E5',
                                    paddingTop: 18.08
                                }}>Xem thêm</Text></View>
                                <View style={{ paddingTop: 21.08 }}>
                                    <Image
                                        source={require('../../icon/arrow-right-icon.png')}
                                        style={{ width: 14, height: 14, tintColor: '#4069E5' }}
                                    /></View>
                            </View>
                        </Button>
                    </View>

                    <View style={styles.button}>
                        <Button
                            containerStyle={{ marginTop: 12, width: 338, height: 34, borderWidth: 1, borderRadius: 5, borderColor: '#979CA0', justifyContent: 'center' }}
                            style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                            // styleDisabled={{ color: 'red' }}
                            onPress={() => {
                                //this.props.navigate(DetailScreen)
                                //this.props.navigation.navigate('TraCuu')
                            }}
                        >

                            <Text style={{ marginLeft: 8, color: '#535352', fontSize: 12, textAlign: 'center' }}>Xem thêm 4 cửa hàng khác</Text>

                        </Button>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={styles.button}>
                            <Button
                                containerStyle={{ marginTop: 5, width: 162, height: 28, borderWidth: 1, borderRadius: 5, borderColor: '#979CA0', justifyContent: 'center' }}
                                style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                                // styleDisabled={{ color: 'red' }}
                                onPress={() => {
                                    //this.props.navigate(DetailScreen)
                                    //this.props.navigation.navigate('TraCuu')
                                }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../icon/add-chitiet.png')}
                                        style={{ tintColor: '#535352', width: 12, height: 12 }}
                                    />
                                    <Text style={{ marginLeft: 8, color: '#535352', fontSize: 12, textAlign: 'center' }}>Thêm địa chỉ</Text>
                                </View>
                            </Button>
                        </View>
                        <View style={styles.button}>
                            <Button
                                containerStyle={{ marginLeft: 15, marginTop: 5, width: 162, height: 28, borderWidth: 1, borderRadius: 5, borderColor: '#979CA0', justifyContent: 'center' }}
                                style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                                // styleDisabled={{ color: 'red' }}
                                onPress={() => {
                                    //this.props.navigate(DetailScreen)
                                    //this.props.navigation.navigate('TraCuu')
                                }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../icon/compose.png')}
                                        style={{ tintColor: '#535352', width: 12, height: 12 }}
                                    />
                                    <Text style={{ marginLeft: 8, color: '#535352', fontSize: 12, textAlign: 'center' }}>Sửa</Text>
                                </View>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginBottom: 10,

    },

    textChiTiet: {
        marginLeft: 30,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 14,
        color: '#535352',
        textTransform: 'uppercase',
        lineHeight: 18
    }
})