import React from 'react'
import {View, Text, Button} from 'react-native'
import FocusedStatusBar from '../components/FocusedStatusBar'

export default function ContactScreen({navigation}) {
  return (
    <>
      <FocusedStatusBar style="dark" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Contact Screen!</Text>
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
