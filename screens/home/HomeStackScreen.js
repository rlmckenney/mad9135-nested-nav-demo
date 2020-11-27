import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import HomeDetailsScreen from './HomeDetailsScreen'

const Stack = createStackNavigator()

export default function HomeStackScreen() {
  return (
    <>
      <FocusedStatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'indigo'},
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="HomeDetails"
          component={HomeDetailsScreen}
          options={{title: 'Home Details'}}
        />
      </Stack.Navigator>
    </>
  )
}
