import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Section from './Section'
import DescriptionText from './DescriptionText'

const styles = { buttonContainer: { marginTop: 10 } }

const { buttonContainer } = styles
const TextSection = ({ title, description, button }) => (description !== '' ? (
  <Section title={title}>
    <DescriptionText description={description} />
    {button !== null ? <View style={buttonContainer}>{button}</View> : null}
  </Section>
) : null)

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.element
}

TextSection.defaultProps = {
  button: null
}

export default TextSection
