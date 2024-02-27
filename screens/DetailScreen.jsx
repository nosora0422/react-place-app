import { useRef } from 'react';
import { ScrollView, View, Image, StyleSheet, Linking, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Icon, Button } from '@rneui/themed';

import { getPlaceById } from '../data/itemData';

import Carousel from 'react-native-anchor-carousel';
import myStyles from '../style/styleSheet';

export default function DetailScreen({ route }){
    const { placeId } = route.params;
    const currentPlace = getPlaceById(placeId);

    //it opens google map and show the location of the item
    const openGoogleMaps = () => {
        const address = encodeURIComponent(currentPlace.address);
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    };
        
    const carouselRef = useRef(null);
    const { width: windowWidth } = Dimensions.get('window');

    const renderSlide = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={1}
            style={[myStyles.slideItem]}
            onPress={() => {
                carouselRef.current.scrollToIndex(index);
            }}
        >
            <Image 
                source={item}
                style={myStyles.img}
            />
        </TouchableOpacity>
    );

    // console.log(currentPlace.slideImg);

    return(
        <ScrollView style={myStyles.backgroundContainer}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={myStyles.background}
            />
            <View style={myStyles.container}>
                <View>
                    <Text h3>{currentPlace.area} &#62; {currentPlace.category}</Text>
                    <Text h1>{currentPlace.name}</Text>
                </View>
                <Carousel 
                    style={myStyles.slide}
                    data={currentPlace.slideImg}
                    renderItem={renderSlide}
                    initialIndex={0}
                    itemWidth={windowWidth * 0.7}
                    separatorWidth={15}
                    containerWidth={windowWidth}
                    inActiveOpacity={0.3}
                    ref={carouselRef}
                    itemContainerStyle={myStyles.img}
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
                            {currentPlace.close === 'Open 24 hours' ? '' : "-" +  currentPlace.close}
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
