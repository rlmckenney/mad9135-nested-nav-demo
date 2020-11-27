import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabScreen from './screens/TabScreen'
import SettingsScreen from './screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRoute="Home"
          drawerPosition="right"
          drawerType="front"
        >
          <Drawer.Screen name="Home" component={TabScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
