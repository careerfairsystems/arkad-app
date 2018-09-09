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
const CompanyListItem = ({ navigation, company }) => (
  <ListItem navigation={navigation} item={company}>
    <Text style={title}>{company.name}</Text>
    <FavoriteButton company={company} />
  </ListItem>
)

CompanyListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  company: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default CompanyListItem
