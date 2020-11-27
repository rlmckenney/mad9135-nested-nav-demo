import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {View, Text} from 'react-native'

export default function HomeDetailsScreen() {
  return (
    <SafeAreaView style={{flex: 1}} edges={['right', 'left', 'bottom']}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Details Screen!</Text>
      </View>
    </SafeAreaView>
  )
}
