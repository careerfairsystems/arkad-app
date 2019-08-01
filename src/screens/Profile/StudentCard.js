import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import ActionSheet from 'react-native-actionsheet'
import FlipCard from 'react-native-flip-card'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'


const style = {
  starCount: 3.5,
  isLoading: false,
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
    height: '90%',
    width: '85%',
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
  },
  flipCardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 20,
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
    right: 0,
    width: 150,
    height: 150,
  },
  profileText: {
    top: 0,
    left: 0,
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
    // this.props.navigation.setParams({
    //     headerRight: (
    //       <View style={filterView}>
    //         <TouchableOpacity onPress={() => this.setState({flip: !this.state.flip})}>
    //           <Icon style={headerIcon} name='qrcode' size={20} color='#fff' />
    //           <Text style={buttonText}>QRcode</Text>
    //         </TouchableOpacity>
    //       </View>),
    // });
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
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
        clickable={false}>
          {/* Face Side */}
          <View style={flipCardFront}>
            <View style={{flex: 1, flexDirection: 'row', width: '100%', paddingLeft:'2%', paddingTop: 0, height: '35%', marginLeft: 15, borderRadius: 20,}}>
              <View style={{flex: 1, alignItems: 'center', width: '100%', borderRadius: 20,}}>
                <Image
                  style={cardImage}
                  source={require('../../../resources/img/arkadTeam/IMG_3758.jpg')}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'column', marginLeft: 0, borderRadius: 20,}}>
                <Text style={[profileText, {fontWeight: 'bold', fontSize: 18}]}>
                  Börje Börjesson
                </Text>
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
            </View>
            <View style={{flex: 1, flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', margin: 10}}>
              <View style={{flexDirection: 'column', width: '100%', padding: '4%', justifyContent: 'center', alignItems: 'center', height:'30%', paddingBottom: 80}}>
                <Text style={{margin: 10}}> Rate this guy!</Text>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  starSize={58}
                />
              </View>
              <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', margin: 10, padding: '4%', height:'30%', marginBottom: 30}}>
                <TextInput
                  style={{width: '100%', height: 100, borderColor: global.arkadBlue, borderWidth: 1, textAlignVertical: 'top', paddingTop: 3, paddingBottom: 3, borderRadius: 2}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  placeholder="Write your comment here..."
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={{width: '100%', marginTop: 10, height:'20%', justifyContent: 'center'}}>
                <Button title='Save'
                        onPress={() => console.log("HJSAHEKSH")}
                        loading={this.state.isLoading}
                />
              </View>
            </View>
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
