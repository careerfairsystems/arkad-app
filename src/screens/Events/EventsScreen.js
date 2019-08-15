import React from 'react'
import { SectionList, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import EventListItem from '../../components/listItems/EventListItem'
import SectionHeader from '../../components/SectionHeader'

const EventsScreen = ({ navigation, eventList }) => {
  if (!checkDate()) {
    return (
      <View style={styles.constructionContainer}>
        <Text style={styles.constructionText}>Waiting for events</Text>
        <Text style={styles.infoText}>
          When the career fair approaches, the events available during the fair will be visible here!
        </Text>
      </View>
    )
  }
  <SectionList
    renderItem={({ item, section }) => {
      const newItem = item
      newItem.date = section.title
      return <EventListItem navigation={navigation} item={newItem} />
    }}
    renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
    sections={eventList}
  />
}

function checkDate() {
  var startDate = new Date("11/13/2019");
  var todaysDate = new Date();
  console.log(startDate)
  console.log(todaysDate)

  if(startDate.setHours(0,0,0,0) <= todaysDate.setHours(0,0,0,0)) {
      return true
  } else {
    return false
  }
}

const styles = {
  constructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 43, 100, 0.9)',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  constructionText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 36,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '500'
  },
  infoText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '400'
  }
}

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
