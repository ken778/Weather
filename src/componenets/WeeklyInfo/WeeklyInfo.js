import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {weeklyTemperatureStyle} from './weeklyInfoStyle';

//week days
const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const WeeklyInfo = ({forecastData, currentWeather}) => {
  let weatherCondition = 'Cloudy';
  let rainyWeatherCondition = false;
  let cloudyWeatherCondition = false;
  let sunnyWeatherCondition = false;
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek),
  );
  console.log('Focast', forecastDays);


  try {
  //changing background color based on weather codition
  if (currentWeather.weather[0].main === 'Rain') {
    rainyWeatherCondition = true;
  } else if (currentWeather.weather[0].main === 'Clouds') {
    cloudyWeatherCondition = true;
  } else {
    sunnyWeatherCondition = true;
  }
  } catch (error) {
    console.log('from weekly component background ',error)
  }

  //image url
  let iconSource;
 try {
   
     //changing background image based on the current weather
     if (currentWeather.weather[0].main === 'Rain') {
       iconSource = require('../../assets/Icons/rain.png');
     } else if (currentWeather.weather[0].main === 'Clouds') {
       iconSource = require('../../assets/Icons/partlysunny.png');
     } else {
       iconSource = require('../../assets/Icons/clear.png');
     }
  
 } catch (error) {
  console.log('from weekly component background image',error)
 }
 


  return (
    <>
      <View
        style={[
          sunnyWeatherCondition && weeklyTemperatureStyle.sunny,
          rainyWeatherCondition && weeklyTemperatureStyle.rainy,
          cloudyWeatherCondition && weeklyTemperatureStyle.cloudy,
        ]}>
        <View style={weeklyTemperatureStyle.container}>
          {
            currentWeather?(
              <View style={weeklyTemperatureStyle.tableRow}>
              <Text style={weeklyTemperatureStyle.cell}>
                {Math.round(currentWeather.main.temp_min)}°C
              </Text>
              <Text style={weeklyTemperatureStyle.cell}>
                {' '}
                {Math.round(currentWeather.main.temp)}°C
              </Text>
              <Text style={weeklyTemperatureStyle.cell}>
                {Math.round(currentWeather.main.temp_max)}°C
              </Text>
            </View>
            ):(
              <>
              <View style={{height:'50%'}}>
                 <Text  style={{padding:20,alignSelf:'center', marginTop:50}}>
                      no weather data, Please Check your Internet connectin 
                 </Text>
              </View>
              </>
            )
          }
        
          <View style={weeklyTemperatureStyle.tableRow}>
            <Text style={weeklyTemperatureStyle.cell}>min</Text>
            <Text style={weeklyTemperatureStyle.cell}>Current</Text>
            <Text style={weeklyTemperatureStyle.cell}>max</Text>
          </View>
          {/* Add more rows as needed */}
        </View>
          

          {
            forecastData?(
              forecastData.list.splice(0, 7).map((res, index) => (
                <View style={weeklyTemperatureStyle.temperatureDetails} key={index}>
                  <View style={weeklyTemperatureStyle.dayTextStyle}>
                    <Text style={weeklyTemperatureStyle.weekDaysTextStyle}>
                      {forecastDays[index]}
                    </Text>
                  </View>
                  <View style={weeklyTemperatureStyle.dayTextStyle}>
                    <Image
                      style={weeklyTemperatureStyle.iconStyle}
                      source={iconSource}
                    />
                  </View>
                  <View style={weeklyTemperatureStyle.dayTextStyle}>
                    <Text style={weeklyTemperatureStyle.degreeTextStyle}>
                      {Math.round(res.main.temp)}°C
                    </Text>
                  </View>
                </View>
              ))
            ):(<>
              <View><Text style={{padding:20, alignSelf:'center', marginTop:50}}> no weather data, Please Check your Internet connectin </Text></View>
            </>)
          }
        
      </View>
    </>
  );
};

export default WeeklyInfo;
