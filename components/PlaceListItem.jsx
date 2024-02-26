import { Button, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Icon } from '@rneui/themed';

export default function PlaceListItem({ itemData, navigationRefer }){
    
    return (
        <TouchableOpacity 
            onPress={() => navigationRefer.navigate('Details', {
                placeId: itemData.id
            })
            }
        >
            <View style={myStyles.cardContainer}>
                <Image 
                    source={itemData.img}
                    style={myStyles.cardImge}
                />
                <View style={myStyles.cardName}>
                    <Text h4>{itemData.name}</Text>
                    <Icon 
                        name='right'
                        type='antdesign'
                        size={24}
                        containerStyle={{
                            backgroundColor:'#A6FF96', 
                            borderRadius:30,
                            marginLeft:20,
                            padding:4,
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const myStyles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding:8,
        marginBottom: 10,
    },
    cardImge:{
        width: '100%',
        height: 86,
        borderRadius: 10,
    },
    cardName:{
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
