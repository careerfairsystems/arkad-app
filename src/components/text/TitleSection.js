import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import DescriptionText from './DescriptionText'

const styles = {
  content: {
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: global.arkadBlue
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8
  }
}

const { content, sectionTitle } = styles
const TitleSection = ({ title, description }) => (title !== '' ? (
  <View style={content}>
    <Text style={sectionTitle}>{title}</Text>
    <DescriptionText description={description} />
  </View>
) : null)

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TitleSection
