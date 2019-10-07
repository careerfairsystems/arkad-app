import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  text: {
    fontSize: 14,
    marginBottom: 10,
  }
}

const { text } = styles
const DescriptionText = ({ description }) => <Text style={text}>{description}</Text>

DescriptionText.propTypes = {
  description: PropTypes.string.isRequired
}

export default DescriptionText
