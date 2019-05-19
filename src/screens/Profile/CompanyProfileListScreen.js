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
  h1: {
    fontSize: 70,
    textAlign: 'center'
  },
}

const { outerContainer, innerContainer, h1 } = styles

class ProfileLoginScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoading: false,
    }
  }

  render() {
    return (
      <View style={outerContainer}>
        <View style={innerContainer}>
          <Text style={h1}>
            THIS IS GOING TO BE A LIST
          </Text>
        </View>
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
