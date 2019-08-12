import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, PermissionsAndroid, Alert,Platform } from 'react-native';
import PropTypes from 'prop-types'

const styles = {
  button: { paddingHorizontal: 16, paddingVertical: 8 },
  text: { fontSize: 16, color: '#fff' }
}

const { button, text } = styles
const CameraButton = ({ navigation }) => (
  <TouchableOpacity style={button} onPress={() => checkPermission(navigation)}>
    <Text style={text}>Camera</Text>
  </TouchableOpacity>
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

CameraButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default CameraButton
