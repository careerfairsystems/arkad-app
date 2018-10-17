import React from 'react'
import { SectionList } from 'react-native'
import PropTypes from 'prop-types'
import EventListItem from '../../components/listItems/EventListItem'
import SectionHeader from '../../components/SectionHeader'

const EventsScreen = ({ navigation, eventList }) => (
  <SectionList
    renderItem={({ item, section }) => {
      const newItem = item
      newItem.date = section.title
      return <EventListItem navigation={navigation} item={newItem} />
    }}
    renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
    sections={eventList}
  />
)

EventsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  eventList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          speaker: PropTypes.string.isRequired,
          startTime: PropTypes.string.isRequired,
          endTime: PropTypes.string.isRequired,
          language: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          signUpURL: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    })
  ).isRequired
}

export default EventsScreen
