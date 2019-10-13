import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loadingText: { marginTop: 10, color: '#000', fontSize: 13 }
}

const { container, indicatorBackground, loadingText } = styles
const SaveSuccess = () => (
  <View style={container}>
    <View style={indicatorBackground}>
      <Icon name="check" size={60} color='#26c93c' />
      <Text style={loadingText}>Saved!</Text>
    </View>
  </View>
)

export default SaveSuccess
