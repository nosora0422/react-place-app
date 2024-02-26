import { ScrollView, View, Image, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Icon, Button } from '@rneui/themed';

import { getPlaceById } from '../data/itemData';


export default function DetailScreen({ route }){
    const { placeId } = route.params;
    const currentPlace = getPlaceById(placeId);

    const openGoogleMaps = () => {
        const address = encodeURIComponent(currentPlace.address);
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    };
        


    return(
        <ScrollView style={myStyles.backgroundContainer}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={myStyles.background}
            />
            <View style={myStyles.container}>
                <View>
                    <Text h3>Vancouver &#62; Restaurant</Text>
                    <Text h1>{currentPlace.name}</Text>
                </View>
                <Image 
                    source={currentPlace.img}
                    style={myStyles.img}
                />
                <View style={myStyles.detailList}>
                    <View style={myStyles.detailListItem}>
                        <Icon
                            name='map-marker-outline'
                            type='material-community'
                            size={24}
                            color='#A6FF96'
                            containerStyle={{
                                marginRight: 8,
                            }}
                        />
                        <Text>{currentPlace.address}</Text>
                    </View>
                    <View style={myStyles.detailListItem}>
                        <Icon
                            name='clock-time-four-outline'
                            type='material-community'
                            size={24}
                            color='#A6FF96'
                            containerStyle={{
                                marginRight: 8,
                            }}
                        />
                        <Text>
                            {currentPlace.open} 
                            {currentPlace.close === 'Open 24 hours' ? '' : - currentPlace.close}
                        </Text>
                    </View>
                    <View style={myStyles.detailListItem}>
                        <Icon
                            name='globe-americas'
                            type='font-awesome-5'
                            size={24}
                            color='#A6FF96'
                            containerStyle={{
                                marginRight: 8,
                            }}
                        />
                        <Text>{currentPlace.website}</Text>
                    </View>
                    <View style={myStyles.detailListItem}>
                        <Icon
                            name='phone'
                            type='material-community'
                            size={24}
                            color='#A6FF96'
                            containerStyle={{
                                marginRight: 8,
                            }}
                        />
                        <Text>{currentPlace.phone}</Text>
                    </View>
                    <View style={myStyles.detailListItem}>
                        <Icon
                            name='chart-line'
                            type='material-community'
                            size={24}
                            color='#A6FF96'
                            containerStyle={{
                                marginRight: 8,
                            }}
                        />
                        <Text>Popular times: {currentPlace.popularTimes}</Text>
                    </View>
                </View>
                <Button 
                    title='Map'
                    onPress={openGoogleMaps}
                    icon={{
                        name: 'arrow-up-right',
                        type: 'feather',
                        size: 48,
                        containerStyle:{
                            backgroundColor:'#A6FF96', 
                            borderRadius:30,
                            marginLeft:20,
                        }
                        
                    }}
                    iconPosition='right'
                />    
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
    img:{
        width: '100%', 
        aspectRatio: 1,
        borderRadius: 12,
    },
    detailList:{
        flexDirection: 'column',
        gap: 8,
        padding: 12,
    },
    detailListItem:{
        flexDirection: 'row',
    }
});