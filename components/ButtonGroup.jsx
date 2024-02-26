import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function ButtonGroup({ buttonList, navigationRefer, isCategory }){
    const handleButtonClick = (selectedItem) => {
        if (isCategory) {
            navigationRefer.navigate('List', { category: selectedItem });
        } else {
            navigationRefer.navigate('List', { area: selectedItem });
        }
    }

    const drawGroup = (item) => {
        return(
            <Button
                key={item}
                title={item}
                onPress={() => handleButtonClick(item)}
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
        );
    }

    return(
        <View style={myStyles.ButtonGroupBox}>
            {buttonList.map(drawGroup)}
        </View>
    )
}

const myStyles = StyleSheet.create({
    ButtonGroupBox:{
        flexDirection: 'column',
        gap: 10,
    }
})