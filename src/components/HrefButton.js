import React from 'react'
import { TouchableOpacity, Linking, Text, View} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: global.buttonColor
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 12,
  }
}

const { container, button, text } = styles
const HrefButton = ({buttonText, buttonLink}) => {
  return (
    <TouchableOpacity style={container} onPress={() => Linking.openURL(buttonLink)}>
      <View style={button}>
        <Text style={text}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

HrefButton.propTypes ={
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
}

export default HrefButton
