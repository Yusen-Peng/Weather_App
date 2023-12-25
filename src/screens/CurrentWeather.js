//import react
import React from 'react';
//import react native core components
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

//import ICON family
import {Feather} from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';

import RowText from '../components/RowText';

const CurrentWeather = () => {

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* use icon with name, size, color */}
        <Feather name='sun' size={100} color='yellow'/>
        <Text style={styles.temperature}>9</Text>
        <Text style={styles.feel}>Feel like coding</Text>
        
        <RowText 
          messageOne={'High: 12'} 
          messageTwo={'Low: 4'} 
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
          />  
      </View>

      <RowText 
          messageOne={'It\'s sunny'} 
          messageTwo={'T-shirt weather'} 
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
