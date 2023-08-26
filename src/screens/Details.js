import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {detailsStyle} from '../styles/details/detailsStyle';
import {teperatureStyle} from '../componenets/TempInfo/tempInfoStyle';

const Details = ({navigation, route}) => {
  const {locationName, temperature, main, humidity, feels_like,longitude, latitude} = route.params;

  //image url
  let backgroundImageSource;
  try {
    //changing background image based on the current weather
    if (main === 'Rain') {
      backgroundImageSource = require('../assets/Images/forest_rainy.png');
    } else if (main === 'Clouds') {
      backgroundImageSource = require('../assets/Images/forest_cloudy.png');
    } else {
      backgroundImageSource = require('../assets/Images/forest_sunny.png');
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <SafeAreaView>
        <ImageBackground
          source={backgroundImageSource}
          style={detailsStyle.backgroundImage}>
           <View style={detailsStyle.banner}>
            <View>
                <Text style={detailsStyle.locationTextStyle}>{locationName}</Text>
            </View>
          <View style={teperatureStyle.temperatureContainer}>
            <Text style={teperatureStyle.temperatureText}>
              {temperature}°C
            </Text>
            
          </View>
        </View>
        </ImageBackground>
        <View>
          <Text style={detailsStyle.heading}>Weather then</Text>
        </View>
        <View style={detailsStyle.detailsContainer}>
          <View style={detailsStyle.details}>
           
            <View>
              <Text>Temperature</Text>
              <Text style={detailsStyle.temperatureStyle}>{temperature}°C</Text>
            </View>
          </View>
          <View style={detailsStyle.details}>
           
            <View>
              <Text>Weather</Text>
              <Text style={detailsStyle.weatherText}>{main}</Text>
            </View>
          </View>
        </View>
        <View style={detailsStyle.detailsContainer}>
          <View style={detailsStyle.details}>
           
            <View>
              <Text>Humidity</Text>
              <Text style={detailsStyle.temperatureStyle}>{humidity}%</Text>
            </View>
          </View>
          <View style={detailsStyle.details}>
           
            <View>
              <Text>Feels like</Text>
              <Text style={detailsStyle.weatherText}>{feels_like}°C</Text>
            </View>
          </View>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Map',{
            longitude:longitude,
            latitude:latitude,
            main:main,
            locationName:locationName
        })} >
        <View>
             <View style={detailsStyle.button}>
                 <Text style={detailsStyle.buttonText}>VIEW LOCATION</Text>
             </View>
        </View>
        </TouchableOpacity>
       
      </SafeAreaView>
    </>
  );
};

export default Details;
