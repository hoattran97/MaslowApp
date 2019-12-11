import React, { Component } from 'react';
import {
    Text, View,
    StyleSheet,
    StatusBar,
    Picker,
    ScrollView
} from 'react-native';
import Button from 'react-native-button';

class TraCuu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: '',
            month: ''
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
                <StatusBar backgroundColor='#4069E5' barStyle="light-content" />
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
                </View>
                <Text style={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    lineHeight: 18,
                    marrginTop: 16,
                    marginLeft: 7,
                    color: '#535352'
                }}>Tính từ 25/10/2108 - 24/11/2018</Text>
                <ScrollView>
                    <View style={styles.phanDanhSach}>
                        <Text style={{ paddingLeft: 13, paddingTop: 18, paddingBottom: 8, fontWeight: 'bold', fontSize: 10, color: '#535352' }}>22/11/2018</Text>
                        <Text style={styles.textFLat}>Số tiền:</Text>
                        <Text style={styles.textFLat}>Mã Mid:</Text>
                        <Text style={styles.textFLat}>Số thẻ giao dịch:</Text>
                        <Text style={styles.textFLat}>Mã cấp phép giao dịch:</Text>
                    </View>
                    <View style={styles.phanDanhSach}>
                        <Text style={{ paddingLeft: 13, paddingTop: 18, paddingBottom: 8, fontWeight: 'bold', fontSize: 10, color: '#535352' }}>22/11/2018</Text>
                        <Text style={styles.textFLat}>Số tiền:</Text>
                        <Text style={styles.textFLat}>Mã Mid:</Text>
                        <Text style={styles.textFLat}>Số thẻ giao dịch:</Text>
                        <Text style={styles.textFLat}>Mã cấp phép giao dịch:</Text>
                    </View>
                    <View style={styles.phanDanhSach}>
                        <Text style={{ paddingLeft: 13, paddingTop: 18, paddingBottom: 8, fontWeight: 'bold', fontSize: 10, color: '#535352' }}>22/11/2018</Text>
                        <Text style={styles.textFLat}>Số tiền:</Text>
                        <Text style={styles.textFLat}>Mã Mid:</Text>
                        <Text style={styles.textFLat}>Số thẻ giao dịch:</Text>
                        <Text style={styles.textFLat}>Mã cấp phép giao dịch:</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    text1: {
        marginLeft: 16,
        marginTop: 16,
        color: '#535352',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 35,
    },
    picker: {
        flexDirection: 'row'
    },
    picker1: {
        height: 33,
        width: 160,
        justifyContent: 'center',
        marginLeft: 35,
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
    },
    phan5: {
        height: 119,
        marginTop: 16,
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
    phanDanhSach: {
        height: 167,
        marginLeft: 6,
        marginTop: 16,
        marginRight: 6,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderLeftWidth: 7,
        borderLeftColor: '#4069E5',
    },
    textFLat: {
        marginLeft: 13,
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 14,
        color: '#535352'
    }
})
export default TraCuu;