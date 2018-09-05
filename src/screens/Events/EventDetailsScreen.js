import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const EventDetailsScreen = ({ navigation }) => {
  const event = navigation.state.params.item
  return (
    <View>
      <Text>{event.name}</Text>
    </View>
  )
}

EventDetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default EventDetailsScreen
