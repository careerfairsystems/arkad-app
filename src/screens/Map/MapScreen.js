import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ApiLoadingViewContainer from '../../containers/ApiLoadingView'
import OverviewMap from '../../containers/OverviewMap'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: global.arkadLightBlue
  }
}

const { container } = styles
const MapScreen = ({ navigation }) => (
  <View style={container}>
    <ApiLoadingViewContainer />
    <OverviewMap navigation={navigation} />
  </View>
)

MapScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default MapScreen
