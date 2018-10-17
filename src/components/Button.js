import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: global.buttonColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
}

const { button, text } = styles
const Button = ({ title, onPress }) => (
  <TouchableHighlight style={button} onPress={onPress}>
    <Text style={text}>{title}</Text>
  </TouchableHighlight>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Button
