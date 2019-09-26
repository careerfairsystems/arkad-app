import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, PermissionsAndroid, Alert,Platform } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import Permissions from 'react-native-permissions'
import AsyncStorage from '@react-native-community/async-storage'

const styles = {
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: 'transparent',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: global.arkadBlue,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    borderRadius: 80,
    shadowOffset: {
    	width: 0,
    	height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 80,
    elevation: 13,
  },
  text: {
    fontSize: 16,
    color: '#fff'
  }
}

const { container, button, text } = styles
const CameraButton = ({ navigation, cameraPermissionGiven, setCameraPermission }) => (
  <View style={container}>
    <TouchableOpacity style={button} onPress={() => alertForPhotosPermission(navigation, cameraPermissionGiven, setCameraPermission)}>
      <Icon name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  </View>
)

//This is what happens after a student is scanned
function checkPermission(navigation) {
  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,{
          'title': 'ARKAD Camera Permission',
          'message': 'In order to Scan QR-codes the App needs access to your Camera. Click anywhere to continue '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        //alert("You can use the CAMERA");
        navigation.navigate('CameraScreen');
      } else {
        alert("CAMERA permission denied");
      }
    } catch (err) {
      alert("err",err);
      console.warn(err)
    }
  }
  if (Platform.OS === 'android') {
      //Calling the permission function
      requestCameraPermission();
  }else{
      alert('IOS device found');
  }

}

async function reqPermissions(navigation, setCameraPermission) {
  await Permissions.request('camera')
  setCameraPermission()
  navigation.navigate('CameraScreen')
}

function alertForPhotosPermission(navigation, cameraPermissionGiven, setCameraPermission) {
  {cameraPermissionGiven ?
  navigation.navigate('CameraScreen')
  :Alert.alert(
    'Can we access your camera?',
    'We need access to scan student QR-Codes',
    [
      {
        text: 'No',
        onPress: () => console.log('Permission denied'),
        style: 'cancel',
      },
         {text: 'Yes', onPress: () => reqPermissions(navigation, setCameraPermission)}
    ],
  )
  }
}


CameraButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default CameraButton
