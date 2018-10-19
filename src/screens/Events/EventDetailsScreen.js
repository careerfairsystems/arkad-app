import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Alert } from 'react-native'
import DetailsScreen from '../../components/DetailsScreen'
import TitleSection from '../../components/text/TitleSection'
import TextSection from '../../components/text/TextSection'
import Button from '../../components/Button'

const openUrl = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url)
      } else {
        Alert.alert(`Could not open URL: ${this.url}`)
      }
    })
    .catch(err => Alert.alert(`Could not open URL: ${err}`))
}

const EventDetailsScreen = ({ navigation }) => {
  const event = navigation.state.params.item
  let description = ''
  if (event.speaker !== '') {
    description += `Speaker:\t${event.speaker}\n`
  }
  if (event.language !== '') {
    description += `Language:\t${event.language}\n`
  }
  description += `Location:\t${event.location}\nDate:\t\t${event.date} ${event.startTime}-${
    event.endTime
  }`
  return (
    <DetailsScreen>
      <TitleSection title={event.name} description={description} />
      <TextSection
        title="Description"
        description={event.description}
        button={<Button title="Sign up!" onPress={() => openUrl(event.signUpURL)} />}
      />
    </DetailsScreen>
  )
}

EventDetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default EventDetailsScreen
