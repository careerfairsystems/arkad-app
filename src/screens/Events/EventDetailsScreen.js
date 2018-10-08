import React from 'react'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import DisplayImage from '../../components/DisplayImage'
import TextSection from '../../components/text/TextSection'

const EventDetailsScreen = ({ navigation }) => {
  const event = navigation.state.params.item
  return (
    <DetailsScreen>
      <DisplayImage source={{ uri: event.image }} />
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
