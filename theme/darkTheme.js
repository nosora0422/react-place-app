import { createTheme } from '@rneui/themed';

const themePalette = {
    primary: '#A6FF96',
    secondery: '#383838',
    button:'#ffffff',
    outline:'#404040',
    onDark:'#ffffff',
    darkContainer:'#2E2E2E',
    inputContainer:'#1a1a1a',
}

export const darkTheme = createTheme({    
    components: {
        Button: {
            buttonStyle: {
                width: '100%',
                flex: 1,
                alignItems:'center',
                justifyContent: 'space-between',
                raised: true,
                borderRadius: 12,
                backgroundColor: themePalette.button,
                paddingVertical: 4,
            },
            titleStyle: {
                color: themePalette.secondery,
                fontSize: 48,
                fontWeight:'normal',
                fontFamily: 'Archivo_200ExtraLight',
                textAlign: 'left',
            },
            icon: {
                color: themePalette.secondery,
            },
            type: 'clear',
        },
        Text: {
            h1Style: {
                color: themePalette.onDark,
                fontSize:48,
                fontWeight:'normal',
                fontFamily: 'Archivo_200ExtraLight',
            },
            h2Style: {
                color: themePalette.primary,
                fontSize: 48,
                fontWeight:'normal',
                fontFamily: 'Archivo_700Bold',
            },
            h3Style: {
                color: themePalette.onDark,
                fontSize: 20,
                fontWeight:'normal',
                fontFamily: 'Archivo_200ExtraLight',
            },
            h4Style: {
                color: themePalette.secondery,
                fontSize: 24,
                fontWeight:'normal',
                fontFamily: 'Archivo_200ExtraLight',
            },
            style: {
                color: themePalette.onDark,
                fontSize: 16,
                fontWeight:'normal',
                fontFamily: 'Archivo_300Light',
            }
        },

        Avatar: {
            avatarStyle: {
                borderColor: themePalette.primary,
                borderWidth: 1,
            },
            size: 50,
        },

        Divider: {
            color: themePalette.primaryLighter,
            width: 2,
        },        

        FAB: {
            buttonStyle: {
                raised: true,
                borderRadius: 15,
                backgroundColor: themePalette.primary,
            },
            titleStyle: {
                color: themePalette.alternate,
            },
            icon: {
                color: themePalette.alternate,            
            },
            type: 'clear',
        },

        Chip: {
            buttonStyle: {
                raised: true,
                backgroundColor: themePalette.primary,
            },
            titleStyle: {
                color: themePalette.secondery,
                fontSize: 10,
                fontWeight:'normal',
                fontFamily: 'Archivo_500Medium',
                margin:-5,
            },
        }
    },


});