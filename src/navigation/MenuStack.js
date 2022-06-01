import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import About from '../screens/About';

const Stack = createStackNavigator();

const menuStyles = {
  headerStyle: {
    backgroundColor: "tomato",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
}

export const MenuStack = (navigation) => {
  return (
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={menuStyles}
    >
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='About'
        component={About}
      />
    </Stack.Navigator>
  );
}

export const ContactStack = (navigation) => {
  return (
    <Stack.Navigator
    screenOptions={menuStyles}
    >
      <Stack.Screen
        name='Profile'
        component={Profile}
      />
    </Stack.Navigator>
  )
}