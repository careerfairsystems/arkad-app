import React from 'react'
import { TouchableHighlight, View, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: global.buttonColor
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8
  }
}

const { container, button, text } = styles
const Button = ({ title, onPress, loading = false }) => (
  <TouchableHighlight style={container} onPress={onPress}>
    <View style={button}>
      { loading
        ? <ActivityIndicator/>
        : [
          <Text key='buttonText' style={text}>{title}</Text>,
          <Icon key='buttonIcon' name="angle-right" size={22} color="#fff" />
        ]
      }
    </View>
  </TouchableHighlight>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Button
