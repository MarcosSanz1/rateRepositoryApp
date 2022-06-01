import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const ContactStack = (navigation) => {
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

const menuStyles = {
    headerStyle: {
      backgroundColor: "tomato",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  }

export default ContactStack