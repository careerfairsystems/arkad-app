import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import LoginView from '../../components/LoginView'


const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  }
}

const { container } = styles
const ProfileScreen = () => (
  <View style={container}>
    <LoginView />
  </View>
)

export default ProfileScreen
