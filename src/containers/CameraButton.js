import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  button: { paddingHorizontal: 16, paddingVertical: 8 },
  text: { fontSize: 16, color: '#fff' }
}

const { button, text } = styles
const CameraButton = ({ navigation }) => (
  <TouchableOpacity style={button} onPress={() =>
    (async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,{
            'title': 'AndoridPermissionExample App Camera Permission',
            'message': 'AndoridPermissionExample App needs access to your camera '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          alert("You can use the CAMERA");
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
  )
  }
  this.props.navigation.navigate('CameraScreen');
    <Text style={text}>Camera</Text>
  </TouchableOpacity>
)

//This is what happens after a student is scanned
function checkPermission() {
  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,{
          'title': 'AndoridPermissionExample App Camera Permission',
          'message': 'AndoridPermissionExample App needs access to your camera '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        alert("You can use the CAMERA");
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
this.props.navigation.navigate('CameraScreen');
}

CameraButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default CameraButton
