import React from 'react'
import { View, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import IconButton from './IconButton'
import CVButton from './CVButton'


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
const ButtonBar = ({linkedin, email_adr, cvsv, cven}) => (
  <View style={styles.bar}>
    <View style={styles.button}>
      <IconButton name='linkedin' data={linkedin} />
    </View>
    <View style={styles.button}>
      <CVButton name='CV_SV' data={cvsv}></CVButton>
    </View>
    <View style={styles.button}>
      <CVButton name='CV_EN' data={cven}></CVButton>
    </View>
    <View style={styles.button}>
        <IconButton name='envelope' data={email_adr} onPress={() => {Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody')}} />
    </View>
  </View>
)

const openUrl = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url)
      } else {
        Alert.alert(`Could not open URL: ${this.url}`)
      }
    })
    .catch(err => Alert.alert(`Could not open URL: ${err}`))
}

export default ButtonBar
