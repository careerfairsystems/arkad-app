import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

class StudentCard extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <View>
        <Text>
          This is going to be a student card!
        </Text>
      </View>
    )

  }
}

export default StudentCard
