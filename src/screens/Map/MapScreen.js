import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import DropdownMenu from 'react-native-dropdown-menu'
import ApiLoadingView from '../../components/ApiLoadingView'

const styles = {
  container: {
    flex: 1
  }
}

class MapScreen extends Component {
  componentDidMount() {
    const { loadCompanies } = this.props
    loadCompanies()
  }

  render() {
    const {
      currentFloor, floors, loading, error, toggleChangeFloor, loadCompanies
    } = this.props
    const { container } = styles
    return (
      <View style={container}>
        <ApiLoadingView loading={loading} error={error} loadCompanies={loadCompanies} />
        <DropdownMenu
          bgColor="white"
          tintColor="black"
          activityTintColor="green"
          handler={(selection, row) => toggleChangeFloor(floors[row])}
          data={[floors]}
        >
          <View>
            <Text>{currentFloor}</Text>
          </View>
        </DropdownMenu>
      </View>
    )
  }
}

MapScreen.propTypes = {
  currentFloor: PropTypes.string.isRequired,
  floors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  toggleChangeFloor: PropTypes.func.isRequired,
  loadCompanies: PropTypes.func.isRequired
}

export default MapScreen
