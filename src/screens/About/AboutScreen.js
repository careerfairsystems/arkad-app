import React from 'react'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import DisplayImage from '../../components/DisplayImage'
import TextSection from '../../components/text/TextSection'
import TextSubtitleSection from '../../components/text/TextSubtitleSection'
import Button from '../../components/Button'

const AboutScreen = ({
  navigation, aboutUs, openingHours, aboutArkadTeam, aboutFAQ
}) => (
  <DetailsScreen>
    <DisplayImage source={require('../../../resources/img/arkad_logo.png')} />
    <TextSection title="About ARKAD" description={aboutUs} />
    <TextSubtitleSection
      title="Opening hours"
      subtitleSections={openingHours.map((openingHour, index) => ({
        key: index.toString(),
        subtitle: openingHour.date,
        description: openingHour.time
      }))}
    />
    <TextSection
      title="The ARKAD organization"
      description={aboutArkadTeam}
      button={<Button title="The ARKAD team" onPress={() => navigation.navigate('ArkadTeam')} />}
    />
    <TextSection
      title="FAQ"
      description='If you have any unanswered questions try looking in our FAQ.'
      button={<Button title="FAQ" onPress={() => navigation.navigate('Faq')} />}
    />
  </DetailsScreen>
)

AboutScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  aboutUs: PropTypes.string.isRequired,
  aboutArkadTeam: PropTypes.string.isRequired,
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({ date: PropTypes.string.isRequired, time: PropTypes.string.isRequired })
      .isRequired
  ).isRequired
}

export default AboutScreen
