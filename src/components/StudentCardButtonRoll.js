import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome'

const StudentCardButtonRoll = () => (
    <View style={{flex: 1.5, flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'center'}}>
        <View>
            <TouchableOpacity>
                <Icon name="linkedin"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="linkedin"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="linkedin"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="linkedin"/>
            </TouchableOpacity>
        </View>
    </View>
)

export default StudentCardButtonRoll