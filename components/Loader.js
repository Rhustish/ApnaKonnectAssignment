import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  )
}