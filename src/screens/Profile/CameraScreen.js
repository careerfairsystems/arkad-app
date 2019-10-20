import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import {View, Text, StyleSheet } from 'react-native';
import LoadingView from '../../components/LoadingView'
import SaveSuccess from '../../components/SaveSuccess'


class CameraScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      allow: true
    }
  }


  render() {
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <CameraKitCameraScreen
          style={{width: '100%', height: '100%'}}
          scanBarcode={true}
          laserColor={"transparent"}
          frameColor={"yellow"}
          onReadCode={((event) => this.onScanned(event)) } //optional
          hideControls={true}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
          showFrame={true}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          offsetForScannerFrame = {10}   //(default 30) optional, offset from left and right side of the screen
          heightForScannerFrame = {300}  //(default 200) optional, change height of the scanner frame
          colorForScannerFrame = {'red'} //(default white) optional, change colot of the scanner frame
        />
        {this.props.loading
          ?
          <View style={{position: 'absolute', width: '100%', height: '100%', zIndex: 100, alignItems: 'center', justifyContent: 'center'}}>
            <LoadingView />
          </View>
          : null
        }
      </View>
    )
  }

  //This is what happens after a student is scanned
  async onScanned(event) {
    if (this.state.allow) {
      this.setState({
        allow: false
      })
      await this.props.createBlip(event.nativeEvent.codeStringValue.split("/")[4])
      this.fetchBlips()
    }
  }

  async fetchBlips() {
    await this.props.getBlips()
    this.props.navigation.navigate('ProfileStack')
  }
}

CameraScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default CameraScreen
