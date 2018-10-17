import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'

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
  errorText: { color: '#000', fontSize: 13 }
}

const { container, errorBackground, errorText } = styles
const ErrorView = ({ loadCompanies }) => (
  <View style={container}>
    <View style={errorBackground}>
      <Text style={errorText}>Unable to load data. Please reload.</Text>
      <Button title="Reload" onPress={loadCompanies} />
    </View>
  </View>
)

ErrorView.propTypes = {
  loadCompanies: PropTypes.func.isRequired
}

export default ErrorView
