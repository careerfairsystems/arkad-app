import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  sectionHeader: {
    padding: 8,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
}

const { sectionHeader } = styles
const SectionHeader = ({ title }) => (
  <View style={sectionHeader}>
    <Text>{title}</Text>
  </View>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeader
