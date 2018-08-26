import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import EventListItem from '../../components/listItems/EventListItem'

const EventsScreen = ({ navigation, eventList }) => (
  <FlatList
    data={eventList}
    renderItem={({ item }) => <EventListItem navigation={navigation} item={item} />}
  />
)

EventsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  eventList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default EventsScreen
