import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function FavoriteScreen(){
    return(
        <View style={myStyles.backgroundContainer}>
            <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={myStyles.background}
            />
            <Text>Favorite</Text>
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

});