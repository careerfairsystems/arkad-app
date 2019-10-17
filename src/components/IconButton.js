import React from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconButton = ({ name, onPress, styles, data }) => (
    <View style={styles} >
        <TouchableOpacity onPress={() => {Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody')}} style={styles}>
            <Icon name={name} size={34} color={isEmpty(data) ? global.arkadGray : global.arkadBlue} />
        </TouchableOpacity>
    </View>
)

function isEmpty(str) {
    return (!str || 0 === str.length);
}

export default IconButton
