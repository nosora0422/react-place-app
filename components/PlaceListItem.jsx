import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Icon, Chip } from '@rneui/themed';

export default function PlaceListItem({ itemData, navigationRefer }){
    return (
        //TouchableOpacity enables the entire container can be clicked.
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
                <View style={myStyles.chipWrapper}>
                    <Chip
                        title={itemData.close === 'Open 24 hours' ? 
                        'Open 24 hours' : 
                        ('Until ' + itemData.close)}
                    />
                </View>
                
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
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding:8,
        marginBottom: 10,
    },
    cardImge:{
        width: '100%',
        height: 86,
        borderRadius: 10,
        marginBottom: 4,
    },
    cardName:{
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chipWrapper:{
        position: 'absolute', 
        top:16, 
        left: 16,
    }
})
