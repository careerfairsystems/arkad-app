import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'
import ActionSheet from 'react-native-actionsheet'

const styles = {
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 4,
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  }
}

const { button, buttonText } = styles
class MapActionSheet extends Component {
  render() {
    const {
      currentMap, maps, toggleChangeMap, toggleChangeCompany
    } = this.props
    const actionSheetOptions = [...maps, 'Cancel']
    return (
      <View>
        <TouchableOpacity style={button} onPress={() => this.actionSheet.show()}>
          <Text style={buttonText}>{currentMap}</Text>
          <Icon name="chevron-down" size={20} color="#fff" />
        </TouchableOpacity>
        <ActionSheet
          ref={(ref) => {
            this.actionSheet = ref
          }}
          title="Choose an option"
          options={actionSheetOptions}
          cancelButtonIndex={actionSheetOptions.length - 1}
          destructiveButtonIndex={maps.indexOf(currentMap)}
          onPress={(index) => {
            switch (index) {
              case actionSheetOptions.length - 1:
                break
              default:
                toggleChangeMap(maps[index])
                toggleChangeCompany(0)
            }
          }}
        />
      </View>
    )
  }
}

MapActionSheet.propTypes = {
  currentMap: PropTypes.string.isRequired,
  maps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleChangeMap: PropTypes.func.isRequired,
  toggleChangeCompany: PropTypes.func.isRequired
}

export default MapActionSheet
