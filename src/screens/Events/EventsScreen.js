import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import EventListItem from '../../components/listItems/EventListItem'
import { EVENT_DATA } from '../../helpers/DummyData'

const EventsScreen = ({ navigation }) => (
  <FlatList
    data={EVENT_DATA}
    renderItem={({ item }) => (
      <EventListItem navigation={navigation} item={item} />
    )}
  />
)

EventsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired
}

export default EventsScreen
