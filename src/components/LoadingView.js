import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorBackground: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8
  },
  loadingText: { marginTop: 10, color: '#666', fontSize: 13 }
}

const { container, indicatorBackground, loadingText } = styles
const LoadingView = () => (
  <View style={container}>
    <View style={indicatorBackground}>
      <ActivityIndicator size="large" />
      <Text style={loadingText}>Loading...</Text>
    </View>
  </View>
)

export default LoadingView
