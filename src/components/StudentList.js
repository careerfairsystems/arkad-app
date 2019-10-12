import React from 'react'
import { View, Text, TextInput, SectionList, RefreshControl, Keyboard, Image, Linking, TouchableOpacity, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import StudentListItem from './listItems/StudentListItem'
import LogoutButton from '../containers/LogoutButton'
import CameraButton from './CameraButton'
import Modal from "react-native-modal"
import Button from './Button'
import ParallaxScrollView from 'react-native-parallax-scroll-view'


const styles = {
  listContainer: {
   width: '100%',
   height: '100%',
   backgroundColor: '#fff'
  },
  welcomeContainer: {
    paddingVertical: 20,
    borderBottomColor: '#4c4c4c',
    borderBottomWidth: 1
  },
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  innerContainer: {
  width: '80%'
  },
  loginBtn: {
  width: '50%',
  color: '#000'
  },
  h1: {
  fontSize: 70,
  textAlign: 'center'
  },
  h2: {
  fontSize: 12,
  textAlign: 'center',
  color: global.arkadBlue,
  marginTop: 18
  },
  usernameInput: {
  height: 40,
  borderTopColor: '#000',
  backgroundColor: 'rgba(0, 43, 100, 0.2)',
  borderRadius: 8,
  marginTop: 30,
  marginBottom: 10,
  paddingLeft: 10
  },
  passwordInput: {
  height: 40,
  borderTopColor: '#000',
  backgroundColor: 'rgba(0, 43, 100, 0.2)',
  borderRadius: 8,
  marginTop: 5,
  marginBottom: 40,
  paddingLeft: 10,
  },
  welcomeText: {
  fontSize: 30,
  textAlign: 'center',
  color: global.arkadBlue,
  },
  infoText: {
  textAlign: 'center',
  color: global.arkadBlue
  },
  image: {
   height: 160,
   width: 165.6,
   marginTop: 15
  },
  imageContainer: {
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: 20
  },
  createAccountContainer: {
   justifyContent: 'center',
   alignItems: 'center',
   position: 'absolute',
   height:'100%',
   width:'100%',
  },
  createAccountView: {
   height:'90%',
   width:'90%',
   backgroundColor: 'rgba(172, 214, 234, 0.98)',
   borderRadius:10
  },
  createAccountText: {
   fontSize: 14,
   color: global.arkadBlue,
   marginBottom: 8
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
  helpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height:'100%',
    width:'100%',
  },
  helpView: {
    height:'90%',
    width:'90%',
    backgroundColor: '#fff',
    borderRadius:10
  }
}

const { header, bar, title, scrollViewContent, listContainer, welcomeContainer, outerContainer, innerContainer, loginBtn, h1, h2, usernameInput, passwordInput,
        welcomeText, infoText, image, imageContainer, helpContainer, createAccountText, helpView, button, text } = styles

const StudentList = ({ studentList, navigation, cameraPermissionGiven, setCameraPermission, myInfo, blips, loading, blips_loading }) => {
  console.log("++++++++++++++++++++++")
  console.log("LOADING DOWN BELOW")
  console.log(loading)
  console.log("BLIPS_LOADING DOWN BELOW")
  console.log(blips_loading)
  console.log("++++++++++++++++++++++")
  console.log(blips)
  if (!loading && !blips_loading && blips != undefined) {
    if (blips.length === 0) {
      sections = [{ title: '', data: [] }]
    } else {
      console.log(blips)
      sections = blips.reduce((a, b) => {
        const item = a
        const firstLetter = b.first_name[0].toUpperCase()
        if (item[firstLetter]) {
          item[firstLetter].push(b)
        } else {
          item[firstLetter] = [b]
        }
        return item
      }, {})
      sections = Object.keys(sections).map(key => ({ title: key, data: sections[key] }))
    }
  }
  return(
    <View style={listContainer}>
      <ParallaxScrollView
        backgroundColor="#fff"
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={140}
        backgroundSpeed={10}
        renderBackground={() => (
              <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                <View style={{height: '100%', width: '100%', backgroundColor: 'rgba(60, 60, 60, .9)', position: 'absolute', top: 0, left: 0, zIndex: 100}}></View>
                <Image style={{height: '100%', width: '100%', zIndex: 1}} source={require('../../resources/img/companyLogos/uniper.jpg')} />
              </View>
            )}
        renderForeground={() => (
         <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: '#fff', fontSize: 40}}>Scanned students</Text>
          </View>
        )}>
        {!loading && !blips_loading ?
          <SectionList
            style={{width:'100%'}}
            renderItem={({ item, index, section }) => <StudentListItem navigation={navigation} student={item} userType="DetailStudent"/>}
            sections={sections}
            onScrollBeginDrag={() => Keyboard.dismiss()}
            keyExtractor={(item, index) => index.toString()}
          />
          : null}

      </ParallaxScrollView>
      <CameraButton navigation={navigation} cameraPermissionGiven={cameraPermissionGiven} setCameraPermission={setCameraPermission} />
    </View>
  )
}

export default StudentList
