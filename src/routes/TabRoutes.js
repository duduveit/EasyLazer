import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Tickets from '../screens/Tickets';
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";


import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions = {{
        tabBarStyle: {
          backgroundColor: '#c4c4c4',
          borderTopColor: 'transparent'
        },
        tabBarActiveTintColor: '#ff6a13',
        tabBarStyle:{
          paddingBottom: 5, 
          paddingTop: 5
,        },
        headerShown: false
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name = 'home' size={size} color = {color}/>
        ),
        tabBarLabel: 'Início'
      }}
      />
      
      <Tab.Screen 
      name="Tickets" 
      component={Tickets}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name = 'ticket' size={size} color = {color}/>
        ),
        tabBarLabel: 'Meus ingressos'
      }}
      />

      <Tab.Screen 
      name="Perfil" 
      component={Perfil}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name = 'user' size={size} color = {color}/>
        )
      }}
      
      />
    </Tab.Navigator>
  );
}
 