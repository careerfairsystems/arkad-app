import React, { Component } from 'react'
import {
  View, Text, Dimensions, TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import ModalDropdown from 'react-native-modal-dropdown'

const { width } = Dimensions.get('window')
const arrow = '\u25Be'

const styles = {
  container: {
    flex: 1
  },
  button: {
    width,
    backgroundColor: 'white'
  },
  buttonText: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  dropdown: {
    width,
    height: 250
  },
  row: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 16
  }
}

class HouseScreen extends Component {
  renderRow = (rowData, rowID, highlighted) => {
    const { row, rowText } = styles
    return (
      <TouchableHighlight>
        <View style={row}>
          <Text style={[rowText, highlighted && { fontWeight: 'bold' }]}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { currentMap, maps, toggleChangeMap } = this.props
    const {
      container, button, buttonText, dropdown
    } = styles
    return (
      <View style={container}>
        <ModalDropdown
          style={button}
          textStyle={buttonText}
          dropdownStyle={dropdown}
          renderRow={this.renderRow}
          renderButtonText={rowData => `${rowData} ${arrow}`}
          options={maps}
          onSelect={idx => toggleChangeMap(maps[idx])}
          defaultIndex={maps.indexOf(currentMap)}
          defaultValue={`${currentMap} ${arrow}`}
        />
        {/* TODO: Add house map */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{currentMap}</Text>
        </View>
      </View>
    )
  }
}

HouseScreen.propTypes = {
  currentMap: PropTypes.string.isRequired,
  maps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleChangeMap: PropTypes.func.isRequired
}

export default HouseScreen
