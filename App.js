import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ThemeProvider } from '@rneui/themed';
import { darkTheme } from './theme/darkTheme';
import { useFonts, 
  Archivo_100Thin,
  Archivo_200ExtraLight,
  Archivo_300Light,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
  Archivo_800ExtraBold,
  Archivo_900Black
} from '@expo-google-fonts/archivo';

import LocationScreen from './screens/LocationScreen';
import CategoryScreen from './screens/CategoryScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import DetailScreen from './screens/DetailScreen';
import PlaceListScreen from './screens/PlaceListScreen';
import CategoryListScreen from './screens/PlaceListScreen';

const LocationStack = createNativeStackNavigator();
function LocationStackScreen(){
  return (
    <LocationStack.Navigator
      screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { 
          backgroundColor: '#000000', 
        },
        headerTitleStyle: {
          fontFamily: 'Archivo_600SemiBold', 
          fontWeight: 'normal'
        }
      }}
    >
      <LocationStack.Screen
        name="Location"
        component={LocationScreen}
      />
      <LocationStack.Screen
        name="List"
        component={PlaceListScreen}  
      />
      <LocationStack.Screen
        name="Details"
        component={DetailScreen}  
      />
    </LocationStack.Navigator>
  )
}


const CategoryStack = createNativeStackNavigator();
function CategoryStackScreen(){
  return (
    <CategoryStack.Navigator
      screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { 
          backgroundColor: '#000000', 
        },
        headerTitleStyle: {
          fontFamily: 'Archivo_600SemiBold', 
          fontWeight: 'normal'
        }
      }}
    >
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}  
      />
      <CategoryStack.Screen
        name="List"
        component={CategoryListScreen}  
      />
      <CategoryStack.Screen
        name="Details"
        component={DetailScreen}  
      />
    </CategoryStack.Navigator>
  )
}

const FavoriteStack = createNativeStackNavigator();
function FavoriteStackScreen(){
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { 
          backgroundColor: '#000000', 
        },
        headerTitleStyle: {
          fontFamily: 'Archivo_600SemiBold', 
          fontWeight: 'normal'
        }
      }}
    >
      <FavoriteStack.Screen
        name="Favorite"
        component={FavoriteScreen}  
      />
      <FavoriteStack.Screen
        name="Details"
        component={DetailScreen}  
      />
    </FavoriteStack.Navigator>
  )
}

const Tap = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_100Thin,
    Archivo_200ExtraLight,
    Archivo_300Light,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Archivo_800ExtraBold,
    Archivo_900Black
  })
  
  if(!fontsLoaded) {
    return  (
      <View styles={myStyle.loadingContainer}>
        <ActivityIndicator size='large' color='#b9c8ff' />
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={darkTheme}>
        <NavigationContainer>
          <Tap.Navigator
            initialRouteName="Location" 
            screenOptions={{ 
              headerShown: false,
              tabBarActiveTintColor:'#A6FF96',
              tabBarInactiveTintColor:'#ffffff',
              tabBarItemStyle:{
                margin:8,
              },
              tabBarStyle: { 
                borderRadius:50,
                position: 'absolute',
                bottom: 12,
                marginHorizontal: 12,
                backgroundColor: '#353535',
                shadowColor: '#000000',
                shadowOpacity: 0.5,
                shadowRadius: 11,
                borderColor: 'transparent',
                height: 56,
              } 
            }}
          >
            <Tap.Screen 
              name="Location"
              component={LocationStackScreen}
              options={{
                title:'Location',
                tabBarIcon:({ color, size }) => (
                  <MaterialCommunityIcons 
                    name="map-marker-outline"
                    color={color}
                    size={size}              
                  />
                ),
              }}
            />
            <Tap.Screen 
              name="Category"
              component={CategoryStackScreen}
              options={{
                title:'Category',
                tabBarIcon:({ color, size }) => (
                  <MaterialCommunityIcons
                    name="filter"
                    color={color}
                    size={size}              
                  />
                ),
              }}
            />
            <Tap.Screen 
              name="Favorite"
              component={FavoriteStackScreen}
              options={{
                title:'Favorite',
                tabBarIcon:({ color, size }) => (
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={color}
                    size={size}              
                  />
                ),
              }}
            />
          </Tap.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const myStyle = StyleSheet.create({
  loadingContainer:{
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})
