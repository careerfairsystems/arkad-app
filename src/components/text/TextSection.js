import React from 'react'
import PropTypes from 'prop-types'
import Section from './Section'
import DescriptionText from './DescriptionText'

const TextSection = ({ title, description }) => (description !== '' ? (
  <Section title={title}>
    <DescriptionText description={description} />
  </Section>
) : null)

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TextSection
