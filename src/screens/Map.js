import {View, Text} from 'react-native';
import React from 'react';
import BottomNav from '../navigation/bottomTabs/BottomNav';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const Map = ({route}) => {
  const {latitude, longitude,main,locationName} = route.params;
  console.log('latitude: ' + latitude)
  console.log('longitude: ' + longitude)
      return(
        <>
          <SafeAreaView style={{flex:1}}>
              <View style={{height:'100%'}}>
                  <MapView style={{width1:'100%',height:'100%'}}
                   initialRegion={{
                      latitude:latitude,
                      longitude:longitude,
                      latitudeDelta:0.0922,
                      longitudeDelta:0.0421
                   }}
                   customMapStyle
                   
                  >
                    <Marker
                    draggable
                    coordinate={{
                        latitude:latitude,
                        longitude:longitude,
                    }}
                    title={locationName}
                    description={main}
                    />
                    
                      
                  </MapView>
              </View>
          </SafeAreaView>
        </>
      )
};

export default Map;