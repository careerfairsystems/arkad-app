import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: global.separatorColor,
    height: 80,
  }
}

const { content } = styles
const HighListItem = ({ children }) => <View style={content}>{children}</View>

HighListItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default HighListItem
