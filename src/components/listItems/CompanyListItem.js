import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import SelectableListItem from './SelectableListItem'
import FavoriteButton from '../../containers/FavoriteButton'

const styles = {
  title: {
    flex: 1,
    fontSize: 16
  }
}

const { title } = styles
const CompanyListItem = ({ navigation, company }) => (
  <SelectableListItem navigation={navigation} item={company}>
    <Text style={title}>{company.name}</Text>
    <FavoriteButton company={company} color="#000" />
  </SelectableListItem>
)

CompanyListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default CompanyListItem
