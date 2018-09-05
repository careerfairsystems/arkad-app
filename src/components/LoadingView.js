import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { marginTop: 10, color: '#666', fontSize: 13 }
}

const { container, text } = styles
const LoadingView = () => (
  <View style={container}>
    <ActivityIndicator size="large" />
    <Text style={text}>Loading...</Text>
  </View>
)

export default LoadingView
