import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MenuStack, ContactStack } from './MenuStack'

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name="Home"
        component={MenuStack}
        options={() => ({
            headerShown: false
        })} 
        />
        <Tab.Screen 
        name="Profile" 
        component={ContactStack}
        options={() => ({
            headerShown: false
        })} 
        />
    </Tab.Navigator>
  )
}