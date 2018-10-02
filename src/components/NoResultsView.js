import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { marginTop: 16, color: '#000', fontSize: 13 }
}

const { container, text } = styles
const NoResultsView = () => (
  <View style={container}>
    <Text style={text}>No results</Text>
  </View>
)

export default NoResultsView
