import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: global.lightGray,
    borderBottomWidth: 1,
    borderColor: global.separatorColor
  }
}

const { sectionHeader } = styles
const SectionHeader = ({ title }) => (title !== '' ? (
  <View style={sectionHeader}>
    <Text>{title}</Text>
  </View>
) : null)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeader
