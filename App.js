import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View} from 'react-native';
// import MenuStack from './src/navigation/MenuStack'
import { BottomTabNavigator } from './src/navigation/TabNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  )
}
