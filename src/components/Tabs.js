//import react
import React from 'react'

//import components
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';

//import navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Feather} from '@expo/vector-icons'

//import Tab component
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(     
      //Tab.navigator: the tab panel
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontFamily: 'Times New Roman',
            fontSize: 20,
            color: 'black'
          }
        }}
      >
            {/* Tab.Screen: individual tab for a separate screen
                two basic fields:
                name: the name of each screen (both on panel and on top)
                component: the specific screen JSX component
            */}
            <Tab.Screen 
              name='current weather' 
              component={CurrentWeather}
              options={{
                //depending on whether the tab is focused, the icon color changes
                tabBarIcon: ({focused}) => <Feather name='droplet' size={25} color={focused? 'tomato' : 'black'}/>
              }}  
            />
            <Tab.Screen 
              name='upcoming weather' 
              component={UpcomingWeather}
              options={{
                //depending on whether the tab is focused, the icon color changes
                tabBarIcon: ({focused}) => <Feather name='clock' size={25} color={focused? 'tomato' : 'black'}/>
              }}  
            />
            <Tab.Screen 
              name='Your city' 
              component={City}
              options={{
                //depending on whether the tab is focused, the icon color changes
                tabBarIcon: ({focused}) => <Feather name='home' size={25} color={focused? 'tomato' : 'black'}/>
              }}
            />  
      </Tab.Navigator>  
    )
}


export default Tabs;