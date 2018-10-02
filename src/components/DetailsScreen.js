import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    padding: 16,
    backgroundColor: '#fff'
  }
}

const { content } = styles
const DetailsScreen = ({ children }) => (
  <ScrollView contentContainerStyle={content}>{children}</ScrollView>
)

DetailsScreen.propTypes = {
  children: PropTypes.node.isRequired
}

export default DetailsScreen
