import React from 'react'
import {
  Dimensions, TouchableOpacity, View, Text, Platform
} from 'react-native'
import PropTypes from 'prop-types'
import ModalDropdown from 'react-native-modal-dropdown'

const { width, height } = Dimensions.get('window')
const arrow = '\u25Be'

const styles = {
  button: Platform.OS === 'ios' ? { width } : {},
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  },
  dropdown: {
    marginTop: Platform.OS === 'ios' ? 11 : 14,
    height: height * 0.4,
    ...Platform.select({
      ios: {
        width
      }
    })
  },
  row: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 14
  }
}

const renderRow = (rowData, rowID, highlighted) => {
  const { row, rowText } = styles
  return (
    <TouchableOpacity>
      <View style={row}>
        <Text style={[rowText, highlighted && { fontWeight: 'bold' }]}>{rowData}</Text>
      </View>
    </TouchableOpacity>
  )
}

const { button, buttonText, dropdown } = styles
const Dropdown = ({
  currentMap, maps, toggleChangeMap, toggleChangeCompany
}) => (
  <ModalDropdown
    defaultIndex={maps.indexOf(currentMap)}
    defaultValue={`${currentMap} ${arrow}`}
    options={maps}
    style={button}
    textStyle={buttonText}
    dropdownStyle={dropdown}
    renderRow={renderRow}
    renderButtonText={rowData => `${rowData} ${arrow}`}
    onSelect={(idx) => {
      toggleChangeMap(maps[idx])
      toggleChangeCompany(0)
    }}
  />
)

Dropdown.propTypes = {
  currentMap: PropTypes.string.isRequired,
  maps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleChangeMap: PropTypes.func.isRequired,
  toggleChangeCompany: PropTypes.func.isRequired
}

export default Dropdown
