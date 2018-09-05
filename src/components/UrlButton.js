import React, { Component } from 'react'
import {
  TouchableHighlight, Text, Linking, Alert
} from 'react-native'
import PropTypes from 'prop-types'

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

class UrlButton extends Component {
  constructor(props) {
    super(props)
    this.openUrl = this.openUrl.bind(this)
  }

  openUrl(url) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url)
      } else {
        Alert.alert(`Could not open URL: ${this.url}`)
      }
    })
  }

  render() {
    const { buttonText, url } = this.props
    const { button, text } = styles
    return url !== '' ? (
      <TouchableHighlight style={button} onPress={() => this.openUrl(url)}>
        <Text style={text}>{buttonText}</Text>
      </TouchableHighlight>
    ) : null
  }
}

UrlButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default UrlButton
