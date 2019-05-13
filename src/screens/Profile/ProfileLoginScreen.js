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
  },
}

const { outerContainer, innerContainer, loginBtn, h1, h2, textInput } = styles

class ProfileLoginScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      isLoading: false,
    }
  }

  handlePress() {
    this.setState({isLoading: true})
    this.login()
  }

  async login() {
    await this.props.loadLogin(this.state.username, this.state.password)
    this.setState({username:''})
    this.setState({password:''})
    this.setState({isLoading: false})
    if (this.props.logedIn) {
      this.props.navigation.navigate('Map')
    }
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
            value={this.state.username}
            onChangeText={(text) => this.setState({username:text})}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password:text})}
          />
          <Button title='Login'
                  onPress={() => this.handlePress()}
                  loading={this.state.isLoading}
          />
        </View>
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
