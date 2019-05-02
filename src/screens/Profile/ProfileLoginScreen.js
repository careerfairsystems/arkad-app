import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'


const styles = {
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  innerContainer: {
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
    marginVertical: 10
  }
}

const { outerContainer, innerContainer, loginBtn, h1, h2, textInput } = styles

class ProfileLoginScreen extends Component {

  loginOnPress () {
    this.props.navigation.navigate('Map')
    console.log("asdadsa")
  }

  render() {
    return (
      <View style={outerContainer}>
        <View style={innerContainer}>
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
          <Button title='Login' onPress={this.loginOnPress()}/>
        </View>
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
