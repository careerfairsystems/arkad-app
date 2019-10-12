import React from 'react'
import { View } from 'react-native'
import IconButton from './IconButton'


const styles = {
    bar: {
        flex: 1.5,
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        color: 'rgba(0, 43, 100, 1)'
    }
}

// Icon button takes an onPress() function as a prop
const ButtonBar = () => (
        <View style={styles.bar}>
            <View style={styles.button}>
                <IconButton name='linkedin' />
            </View>
            <View style={styles.button}>
                <IconButton name='file-o' />
            </View>
            <View style={styles.button}>
                <IconButton name='phone'data="0767711123" />
            </View>
            <View style={styles.button}>
                <IconButton name='envelope' />
            </View>
        </View>
)

export default ButtonBar
