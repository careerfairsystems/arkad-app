import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'


const styles = {
  button: {
    marginHorizontal: 16
  },
}

const { button, text } = styles
const SelectStudentButton = ({ navigation, item, userType }) => (
  <TouchableOpacity onPress={() => navigation.navigate(userType, {item})}>
    <Icon style={button} name="angle-right" size={25} color="#000" />
  </TouchableOpacity>
)

SelectStudentButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default SelectStudentButton
