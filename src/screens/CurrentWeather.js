//import react
import React from 'react';
//import react native core components
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

//import ICON family
import {Feather} from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';


import { weatherType } from '../utilities/weatherType';

import RowText from '../components/RowText';

const CurrentWeather = ({weatherData}) => {

  //destructure
  const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData

  //get the weather condition
  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        {/* use icon with name, size, color */}
        <Feather name={weatherType[weatherCondition].icon} size={100} color='white'/>
        <Text style={styles.temperature}>{temp}</Text>
        <Text style={styles.feel}>{feels_like}</Text>
        
        <RowText 
          messageOne={`High: ${temp_max}`} 
          messageTwo={`Low: ${temp_min}`} 
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
          />  
      </View>

      <RowText 
          messageOne={weather[0].description} 
          messageTwo={weatherType[weatherCondition].message} 
          containerStyles={styles.bodyWrapper}
          messageOneStyles={styles.description}
          messageTwoStyles={styles.message}
      />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default CurrentWeather;

//create a stylesheet object
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: 'red',
    fontSize: 48
  },
  feel: {
    color:'purple',
    fontSize: 30
  },
  highLow: {
    color:'black',
    fontSize: 20
  },
  highLowWrapper: {
      //flexDirection: how items are arranged
      flexDirection: 'row'
  },
  bodyWrapper: {
    //justifyContent: align vertically
    //flex-start, flex-end, center
    justifyContent: 'flex-start',
    
    //alignItems: align horizontally
    //flex-start, flex-end, center
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});
