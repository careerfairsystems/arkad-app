import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const styles = {
  title: {
    fontSize: 16
  }
}

const { title } = styles
const EventListItem = ({ navigation, item }) => (
  <ListItem navigation={navigation} item={item}>
    <Text style={title}>{item.title}</Text>
  </ListItem>
)

EventListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default EventListItem
