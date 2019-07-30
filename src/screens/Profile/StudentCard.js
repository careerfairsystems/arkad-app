import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
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
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingRight: 100,
    paddingLeft: 100,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
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
    marginBottom: 40,
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
  cardImage: {
    borderRadius: 100,
    top: 0,
    right: 100,
    width: 150,
    height: 150,
  },
  profileText: {
    top: '-30%',
    left: 75,
    fontSize: 14,
    marginBottom: 10,
  },
}

const { container, flipCard, flipCardFront, flipCardBack, qrText, button, text, filterView, headerIcon, buttonText, cardImage, profileText } = style

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
              <Image
                style={cardImage}
                source={require('../../../resources/img/arkadTeam/IMG_3758.jpg')}
              />
              <Text style={[profileText, {fontWeight: 'bold', fontSize: 18}]}>
                Börje Börjesson
              </Text>
              <Text style={[profileText ,{fontWeight:'bold'}]}> here</Text>
              <Text style={profileText}>
                Computer Science
              </Text>
              <Text style={profileText}>
                Year: 4
              </Text>
              <Text style={profileText}>
                Master: Software Engineering
              </Text>
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
