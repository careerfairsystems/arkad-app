import React from 'react'
import { TouchableOpacity, Linking, Alert, Image } from 'react-native'

const CVButton = ({ name, data }) => (
  <TouchableOpacity onPress={() => openUrl(data)}>
    <Image style={{width: 34, height: 34}} source={iconChoose(name,data)}/>
  </TouchableOpacity>
)

function iconChoose(name, data){
  if(name === 'CV_SV'){
    if(data === 'Not set'){
      return require('./../../resources/img/CV_SV_Gray.png');
    } else {
      return require('./../../resources/img/CV_SV_Blue.png');
    }
  }
  if(name === 'CV_EN'){
    if(data === 'Not set'){
      return require('./../../resources/img/CV_EN_Gray.png');
    } else {
      return require('./../../resources/img/CV_EN_Blue.png');
    }
  }
  return null;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

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

export default CVButton
