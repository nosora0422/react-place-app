import { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { Dropdown } from 'react-native-element-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonGroup from '../components/ButtonGroup';


export default function LocationScreen({ navigation }){
    const data = [
        { label: 'p.m.', value: 'pm' },
        { label: 'a.m.', value: 'am' },
    ]
    const [value, setValue] = useState('pm');
    const locationList = ['Vancouver', 'Burnaby', 'Richmond', 'Coquitlam'];

    return (
        <ScrollView style={myStyles.backgroundContainer}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={myStyles.background}
            />
            <View style={myStyles.container}>
                <View style={{flexDirection:'row'}}>
                    <Text h1>Hello </Text>
                    <Text h2>Sora</Text>
                    <Text h1>,</Text>
                </View>
                <Text h3>Looking for a place for tonight?</Text>
                <View style={myStyles.timeInfo}>
                    <Text style={{paddingHorizontal: 8}}>Until what time you want to stay?</Text>
                    <View style={myStyles.inputBox}>
                        <View>
                            <TextInput 
                                placeholder="10"
                                keyboardType="numeric"
                                style={myStyles.input}placeholderTextColor="#999999"
                                maxLength={2}
                            />
                        </View>
                        <View>
                            <Dropdown
                                style={myStyles.dropdown}
                                placeholderStyle={{color: '#ffffff'}}
                                selectedTextStyle={{color: '#ffffff'}}
                                data={data}
                                value={value}
                                placeholder='a.m.'
                                labelField="label"
                                valueField="value"
                                onChange={item => {
                                    setValue(item.value);
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <ButtonGroup 
                        buttonList={locationList} 
                        navigationRefer={navigation}
                        isCategory={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const myStyles = StyleSheet.create({
    backgroundContainer:{
        height: '100%',
        backgroundColor:'#2F2F2F',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    container:{
        marginHorizontal: 24,
        paddingBottom:100,
    },
    dropdown: {
        height:40,
        marginVertical:4,
        width: 100,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    timeInfo:{
        marginVertical: 22,
        padding: 8,
        borderRadius:12,
        borderColor: '#404040',
        borderWidth: 1,
    },
    inputBox:{
        marginTop: 8,
        borderRadius: 8,
        backgroundColor:'#000000',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    input:{
        padding: 8,
        color: '#ffffff',
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      }
})