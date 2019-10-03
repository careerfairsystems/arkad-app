import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Section from './Section'
import DescriptionText from './DescriptionText'

const styles = {
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0
  }
}

const { subtitle } = styles
const TextSubtitleSection = ({ title, subtitleSections }) => (
  <Section title={title}>
    {subtitleSections.map(
      item => (item.description !== '' ? (
        <View key={item.key}>
          <Text style={subtitle}>{item.subtitle}</Text>
          <DescriptionText description={item.description} />
        </View>
      ) : null)
    )}
  </Section>
)

TextSubtitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitleSections: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TextSubtitleSection
