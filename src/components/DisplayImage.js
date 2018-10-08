import React from 'react'
import { Dimensions, View, Image } from 'react-native'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')
const height = width * 0.3

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    height,
    borderBottomWidth: 2,
    borderColor: global.arkadBlue,
    padding: 8
  }
}

const { container } = styles
const DisplayImage = ({ source }) => (
  <View style={container}>
    <Image
      style={{
        flex: 1,
        width: null,
        height: null
      }}
      source={source}
      resizeMode="contain"
    />
  </View>
)

DisplayImage.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string.isRequired }).isRequired,
    PropTypes.number.isRequired
  ]).isRequired
}

export default DisplayImage
