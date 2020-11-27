import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {useIsFocused} from '@react-navigation/native'

export default function FocusedStatusBar(props) {
  const isFocused = useIsFocused()
  return isFocused ? <StatusBar {...props} /> : null
}
