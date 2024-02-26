import { Button, FlatList, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Icon } from '@rneui/themed';


import { getPlaceData } from '../data/itemData';
import PlaceListItem from '../components/PlaceListItem';

export default function CategoryListScreen({ navigation, route }){
    const { area, category } = route.params;
    const placeData = getPlaceData();
    let filteredObjects;

    if (area) {
        filteredObjects = placeData.filter(item => item.area === area);
    } else if (category) {
        filteredObjects = placeData.filter(item => item.category === category);
    }

    const renderListItem = ({ item }) => (
        <PlaceListItem 
            itemData={item}
            navigationRefer={navigation}
        />
    )

    return (
        <View style={myStyles.backgroundContainer}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={myStyles.background}
            />
            <View style={myStyles.container}>
                <Text h3>Place close after 10 p.m.</Text>
                <View style={myStyles.location}>
                    <Text h1>{area || category}</Text>
                    <Icon
                        name='arrow-down-left'
                        type='feather'
                        size={48}
                        containerStyle={{
                            backgroundColor:'#A6FF96', 
                            borderRadius:30,
                            marginLeft:20,
                        }}
                    />
                </View>
                <FlatList 
                    data={filteredObjects}
                    renderItem={renderListItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
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
    location:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});