import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  button: { paddingHorizontal: 16, paddingVertical: 8 },
  text: { fontSize: 16, color: '#fff' }
}

const { button, text } = styles
const FaqButton = ({ navigation }) => (
  <TouchableOpacity style={button} onPress={() => navigation.navigate('Faq')}>
    <Text style={text}>FAQ</Text>
  </TouchableOpacity>
)

FaqButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default FaqButton
