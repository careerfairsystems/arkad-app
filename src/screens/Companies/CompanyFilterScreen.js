import React from 'react'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import Section from '../../components/text/Section'
import FilterSelectContainer from '../../containers/FilterSelect'

const CompanyFilterScreen = ({ allFilters }) => (
  <DetailsScreen>
    <Section title="Program">
      <FilterSelectContainer item={allFilters.desiredProgramme} />
    </Section>
    <Section title="Offers">
      <FilterSelectContainer item={allFilters.weOffer} />
    </Section>
    <Section title="Industry">
      <FilterSelectContainer item={allFilters.industry} />
    </Section>
    <Section title="Degree">
      <FilterSelectContainer item={allFilters.desiredDegree} />
    </Section>
  </DetailsScreen>
)

CompanyFilterScreen.propTypes = {
  allFilters: PropTypes.shape({
    desiredProgramme: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired)
        .isRequired
    }).isRequired,
    weOffer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired)
        .isRequired
    }).isRequired,
    industry: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired)
        .isRequired
    }).isRequired,
    desiredDegree: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired)
        .isRequired
    }).isRequired
  }).isRequired
}

export default CompanyFilterScreen
