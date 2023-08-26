import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Bookmark from '../../screens/Favorite';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { useFocusEffect } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const BottomNav = () => {

 


  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown:false,
           
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
        
          name="favorite"
          component={Bookmark}
          options={{
            headerShown:false,
           
            tabBarIcon: ({ color, size }) => (
              <Entypo name="bookmarks" size={24}  color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNav;
