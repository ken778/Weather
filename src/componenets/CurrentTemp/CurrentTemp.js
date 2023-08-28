import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {teperatureStyle} from './CurrentTempStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TempInfo = ({currentWeather}) => {
  const [isBookmarked, setBookmarked] = useState(false);
  let favourites = [];

  //Alet
  const addToFavoriteAlert = () =>
  Alert.alert('Success', 'Your location has been added to favorite locations', [
 
    {text: 'OK'},
  ]);

    //image url
  let backgroundImageSource;
  try {
  //changing background image based on the current weather
  if (currentWeather.weather[0].main === 'Rain') {
    backgroundImageSource = require('../../assets/Images/forest_rainy.png');
  } else if (currentWeather.weather[0].main === 'Clouds') {
    backgroundImageSource = require('../../assets/Images/forest_cloudy.png');
  } else {
    backgroundImageSource = require('../../assets/Images/forest_sunny.png');
  }
  } catch (error) {
    console.log(error)
  }

          //determining weather description
          let description;
 try {

  if (currentWeather.weather[0].main === 'Rain') {
    description = 'Rainy';
  } else if (currentWeather.weather[0].main === 'Clouds') {
    description = 'Cloudy';
  } else {
    description = 'Sunny';
  }
 } catch (error) {
  console.log(error)
 }



  //add to favourites
  const toggleBookmark = async () => {
    locationDetails = {
      latitude: currentWeather.coord.lat,
      longitude: currentWeather.coord.lon,
      locationName: currentWeather.name,
      temperature:Math.round(currentWeather.main.temp),
      main: currentWeather.weather[0].main,
      humidity: currentWeather.main.humidity,
      feels_like:Math.round(currentWeather.main.feels_like) 
    };

    setBookmarked(!isBookmarked);

    let data = await AsyncStorage.getItem('favourites');
    console.log('data', data);


    if (data == null) {
      // addNewObjectToArray(locationDetails)
      console.log('it is null');
      favourites.push(locationDetails);
      AsyncStorage.setItem('favourites', JSON.stringify(favourites));
      favourites = [];
    } else {
      console.log('it is not null');
      let favouritesLocation = await AsyncStorage.getItem('favourites');

      favourites = JSON.parse(favouritesLocation);
      favourites.push(locationDetails)

      AsyncStorage.setItem('favourites', JSON.stringify(favourites));
    }
    addToFavoriteAlert()
   
  };
 

  const getdata = async () => {
    let data = await AsyncStorage.getItem('favourites');
    // console.log('from storage as new array', data);
  };

  useEffect(() => {
  // AsyncStorage.clear()
    getdata();
    console.log('from storage');
  }, []);

  return (
    <>
      <ImageBackground
        source={backgroundImageSource}
        style={teperatureStyle.backgroundImage}>
        <View>
          <TouchableOpacity onPress={toggleBookmark}>
            <View>
              <Entypo style={teperatureStyle.favoriteIcon}
                color={isBookmarked ? 'red' : 'white'}
                name="bookmark"
                size={40}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={teperatureStyle.mainContainerL}>
          <View style={teperatureStyle.temperatureContainer}>
            <Text style={teperatureStyle.temperatureText}>
              {Math.round(currentWeather.main.temp)}°C
            </Text>
            <Text style={teperatureStyle.weather}>{description}</Text>
          </View>
        </View>
      </ImageBackground>
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
export default TempInfo;
