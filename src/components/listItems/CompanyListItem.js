import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import FavoriteButton from '../../containers/FavoriteButton'

const styles = {
  title: {
    flex: 1,
    fontSize: 16
  }
}

const { title } = styles
const CompanyListItem = ({ navigation, item }) => (
  <ListItem navigation={navigation} item={item}>
    <Text style={title}>{item.name}</Text>
    <FavoriteButton item={item} />
  </ListItem>
)

CompanyListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default CompanyListItem
