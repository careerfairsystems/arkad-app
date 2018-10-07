import React from 'react'
import { View } from 'react-native'
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
const ListItem = ({ children }) => <View style={content}>{children}</View>

ListItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default ListItem
