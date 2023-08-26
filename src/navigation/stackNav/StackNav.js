import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Bookmark from '../../screens/Favorite';
import Landing from '../../screens/Landing';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackNav = () => {
    return(
        <>
{/*   
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='landing' component={Landing} options={{headerShown:false}} /> 
        <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name='bookmark'  component={Bookmark} options={{headerShown:false}} /> 
        

        </Stack.Navigator>
        </NavigationContainer> */}
      </>
    )

};

export default StackNav;
