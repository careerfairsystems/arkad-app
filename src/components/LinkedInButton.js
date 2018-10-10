import React from 'react'
import { TouchableOpacity, Linking, Alert } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

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

const LinkedInButton = ({ url }) => (url !== '' ? (
  <TouchableOpacity onPress={() => openUrl(url)}>
    <Icon name="linkedin-square" size={25} color="#0077B5" />
  </TouchableOpacity>
) : null)

LinkedInButton.propTypes = {
  url: PropTypes.string
}

LinkedInButton.defaultProps = { url: '' }

export default LinkedInButton
