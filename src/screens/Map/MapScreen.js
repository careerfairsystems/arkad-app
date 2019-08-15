import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ApiLoadingViewContainer from '../../containers/ApiLoadingView'
import OverviewMap from '../../containers/OverviewMap'
import OverlayMap from '../../components/OverlayMap'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: global.arkadLightBlue
  }
}

function checkDate() {
  var startDate = new Date("11/13/2019");
  var todaysDate = new Date();

  if(startDate.setHours(0,0,0,0) <= todaysDate.setHours(0,0,0,0)) {
   return true
  } else {
   return false
  }
}

const { container } = styles
const MapScreen = ({ navigation }) => (
  <View style={container}>
    <OverviewMap navigation={navigation} />
    { !checkDate() ? <OverlayMap /> : null}
  </View>
)

MapScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default MapScreen
