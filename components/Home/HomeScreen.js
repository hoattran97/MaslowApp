import React, { Component } from 'react';
import {
    Text, View,
    Image,
    StyleSheet,
    StatusBar,
    ScrollView,
    Dimensions,
    Picker,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import TraCuu from '../TraCuu';
import ChiTiet from '../ChiTiet/ChiTiet';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            month: ''
        }
    }
    render() {
        // const { navigation } = this.props;
        let screenWidth = Dimensions.get('window').width;

        return (
            <View style={{
                backgroundColor: '#E5E5E5',

            }}>
                <ScrollView
                >
                    <StatusBar backgroundColor='#4069E5' barStyle="light-content" />

                    <View style={styles.duoi}>

                        <View style={styles.phan2}>
                            <Text style={styles.textP2}>KỲ thanh toán hiện tại</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase', color: '#535352' }}>(triệu đồng)</Text>
                        </View>

                        <View style={styles.phan3}>
                            <Text style={styles.textP2}>Lượt tương tác</Text>
                        </View>

                        <View style={styles.phan4}>
                            <TouchableOpacity>
                                <View style={styles.phan41}>
                                    <ImageBackground source={require('../../assets/assets/images/total_money_bg.png')} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                                        <Text style={{ paddingTop: 12, fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' }}>2.500.000.000đ </Text>
                                        <Text style={{ paddingTop: 4, fontSize: 12, fontWeight: '500', color: '#FFFFFF' }}>Tổng tiền giao dịch</Text>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.phan42}>
                                <ImageBackground source={require('../../assets/assets/images/total_like_bg.png')} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                                    <Text style={{ paddingTop: 12, fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' }}>18.390 người </Text>
                                    <Text style={{ paddingTop: 4, fontSize: 12, fontWeight: '500', color: '#FFFFFF' }}>Lượt người xem</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.phan43}>
                                <ImageBackground source={require('../../assets/assets/images/total_view_bg.png')} style={{ width: '100%', height: '100%' }}>
                                    <Text style={{ marginLeft: 7.67, paddingTop: 12, fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' }}>1411 </Text>
                                    <Text style={{ marginLeft: 7.67, paddingTop: 4, fontSize: 12, fontWeight: '500', color: '#FFFFFF' }}>Số lượt ưa thích</Text>
                                </ImageBackground>
                            </View>
                        </View>

                        <View style={styles.phan5}>
                            <View style={styles.phan5KyTT}>
                                <Picker
                                    selectedValue={this.state.year}
                                    style={{ color: '#4069E5' }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ year: itemValue })
                                    }
                                >
                                    <Picker.Item label="Kỳ thanh toán tháng 8" value="2016" />
                                    <Picker.Item label="Kỳ thanh toán tháng 9" value="2017" />
                                    <Picker.Item label="Kỳ thanh toán tháng 10" value="2018" />
                                    <Picker.Item label="Kỳ thanh toán tháng 11" value="2019" />
                                    <Picker.Item label="Kỳ thanh toán tháng 12" value="2019" />
                                </Picker>
                            </View>
                            <View style={styles.phan5TextTien}>
                                <View style={{ textAlign: 'center', justifyContent: 'center', paddingLeft: 50 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize', color: '#535352', textAlign: 'center' }}>Tổng doanh thu</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 27, color: '#F2BC00', textAlign: 'center' }}>+250.000.000đ</Text>
                                </View>
                                <View style={{ justifyContent: 'center', textAlign: 'center', paddingLeft: 70 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize', color: '#535352', textAlign: 'center' }}>Tiền cashback</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 27, color: '#BA0000', textAlign: 'center' }}>-25.000.000đ</Text>
                                </View>
                            </View>
                            {/* <View
                                style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
                                onPress={() => {
                                    this.props.navigation.navigate('ChiTiet')
                                }}
                            >
                                <View><Text style={{
                                    fontSize: 14,
                                    textAlign: 'center',
                                    //lineHeight: 21,
                                    color: '#535352',
                                    paddingTop: 18.08
                                }}>Chi tiết</Text></View>
                                <View style={{ marginTop: 21.08 }}><Image
                                    source={require('../../icon/arrow-right-icon.png')}
                                    style={{ width: 14, height: 14, tintColor: '#535352' }}
                                /></View>
                            </View> */}
                            <Button
                                containerStyle={{ width: 342, height: 48, justifyContent: 'center' }}
                                style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#535352' }}
                                // styleDisabled={{ color: 'red' }}
                                onPress={() => {
                                    this.props.navigation.navigate('ChiTiet')
                                }}
                            >
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View><Text style={{
                                        fontSize: 14,
                                        // textAlign: 'center',
                                        //lineHeight: 21,
                                        color: '#535352',
                                        paddingTop: 18.08
                                    }}>Chi tiết</Text></View>
                                    <View style={{ paddingTop: 21.08 }}>
                                        <Image
                                            source={require('../../icon/arrow-right-icon.png')}
                                            style={{ width: 14, height: 14, tintColor: '#535352' }}
                                        /></View>
                                </View>
                            </Button>
                        </View>

                        <View style={styles.phan6}>
                            <Text style={styles.text1}>Chọn kỳ thanh toán mà bạn muốn xem</Text>
                            <View style={styles.picker}>
                                <View style={styles.picker1}>
                                    <Picker
                                        selectedValue={this.state.year}
                                        style={{ color: '#979CA0' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ year: itemValue })
                                        }
                                    >
                                        <Picker.Item label="2016" value="2016" />
                                        <Picker.Item label="2017" value="2017" />
                                        <Picker.Item label="2018" value="2018" />
                                        <Picker.Item label="2019" value="2019" />
                                    </Picker>
                                </View>
                                <View style={styles.picker2}>
                                    <Picker
                                        selectedValue={this.state.month}
                                        style={{ color: '#979CA0' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ month: itemValue })
                                        }
                                    >
                                        <Picker.Item label="Tháng 1" value="Tháng 1" />
                                        <Picker.Item label="Tháng 2" value="Tháng 2" />
                                        <Picker.Item label="Tháng 3" value="Tháng 3" />
                                        <Picker.Item label="Tháng 4" value="Tháng 4" />
                                        <Picker.Item label="Tháng 5" value="Tháng 5" />
                                        <Picker.Item label="Tháng 6" value="Tháng 6" />
                                        <Picker.Item label="Tháng 7" value="Tháng 7" />
                                        <Picker.Item label="Tháng 8" value="Tháng 8" />
                                        <Picker.Item label="Tháng 9" value="Tháng 9" />
                                        <Picker.Item label="Tháng 10" value="Tháng 10" />
                                        <Picker.Item label="Tháng 11" value="Tháng 11" />
                                        <Picker.Item label="Tháng 12" value="Tháng 12" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.button}>
                                <Button
                                    containerStyle={{ width: 342, height: 48, borderRadius: 8, borderRadius: 10, backgroundColor: '#4069E5', justifyContent: 'center' }}
                                    style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                                    // styleDisabled={{ color: 'red' }}
                                    onPress={() => {
                                        //this.props.navigate(DetailScreen)
                                        this.props.navigation.navigate('TraCuu')
                                    }}
                                >
                                    Tra cứu
                                </Button>
                            </View>
                        </View>

                    </View>
                </ScrollView>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    duoi: {
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',

    },
    phan2: {
        // position: 'absolute',
        //width: 359,
        height: 244,
        margin: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 8
    },
    textP2: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',

        textAlign: 'center',
        textTransform: 'uppercase',

        color: '#535352',

    },
    phan3: {
        height: 202,
        margin: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 8
    },
    phan4: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 16,
        marginLeft: 20
    },
    phan41: {
        width: 116.33,
        height: 97.72,
        //marginLeft: 20,
        backgroundColor: '#26A69A',
        borderRadius: 3,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        alignItems: 'center'
    },
    phan42: {
        width: 116.33,
        height: 97.72,
        marginLeft: 4.6,
        backgroundColor: '#EC407A',
        borderRadius: 3,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        alignItems: 'center'
    },
    phan43: {
        width: 116.33,
        height: 97.72,
        marginLeft: 4.6,
        backgroundColor: '#29B6F6',
        borderRadius: 3,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        alignItems: 'center'
    },
    phan5: {
        height: 153,
        margin: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: 28
    },
    phan5KyTT: {
        height: 24,
        justifyContent: 'center',
        marginLeft: 7,
        marginTop: 16,
        backgroundColor: '#FFFFFF',

    },
    phan5TextTien: {
        flexDirection: 'row',
        //paddingLeft: 13,
        paddingTop: 12.33,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    phan6: {
        height: 146,
        margin: 7,
        backgroundColor: '#FFFFFF',
        borderRadius: 8
    },
    text1: {
        marginLeft: 16,
        marginTop: 12,
        color: '#535352',
        fontSize: 14,
        fontWeight: '500'
    },
    picker: {
        flexDirection: 'row'
    },
    picker1: {
        height: 33,
        width: 160,
        justifyContent: 'center',
        marginLeft: 28,
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        //color: '#979CA0'
    },
    picker2: {
        height: 33,
        width: 160,
        justifyContent: 'center',
        marginLeft: 23,
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        //color: '#979CA0'
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});