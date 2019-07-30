import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import ActionSheet from 'react-native-actionsheet'
import FlipCard from 'react-native-flip-card'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/FontAwesome'


const style = {
  flipCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 20,
    height: '100%',
    padding: 0,
    backgroundColor: '#fff',
  },
  flipCardFront: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 0,
    backgroundColor: '#fff',
  },
  flipCardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  qrText: {
    textAlign: 'center',
    fontSize: 20,
    width: '100%',
    color: global.arkadBlue
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  headerIcon: {
    paddingHorizontal: 14,
    alignItems: 'center'
  },
  filterView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 65,
    paddingLeft: 1
  },
  buttonText: {
    fontSize: 12,
    right: 0,
    color: global.arkadGray
  },
}

const { container, flipCard, flipCardFront, flipCardBack, qrText, button, text, filterView, headerIcon, buttonText } = style

class StudentCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flip: false,
    }
    this.props.navigation.setParams({
        headerRight: (
          <View style={filterView}>
            <TouchableOpacity onPress={() => this.setState({flip: !this.state.flip})}>
              <Icon style={headerIcon} name='qrcode' size={20} color='#fff' />
              <Text style={buttonText}>QRcode</Text>
            </TouchableOpacity>
          </View>),
        header: undefined
    });
  }


  render() {
    const actionSheetOptions = [
      "favoriteButtonText",
      'Cancel'
    ]
    return(
        <FlipCard
        style={flipCard}
        flipHorizontal={true}
        flipVertical={false}
        friction={10}
        flip={this.state.flip}
        clickable={true}>
          {/* Face Side */}
          <View style={flipCardFront}>
            <Text>iasjdioasdjaiodsjaiodsjaiodjaoidjaoidjaiodjioajsd</Text>
          </View>
          {/* Back Side */}
          <View style={flipCardBack}>
            <Text style={qrText}>
              Your personal QR-code. Use it well!
            </Text>
            <QRCode
              value="www.google.se"
              size={300}
              bgColor='rgb(0, 43, 100)'
              fgColor='#fff'/>
          </View>
        </FlipCard>

    )
  }
}

export default StudentCard
