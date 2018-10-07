import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ApiLoadingViewContainer from '../../containers/ApiLoadingView'
import OverviewMap from '../../components/maps/OverviewMap'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#acd6ea'
  }
}

const { container } = styles
const MapScreen = ({ navigation, toggleChangeMap, maps }) => (
  <View style={container}>
    <ApiLoadingViewContainer />
    <OverviewMap navigation={navigation} toggleChangeMap={toggleChangeMap} maps={maps} />
  </View>
)

MapScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  maps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleChangeMap: PropTypes.func.isRequired
}

export default MapScreen
