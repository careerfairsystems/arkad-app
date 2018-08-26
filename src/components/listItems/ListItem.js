import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
}

const { content } = styles
const ListItem = ({ children, navigation, item }) => (
  // TODO: implement navigation when stack navigator is added
  // E.g. <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
  <TouchableOpacity>
    <View style={content}>{children}</View>
  </TouchableOpacity>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default ListItem
