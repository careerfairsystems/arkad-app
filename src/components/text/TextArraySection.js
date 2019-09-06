import React from 'react'
import PropTypes from 'prop-types'
import Section from './Section'
import DescriptionText from './DescriptionText'

const TextArraySection = ({ title, descriptionArray }) => (descriptionArray.length !== 0 ? (
  <Section title={title}>
    <DescriptionText description={descriptionArray.join('\n')} />
  </Section>
) : null)

TextArraySection.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default TextArraySection
