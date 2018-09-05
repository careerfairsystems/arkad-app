import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import DropdownMenu from 'react-native-dropdown-menu'

const styles = {
  container: {
    flex: 1
  }
}

const { container } = styles
const MapScreen = ({ currentFloor, floors, toggleChangeFloor }) => (
  <View style={container}>
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

MapScreen.propTypes = {
  currentFloor: PropTypes.string.isRequired,
  floors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleChangeFloor: PropTypes.func.isRequired
}

export default MapScreen
