import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import TextSection from '../../components/text/TextSection'
import TextSubtitleSection from '../../components/text/TextSubtitleSection'

const styles = {
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
}

const { button, text } = styles
const AboutScreen = ({ navigation, aboutUs, openingHours }) => (
  <DetailsScreen>
    <TextSection title="About ARKAD" description={aboutUs} />
    <TextSubtitleSection
      title="Opening hours"
      subtitleSections={openingHours.map((openingHour, index) => ({
        key: index.toString(),
        subtitle: openingHour.date,
        description: openingHour.time
      }))}
    />
    <TouchableHighlight style={button} onPress={() => navigation.navigate('ArkadTeam')}>
      <Text style={text}>The ARKAD team</Text>
    </TouchableHighlight>
    <TouchableHighlight style={button} onPress={() => navigation.navigate('Faq')}>
      <Text style={text}>Questions? Check out our FAQ!</Text>
    </TouchableHighlight>
  </DetailsScreen>
)

AboutScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  aboutUs: PropTypes.string.isRequired,
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({ date: PropTypes.string.isRequired, time: PropTypes.string.isRequired })
      .isRequired
  ).isRequired
}

export default AboutScreen
