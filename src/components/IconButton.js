import React from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconButton = ({ name, onPress, styles }) => (
    <View style={styles} >
        <TouchableOpacity onPress={() => {Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody')}} style={styles}>
            <Icon name={name} size={34} color={name=='linkedin' ? global.arkadBlue : global.arkadGray} />
        </TouchableOpacity>
    </View>
)

export default IconButton
