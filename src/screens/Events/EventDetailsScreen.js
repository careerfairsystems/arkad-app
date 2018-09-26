import React from 'react'
import { Dimensions, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import TextSection from '../../components/text/TextSection'

const EventDetailsScreen = ({ navigation }) => {
  const event = navigation.state.params.item
  const { width } = Dimensions.get('window')
  const height = width * 0.3
  return (
    <DetailsScreen>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
          height,
          marginBottom: 8
        }}
      >
        <Image
          style={{
            flex: 1,
            width: null,
            height: null
          }}
          source={{ uri: event.image }}
        />
      </View>
      <TextSection
        title={event.name}
        description={`${event.location}, ${event.address}\n${event.date} ${event.startTime}-${
          event.endTime
        }`}
      />
      <TextSection title="Description" description={event.description} />
    </DetailsScreen>
  )
}

EventDetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default EventDetailsScreen
