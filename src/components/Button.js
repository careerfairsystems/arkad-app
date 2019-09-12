import React from 'react'
import { TouchableHighlight, View, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import './../../global'

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
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
}

const { container, button, text } = styles
const Button = ({ title, onPress, loading = false, showIcon = true }) => (
  <TouchableHighlight style={container} onPress={onPress}>
    <View style={button}>
      { loading
        ? <ActivityIndicator style={{marginLeft: 8}} color='#fff'/>
        : <Text key='buttonText' style={text}>{title}</Text>
      }
      { showIcon&&!loading ? <Icon style={{marginLeft: 8}} key='buttonIcon' name="angle-right" size={22} color="#fff" /> : null }
    </View>
  </TouchableHighlight>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Button
