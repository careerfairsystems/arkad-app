import React from 'react'
import { SectionList } from 'react-native'
import PropTypes from 'prop-types'
import ArkadTeamListItem from '../../components/listItems/ArkadTeamListItem'
import SectionHeader from '../../components/SectionHeader'

const ArkadTeamScreen = ({ arkadTeam }) => (
  <SectionList
    renderItem={({ item }) => <ArkadTeamListItem person={item} />}
    renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
    sections={arkadTeam}
  />
)

ArkadTeamScreen.propTypes = {
  arkadTeam: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          role: PropTypes.string.isRequired,
          image: PropTypes.number.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
}

export default ArkadTeamScreen
