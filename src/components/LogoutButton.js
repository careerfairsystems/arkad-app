import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  button: { paddingHorizontal: 16, paddingVertical: 8 },
  text: { fontSize: 16, color: '#fff' }
}

function logout(navigation, loadLogout) {
  loadLogout()
  navigation.navigate('ProfileStack')
  navigation.setParams({
      headerLeft: null,
      header: null
  });
}

const { button, text } = styles
const LogoutButton = ({ navigation, loadLogout }) => (
  <TouchableOpacity style={button} onPress={() => logout(navigation, loadLogout)}>
    <Text style={text}>Logout</Text>
  </TouchableOpacity>
)

LogoutButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default LogoutButton
