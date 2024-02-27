import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { Dropdown } from 'react-native-element-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonGroup from '../components/ButtonGroup';
import myStyles from '../style/styleSheet';


export default function CategoryScreen({ navigation }){
    const firstDrop = [
        { label: '12:00', value: '12' },
        { label: '11:00', value: '11' },
        { label: '10:00', value: '10' },
        { label: '9:00', value: '9' },
        { label: '8:00', value: '8' },
        { label: '7:00', value: '7' },
        { label: '6:00', value: '6' },
        { label: '5:00', value: '5' },
        { label: '4:00', value: '4' },
        { label: '3:00', value: '3' },
        { label: '2:00', value: '2' },
        { label: '1:00', value: '1' },
    ];

    const secondDrop = [
        { label: 'p.m.', value: 'pm' },
        { label: 'a.m.', value: 'am' },
    ];
    const [timeValue, setTimeValue] = useState('9');
    const [value, setValue] = useState('a.m.');
    const categoryList = ['Cafe', 'Restaurant', 'Pub', 'Snack', 'Whatever'];
    
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
                    <Text style={{paddingHorizontal: 8}}>Until what time do you want to stay?</Text>
                    <View style={myStyles.inputBox}>
                        <View>
                            <Dropdown
                                style={myStyles.timeDropdown}
                                placeholderStyle={{color: '#ffffff'}}
                                activeColor='#5b5b5b'
                                selectedTextStyle={{color: '#ffffff'}}
                                containerStyle={{ backgroundColor: '#000000'}}
                                itemTextStyle={{ color: '#ffffff'}}
                                data={firstDrop}
                                value={timeValue}
                                placeholder='9:00'
                                labelField="label"
                                valueField="value"
                                onChange={item => {
                                    setTimeValue(item.value);
                                }} 
                            />
                        </View>
                        <View>
                            <Dropdown
                                style={myStyles.dropdown}
                                placeholderStyle={{color: '#ffffff'}}
                                activeColor='#5b5b5b'
                                selectedTextStyle={{color: '#ffffff'}}
                                containerStyle={{ backgroundColor: '#000000'}}
                                itemTextStyle={{ color: '#ffffff'}}
                                data={secondDrop}
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
                        buttonList={categoryList} 
                        navigationRefer={navigation}
                        isCategory={true}
                    />
                </View>
            </View>
        </ScrollView >

    )
}