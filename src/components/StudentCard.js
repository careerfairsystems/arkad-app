import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, Image, SectionList, RefreshControl, Dimensions, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'
import ActionSheet from 'react-native-actionsheet'
import FlipCard from 'react-native-flip-card'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'
import LogoutButton from '../containers/LogoutButton'
import RemoveButton from '../containers/RemoveButton'
import LinkedInButton from './LinkedInButton'
import StudentListItem from './listItems/StudentListItem'
import SectionHeader from './SectionHeader'
import ButtonBar from './ButtonBar'


const style = {
  starCount: 3.5,
  isLoading: false,
  flipCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',

  },
  flipCardFront: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    padding: "5%",
  },
  flipCardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: "90%",
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: "5%",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  qrText: {
    textAlign: 'center',
    fontSize: 14,
    width: '100%',
    marginBottom: 20,
    color: global.arkadBlue
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: global.arkadBlue,
    borderRadius: 8,
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
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 65,
    paddingLeft: 1
  },
  buttonText: {
    fontSize: 12,
    right: 0,
    color: global.arkadGray
  },
  cardImage: {
    top: 0,
    right: 0,
    width: 125,
    height: 125,
    borderRadius: 8,
  },
  profileText: {
    fontSize: 12,
    marginBottom: 6,
  },
  flip: false,
  modalText: {
    fontSize: 16,
    color: '#fff'
  }
}

const { container, flipCard, flipCardFront, flipCardBack, qrText, button, text, filterView, headerIcon, buttonText, cardImage, profileText, modalText, starCount } = style

function process(obj) {
  for (var i in obj) {
    var child = obj[i]
    if (child === "")
      obj[i] = "Not set"
    if (child === null)
      obj[i] = "Not set"
    else if (typeof(child)=="object")
      process(child);
  }
}

function studentLogin(student, navigation, myInfo, loading) {
  process(myInfo)
  return(
      <View style={flipCardFront}>
      <ScrollView style={{flex: 1, width: '100%', height: '100%'}}>
        <View style={{flex: 5, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 30, height: '100%'}}>
          { myInfo.profile_image == 'Not set' ?
            <Image
              style={cardImage}
              source={require('../../resources/img/arkadTeam/default.png')}
            />
            :
            <Image
              style={cardImage}
              source={{uri: myInfo.profile_image}}
            />
          }
          <Text style={{fontWeight: 'bold', fontSize: 22, marginVertical: '5%'}}>
            {myInfo.first_name} {myInfo.last_name}
          </Text>
        </View>
        <View style={{flex: 10, width: '100%', padding: '5%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 150}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Text style={[profileText, {fontWeight: 'bold'}]}>
                Programme:
              </Text>
            </View>
            <View style={{width: '70%'}}>
              <Text style={profileText}>
                {myInfo.student.programme == "Not set" ? "Not set" : myInfo.student.programme.name}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Text style={[profileText, {fontWeight: 'bold'}]}>
                Graduation:
              </Text>
            </View>
            <View style={{width: '70%'}}>
              <Text style={profileText}>
                {myInfo.student.year}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Text style={[profileText, {fontWeight: 'bold'}]}>
                Master:
              </Text>
            </View>
            <View style={{width: '70%'}}>
              <Text style={profileText}>
                {myInfo.student.master}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Text style={[profileText, {fontWeight: 'bold'}]}>
                Interested in:
              </Text>
            </View>
            <View style={{width: '70%'}}>
              <Text style={profileText}>
                {myInfo.student.interests == null ? "Not set" : getInterestNames(myInfo.student.interests)}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 10, flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', height: 60}}>
          <View style={{flex: 5, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 4}}>
            <ButtonBar linkedin={myInfo.student.linked_in} email_adr={myInfo.email} cvsv={myInfo.student.resume_sv_url} cven={myInfo.student.resume_en_url}/>
          </View>
        </View>
        </ScrollView>
      </View>
  )
}

function getInterestNames(interests){
  var buildString = ''
  for (var i = 0; i < interests.length; i++) {
    buildString += interests[i].name
    i == interests.length-1 ? false : buildString += ', '
  }
  return buildString
}

const StudentCard = ({student, navigation, typeLogedin, isLoading, myInfo, loading}) => (
  <View style={{alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
    { studentLogin(student, navigation, myInfo, loading) }
  </View>
)

export default StudentCard
