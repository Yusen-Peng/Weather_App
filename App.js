//import react
import React from 'react'

//import components
import Tabs from './src/components/Tabs';

//import navigation
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}