import { StyleSheet } from 'react-native';

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
    timeDropdown:{
        padding: 8,
        width: 200,
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
    },
    backgroundContainer:{
        height: '100%',
        backgroundColor:'#2F2F2F',
    },
    location:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backgroundContainer:{
        height: '100%',
        backgroundColor:'#2F2F2F',
    },
    slide:{
        flexDirection: 'row',
        height:200,
    },
    slideItem:{
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 12, 
    },
    img:{
        width: '100%',
        objectFit: 'contain',
    },
    detailList:{
        flexDirection: 'column',
        gap: 8,
        padding: 12,
        marginVertical: 30,
    },
    detailListItem:{
        flexDirection: 'row',
    },
    
   
})

export default myStyles;