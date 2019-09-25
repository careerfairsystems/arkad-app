import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  button: { paddingHorizontal: 16, paddingVertical: 8 },
  headerIcon: {
  paddingHorizontal: 8,
  alignItems: 'center'
  },
buttonText: {
  fontSize: 12,
  right: 0,
  color: global.arkadGray
  },
}

function logout(navigation, loadLogout) {
  loadLogout()
  navigation.navigate('ProfileStack')
  navigation.setParams({
      headerLeft: null,
      header: null
  });
}

const { button, headerIcon, buttonText } = styles
const LogoutButton = ({ navigation, loadLogout }) => (
  <TouchableOpacity style={button} onPress={() => logout(navigation, loadLogout)}>
    <Icon style={headerIcon} name='sign-out' size={21} color='#fff' />
    <Text style={buttonText}>Logout</Text>
  </TouchableOpacity>
)

LogoutButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default LogoutButton
