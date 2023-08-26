
import React, {useEffect, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bookmark from './screens/Favorite';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Map from './screens/Map';
import SplashScreen from 'react-native-splash-screen';
import Details from './screens/Details';


// const Tab = createBottomTabNavigator();
 const Stack = createNativeStackNavigator();
function App() {

  useEffect(()=>{
    if(Platform.OS === 'android')
    SplashScreen.hide();
  },[])
       return(
        <>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='landing' component={Landing} options={{headerShown:false}} /> 
        <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name='bookmark'  component={Bookmark} options={{headerShown:false}} /> 
        <Stack.Screen name='Details'  component={Details} /> 
        <Stack.Screen name='Map'  component={Map}  /> 
        </Stack.Navigator>
        </NavigationContainer>
        </>
             
       )
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
