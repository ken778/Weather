import {View, Text,ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../hooks/useFetch';
import Geolocation from '@react-native-community/geolocation';
import TempInfo from '../componenets/TempInfo/TempInfo';
import WeeklyInfo from '../componenets/WeeklyInfo/WeeklyInfo';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Home = () => {
  const [lat, setLat] = useState(-26.081545);
  const [long, setLong] = useState(28.086737);
  const key = 'd5762ba56acf2d29530dba0d45471ed9';

 
  //fetching current weather
  const {
    data: currentWeather,
    isPending:isPending,
    error:errorMessag,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`,
  );
  Geolocation.getCurrentPosition(data => {
    //  setLat(data.coords.latitude)
    //  setLong(data.coords.longitude)
  });

  //fetching weekly weather
  const {
    data: forecastData,
    isPending:pending,
    error:errorMessage,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`,
  );

  console.log('data from home', forecastData);

  return (
    <>
    {
      isPending?(<><View><Text style={{alignSelf:'center', marginTop:'50%'}}>  <ActivityIndicator size="large" color="#00ff00" /></Text></View></>):(<>
        {currentWeather && <TempInfo currentWeather={currentWeather} />}
      </>)
    }
    
     {
      pending?(<><View><Text style={{alignSelf:'center', marginTop:'50%'}}>  <ActivityIndicator size="large" color="#00ff00" /></Text></View></>):(<>
      <WeeklyInfo forecastData={forecastData}   currentWeather={currentWeather} />
      </>)
     }
      
    
    
    </>
  );
};
export default Home;
