import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorBackground: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8
  },
  errorText: { color: '#000', fontSize: 13 },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 15 }
}

const {
  container, errorBackground, errorText, button, buttonText
} = styles
const ErrorView = ({ loadCompanies }) => (
  <View style={container}>
    <View style={errorBackground}>
      <Text style={errorText}>Unable to load data. Please reload.</Text>
      <TouchableHighlight style={button} onPress={loadCompanies}>
        <Text style={buttonText}>Reload</Text>
      </TouchableHighlight>
    </View>
  </View>
)

ErrorView.propTypes = {
  loadCompanies: PropTypes.func.isRequired
}

export default ErrorView
