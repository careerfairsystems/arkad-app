import React from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconButton = ({ name, onPress, data }) => (
  <TouchableOpacity onPress={() => {Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody')}}>
    <Icon name={name} size={34} color={isEmpty(data) ? global.arkadGray : global.arkadBlue} style={{height: 34}} />
  </TouchableOpacity>
)

function isEmpty(str) {
    return (!str || 0 === str.length);
}

export default IconButton
