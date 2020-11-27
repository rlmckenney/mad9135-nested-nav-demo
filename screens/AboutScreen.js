import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import {View, Text, Button} from 'react-native'

export default function AboutScreen({navigation}) {
  return (
    <>
      <FocusedStatusBar style="dark" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>About Screen!</Text>
        <Button
          title="Show Details"
          onPress={() => {
            navigation.navigate('HomeDetails')
          }}
        />
      </View>
    </>
  )
}
