import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'

const styles = {
  container: {
    width: '80%'
  },
  loginBtn: {
    width: '50%',
    color: '#000'
  },
  h1: {
    fontSize: 70,
    textAlign: 'center'
  },
  h2: {
    fontSize: 30,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    borderTopColor: '#000',
    backgroundColor: '#c9c9c9',
    borderRadius: 8,
    padding: 10
  }
}

const { container, loginBtn, h1, h2, textInput } = styles

class LoginView extends Component {
    render() {
      return (
        <View style={container}>
          <Text style={h1}>
            ARKAD
          </Text>
          <Text style={h2}>
            -Login
          </Text>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={textInput}
            placeholder="Username"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={textInput}
            placeholder="Password"
            onChangeText={(text) => this.setState({text})}
          />
          <Button title='Login'/>
        </View>
      )
    }
}

export default LoginView
