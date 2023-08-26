import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {favoriteStyle} from '../styles/favoriteStyle/favoriteStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useFocusEffect} from '@react-navigation/native';


const Favorite = ({navigation}) => {
  const [data, setData] = useState([]);
  const toggleBookmark = () => {
    setBookmarked(!isBookmarked);
  };

  const getdata = async () => {
    let data = await AsyncStorage.getItem('favourites');
    let newFavourites = JSON.parse(data);
    setData(newFavourites);
    console.log('from storage as new array1', newFavourites);
  };
  console.log('from state', data);

  //refresh favorite list
  useFocusEffect(
    React.useCallback(() => {
      getdata();
    }, []),
  );

  return (
    <>
      <View>
        <View style={favoriteStyle.banner}>
          <Text style={favoriteStyle.bannerText}>Favourite Locations</Text>
        </View>

        <View>
          <Text style={favoriteStyle.likedPlaces}>Liked Places</Text>
        </View>
        <View style={favoriteStyle.underline}></View>
        {
       data ? (
        data.map(res => (
          <>
        
           <TouchableOpacity onPress={()=>navigation.navigate('Details', {
            locationName: res.locationName,
            temperature: res.temperature,
            main: res.main,
            humidity: res.humidity,
            feels_like: res.feels_like,
            latitude: res.latitude,
            longitude:res.longitude
           })} >
           <View style={favoriteStyle.favouriteDetailsContainer} >
              <View style={favoriteStyle.IconContainer}>
              <Entypo style={favoriteStyle.IconStyle} name="location" size={30} />
              </View>
              <View style={favoriteStyle.details}>
                <Text style={favoriteStyle.detailsText}>{res.locationName}</Text>
                <Text style={favoriteStyle.detailsText}>{res.temperature}°C</Text>
              </View>
            </View>
           </TouchableOpacity>
           
          </>
        ))
      ) : (
        <>
          <View>
            <Text>there is no data</Text>
          </View>
        </>
      )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarked: {
    backgroundColor: 'blue', // Change the color to whatever you want
  },
});

export default Favorite;
