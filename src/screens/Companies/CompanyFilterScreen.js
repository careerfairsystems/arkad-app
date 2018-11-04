import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import Section from '../../components/text/Section'
import FilterSelectContainer from '../../containers/FilterSelect'
import Button from '../../components/Button'

const CompanyFilterScreen = ({ navigation, filters }) => (
  <DetailsScreen>
    <Section title="Program">
      <FilterSelectContainer item={filters.desiredProgramme} />
    </Section>
    <Section title="Offers">
      <FilterSelectContainer item={filters.weOffer} />
    </Section>
    <Section title="Industry">
      <FilterSelectContainer item={filters.industry} />
    </Section>
    <Section title="Degree">
      <FilterSelectContainer item={filters.desiredDegree} />
    </Section>
    <View style={{ paddingVertical: 8 }}>
      <Button title="Done" onPress={() => navigation.goBack()} />
    </View>
  </DetailsScreen>
)

CompanyFilterScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  filters: PropTypes.shape({
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
