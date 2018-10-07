import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const SelectableListItem = ({ children, navigation, item }) => (
  <TouchableHighlight
    underlayColor="#d9d9d9"
    onPress={() => navigation.navigate('Detail', { item })}
  >
    <View>
      <ListItem>{children}</ListItem>
    </View>
  </TouchableHighlight>
)

SelectableListItem.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default SelectableListItem
