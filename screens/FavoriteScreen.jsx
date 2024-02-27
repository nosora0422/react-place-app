import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import myStyles from '../style/styleSheet';

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
