import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: global.separatorColor
  }
}

const { content } = styles
const ListItem = ({ children }) => <View style={content}>{children}</View>

ListItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default ListItem
