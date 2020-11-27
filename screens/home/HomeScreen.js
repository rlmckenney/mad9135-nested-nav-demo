import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {View, Text, Button} from 'react-native'

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}} edges={['right', 'left', 'bottom']}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen!</Text>
        <Button
          title="Show Details"
          onPress={() => {
            navigation.navigate('HomeDetails')
          }}
        />
        <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    </SafeAreaView>
  )
}
