import React from 'react'
import {
  View, TouchableHighlight, Text, Alert
} from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  container, errorText, button, buttonText
} = styles
const ErrorView = ({ error, loadCompanies }) => (
  <View style={container}>
    <Text style={errorText}>Unable to load data. Please reload.</Text>
    <TouchableHighlight style={button} onPress={loadCompanies}>
      <Text style={buttonText}>Reload</Text>
    </TouchableHighlight>
    {Alert.alert(error)}
  </View>
)

ErrorView.propTypes = {
  error: PropTypes.string.isRequired,
  loadCompanies: PropTypes.func.isRequired
}

export default ErrorView
