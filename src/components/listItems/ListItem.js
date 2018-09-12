import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc'
  }
}

const { content } = styles
const ListItem = ({ children, navigation, item }) => (
  <TouchableHighlight
    underlayColor="#d9d9d9"
    onPress={() => navigation.navigate('Detail', { item })}
  >
    <View style={content}>{children}</View>
  </TouchableHighlight>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default ListItem
