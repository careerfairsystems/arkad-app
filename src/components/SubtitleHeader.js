import React from 'react'
import { Platform, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  container: {
    ...Platform.select({
      ios: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      android: {
        marginLeft: 16
      }
    })
  },
  titleText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  },
  subtitleText: { fontSize: 12, color: '#fff' }
}

const { container, titleText, subtitleText } = styles
const SubtitleHeader = ({ title, subtitle }) => (
  <View style={container}>
    <Text style={titleText}>{title}</Text>
    <Text style={subtitleText}>{subtitle}</Text>
  </View>
)

SubtitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default SubtitleHeader
