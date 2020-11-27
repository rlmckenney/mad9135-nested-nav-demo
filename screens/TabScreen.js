import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackScreen from './home/HomeStackScreen'
import AboutScreen from './AboutScreen'
import ContactScreen from './ContactScreen'

const Tab = createBottomTabNavigator()

export default function TabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'hsl(275, 100%, 23%)',
        inactiveTintColor: 'hsl(275, 15%, 60%)',
        style: {backgroundColor: 'hsl(275, 100%, 93%)'}
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'ios-list-box' : 'ios-list'
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarLabel: 'Stack'
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons name={'ios-paper'} size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons name={'ios-paper-plane'} size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
