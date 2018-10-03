import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ApiLoadingView from '../../components/ApiLoadingView'
import OverviewMap from '../../components/maps/OverviewMap'

const styles = {
  view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#acd6ea'
  }
}

class MapScreen extends Component {
  componentDidMount() {
    const { loadCompanies } = this.props
    loadCompanies()
  }

  render() {
    const {
      loading, error, loadCompanies, navigation, toggleChangeMap, maps
    } = this.props
    const { view } = styles
    return (
      <View style={view}>
        <OverviewMap navigation={navigation} toggleChangeMap={toggleChangeMap} maps={maps} />
      </View>
    )
  }
}
// <ApiLoadingView loading={loading} error={error} loadCompanies={loadCompanies} />

MapScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadCompanies: PropTypes.func.isRequired,
  maps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleChangeMap: PropTypes.func.isRequired
}

export default MapScreen
