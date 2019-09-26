import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import {View, Text,  StyleSheet } from 'react-native';


class CameraScreen extends Component {
  constructor(props){
    super(props)

}


render() {

  return(
  [<View style={{position:'absolute', left:'0%', top:'10%', width:'100%', zIndex:10000, alignItems:'center', textAlign:'center', justifyContent:'center'}}>
    <Text style={{marginHorizontal:'15%', alignItems:'center', textAlign:'center', justifyContent:'center', color:'#fff', fontSize:16}}>Scan a students QR-code to add them to you companies list of students.</Text>
    <Text style={{marginHorizontal:'15%', alignItems:'center', textAlign:'center', justifyContent:'center', color:'#D3D3D3', fontSize:14}}>The QR-code is located on the back of the students flipcard on their profile.</Text>
  </View>,
  <CameraKitCameraScreen
  style={{position:'absolute', zIndex:1}}
  scanBarcode={true}
  laserColor={"transparent"}
  frameColor={"yellow"}

  //onReadQRCode={((event) => this.props.navigation.navigate('Friends')) } //optional
  onReadCode={((event) => this.onScanned(event)) } //optional
  hideControls={true}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
  showFrame={true}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
  offsetForScannerFrame = {10}   //(default 30) optional, offset from left and right side of the screen
  heightForScannerFrame = {300}  //(default 200) optional, change height of the scanner frame
  colorForScannerFrame = {'red'} //(default white) optional, change colot of the scanner frame
  />]
)
}

//This is what happens after a student is scanned
onScanned(event) {
console.log( event.nativeEvent.codeStringValue  );
this.props.navigation.navigate('Faq');
}

}

CameraScreen.propTypes = {
navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default CameraScreen
