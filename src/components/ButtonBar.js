import React from 'react'
import { View, TouchableOpacity, Image, Linking } from 'react-native'
import IconButton from './IconButton'


const styles = {
  bar: {
    flex: .7,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    color: 'rgba(0, 43, 100, 1)'
  }
}

// Icon button takes an onPress() function as a prop
const ButtonBar = ({phone, linkedin, email_adr}) => (
  <View style={styles.bar}>
    <View style={styles.button}>
      <IconButton name='linkedin' data={linkedin} />
    </View>
    <View style={styles.button}>
      <TouchableOpacity>
        <Image style={{width: 34, height: 34}} source={require('./../../resources/img/arkadCV.png')}/>
      </TouchableOpacity>
    </View>
    <View style={styles.button}>
        <IconButton name='envelope' data={email_adr} onPress={() => {Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody')}} />
    </View>
    <View style={styles.button}>
        <IconButton name='phone'data={phone} />
    </View>
  </View>
)

export default ButtonBar
