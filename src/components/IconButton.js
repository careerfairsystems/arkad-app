import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconButton = ({ name, onPress, styles }) => (
    <View style={styles} >
        <TouchableOpacity onPress={onPress} style={styles}>
            <Icon name={name} size={34} />
        </TouchableOpacity>
    </View>
)

export default IconButton