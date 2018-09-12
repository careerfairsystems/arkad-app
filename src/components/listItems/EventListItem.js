import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const styles = {
  title: {
    flex: 1,
    fontSize: 16
  }
}

const { title } = styles
const EventListItem = ({ navigation, item }) => (
  <ListItem navigation={navigation} item={item}>
    <Text style={title}>{item.name}</Text>
  </ListItem>
)

EventListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default EventListItem
