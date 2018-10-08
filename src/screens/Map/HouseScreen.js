import React, { Component } from 'react'
import {
  View, Text, Dimensions, TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import ModalDropdown from 'react-native-modal-dropdown'
import AnnexFloor1 from '../../components/maps/AnnexFloor1'
import AnnexFloor2 from '../../components/maps/AnnexFloor2'
import Ehuset from '../../components/maps/Ehuset'
import Karhuset from '../../components/maps/Karhuset'
import StudieFloor1 from '../../components/maps/StudieFloor1'
import StudieFloor2 from '../../components/maps/StudieFloor2'

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
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '300'
  },
  dropdown: {
    width,
    height: 300
  },
  row: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 14,
    fontWeight: '300'
  },
  mapView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#acd6ea'
  }
}

class HouseScreen extends Component {
  renderRow = (rowData, rowID, highlighted) => {
    const { row, rowText } = styles
    return (
      <TouchableOpacity>
        <View style={row}>
          <Text style={[rowText, highlighted && { fontWeight: 'bold' }]}>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderMap = (currentMap) => {
    switch (currentMap) {
      case 'Matteannexet, floor 1':
        return <AnnexFloor1 />
      case 'Matteannexet, floor 2':
        return <AnnexFloor2 />
      case 'E-huset':
        return <Ehuset />
      case 'Kårhuset':
        return <Karhuset />
      case 'Studiecentrum, floor 1':
        return <StudieFloor1 />
      case 'Studiecentrum, floor 2':
        return <StudieFloor2 />
      default:
        return <Text>Could not load map.</Text>
    }
  }

  render() {
    const { currentMap, maps, toggleChangeMap } = this.props
    const {
      container, button, buttonText, dropdown, mapView
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
        <View style={mapView}>{this.renderMap(currentMap)}</View>
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
