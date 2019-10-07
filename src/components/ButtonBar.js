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
        paddingLeft: 10
    }
}

// Icon button takes an onPress() function as a prop
const ButtonBar = () => (
        <View style={styles.bar}>
            <View style={styles.button}>
                <IconButton name='linkedin' />
            </View>
            <View style={styles.button}>
                <IconButton name='facebook' />
            </View>
            <View style={styles.button}>
                <IconButton name='phone' />
            </View>
            <View style={styles.button}>
                <IconButton name='envelope' />
            </View>
        </View>
)

export default ButtonBar
