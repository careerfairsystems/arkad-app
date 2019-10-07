import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, Image, SectionList, RefreshControl, Dimensions } from 'react-native'
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


const studentCompanyList = [ { key: '10101467333312',
                                  name: '3Shape',
                                  about: '3Shape creates 3D scanning and CAD/CAM software solutions - award winning technology that enables healthcare professionals to treat more people, more effectively and with improved care. We use and create the latest technology, and always push to do things smarter. \n\nWe’re constantly on the lookout for talented developers who thrive on daily challenges. We believe that the best results are achieved by empowering the people closest to the action. Our agile teams employ the market’s state-of-the-art components, sensors and tools to create real-time 3D solutions for treatment and manufacturing.',
                                  didYouKnow: 'Two students founded 3Shape in 2000: One was an engineering student the other one a business student. Together, natural born entrepreneurs. Today, we are more than 1,500 employees, and many live in Sweden and commute to our headquarters in central Copenhagen daily.',
                                  employees: { local: '', global: '1100' },
                                  weOffer:
                                   [ 'Thesis',
                                     'Part-time job',
                                     'Internships',
                                     'Foreign Opportunities' ],
                                  desiredProgramme:
                                   [ 'Computer Science and Engineering',
                                     'Electrical Engineering',
                                     'Mechanical Engineering' ],
                                  desiredDegree:
                                   [ 'Bachelor’s degree (180 ECTS)',
                                     'Master’s degree (300 ECTS)',
                                     'Ph.D' ],
                                  industry: [ 'Data and IT', 'Medical Techniques' ],
                                  contact:
                                   { name: 'Kirsti Sørensen',
                                     title: 'Employer branding consultant',
                                     email: 'kirsti.soerensen@3shape.com',
                                     phone: '+4528553480' },
                                  map: 'E-huset',
                                  boothNumber: 134,
                                  logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010400914427800_large_000.png',
                                  brochureUrl: 'http://storage.googleapis.com/jexpo-arkad/1010451420069389.pdf',
                                  websiteUrl: 'http://www.3shape.com/careers',
                                  linkedInUrl: '',
                                  facebookUrl: '',
                                  twitterUrl: 'https://twitter.com/3Shape',
                                  youTubeUrl: '' } ,
                                 { key: '100146733143312',
                                    name: '3Shape',
                                    about: '3Shape creates 3D scanning and CAD/CAM software solutions - award winning technology that enables healthcare professionals to treat more people, more effectively and with improved care. We use and create the latest technology, and always push to do things smarter. \n\nWe’re constantly on the lookout for talented developers who thrive on daily challenges. We believe that the best results are achieved by empowering the people closest to the action. Our agile teams employ the market’s state-of-the-art components, sensors and tools to create real-time 3D solutions for treatment and manufacturing.',
                                    didYouKnow: 'Two students founded 3Shape in 2000: One was an engineering student the other one a business student. Together, natural born entrepreneurs. Today, we are more than 1,500 employees, and many live in Sweden and commute to our headquarters in central Copenhagen daily.',
                                    employees: { local: '', global: '1100' },
                                    weOffer:
                                     [ 'Thesis',
                                       'Part-time job',
                                       'Internships',
                                       'Foreign Opportunities' ],
                                    desiredProgramme:
                                     [ 'Computer Science and Engineering',
                                       'Electrical Engineering',
                                       'Mechanical Engineering' ],
                                    desiredDegree:
                                     [ 'Bachelor’s degree (180 ECTS)',
                                       'Master’s degree (300 ECTS)',
                                       'Ph.D' ],
                                    industry: [ 'Data and IT', 'Medical Techniques' ],
                                    contact:
                                     { name: 'Kirsti Sørensen',
                                       title: 'Employer branding consultant',
                                       email: 'kirsti.soerensen@3shape.com',
                                       phone: '+4528553480' },
                                    map: 'E-huset',
                                    boothNumber: 134,
                                    logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010400914427800_large_000.png',
                                    brochureUrl: 'http://storage.googleapis.com/jexpo-arkad/1010451420069389.pdf',
                                    websiteUrl: 'http://www.3shape.com/careers',
                                    linkedInUrl: '',
                                    facebookUrl: '',
                                    twitterUrl: 'https://twitter.com/3Shape',
                                    youTubeUrl: ''
                                  },
                                  {
                                    key: '146733143312',
                                     name: '3Shape',
                                     about: '3Shape creates 3D scanning and CAD/CAM software solutions - award winning technology that enables healthcare professionals to treat more people, more effectively and with improved care. We use and create the latest technology, and always push to do things smarter. \n\nWe’re constantly on the lookout for talented developers who thrive on daily challenges. We believe that the best results are achieved by empowering the people closest to the action. Our agile teams employ the market’s state-of-the-art components, sensors and tools to create real-time 3D solutions for treatment and manufacturing.',
                                     didYouKnow: 'Two students founded 3Shape in 2000: One was an engineering student the other one a business student. Together, natural born entrepreneurs. Today, we are more than 1,500 employees, and many live in Sweden and commute to our headquarters in central Copenhagen daily.',
                                     employees: { local: '', global: '1100' },
                                     weOffer:
                                      [ 'Thesis',
                                        'Part-time job',
                                        'Internships',
                                        'Foreign Opportunities' ],
                                     desiredProgramme:
                                      [ 'Computer Science and Engineering',
                                        'Electrical Engineering',
                                        'Mechanical Engineering' ],
                                     desiredDegree:
                                      [ 'Bachelor’s degree (180 ECTS)',
                                        'Master’s degree (300 ECTS)',
                                        'Ph.D' ],
                                     industry: [ 'Data and IT', 'Medical Techniques' ],
                                     contact:
                                      { name: 'Kirsti Sørensen',
                                        title: 'Employer branding consultant',
                                        email: 'kirsti.soerensen@3shape.com',
                                        phone: '+4528553480' },
                                     map: 'E-huset',
                                     boothNumber: 134,
                                     logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010400914427800_large_000.png',
                                     brochureUrl: 'http://storage.googleapis.com/jexpo-arkad/1010451420069389.pdf',
                                     websiteUrl: 'http://www.3shape.com/careers',
                                     linkedInUrl: '',
                                     facebookUrl: '',
                                     twitterUrl: 'https://twitter.com/3Shape',
                                     youTubeUrl: '' },
                                     { key: '1010',
                                        name: '3Shape',
                                        about: '3Shape creates 3D scanning and CAD/CAM software solutions - award winning technology that enables healthcare professionals to treat more people, more effectively and with improved care. We use and create the latest technology, and always push to do things smarter. \n\nWe’re constantly on the lookout for talented developers who thrive on daily challenges. We believe that the best results are achieved by empowering the people closest to the action. Our agile teams employ the market’s state-of-the-art components, sensors and tools to create real-time 3D solutions for treatment and manufacturing.',
                                        didYouKnow: 'Two students founded 3Shape in 2000: One was an engineering student the other one a business student. Together, natural born entrepreneurs. Today, we are more than 1,500 employees, and many live in Sweden and commute to our headquarters in central Copenhagen daily.',
                                        employees: { local: '', global: '1100' },
                                        weOffer:
                                         [ 'Thesis',
                                           'Part-time job',
                                           'Internships',
                                           'Foreign Opportunities' ],
                                        desiredProgramme:
                                         [ 'Computer Science and Engineering',
                                           'Electrical Engineering',
                                           'Mechanical Engineering' ],
                                        desiredDegree:
                                         [ 'Bachelor’s degree (180 ECTS)',
                                           'Master’s degree (300 ECTS)',
                                           'Ph.D' ],
                                        industry: [ 'Data and IT', 'Medical Techniques' ],
                                        contact:
                                         { name: 'Kirsti Sørensen',
                                           title: 'Employer branding consultant',
                                           email: 'kirsti.soerensen@3shape.com',
                                           phone: '+4528553480' },
                                        map: 'E-huset',
                                        boothNumber: 134,
                                        logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010400914427800_large_000.png',
                                        brochureUrl: 'http://storage.googleapis.com/jexpo-arkad/1010451420069389.pdf',
                                        websiteUrl: 'http://www.3shape.com/careers',
                                        linkedInUrl: '',
                                        facebookUrl: '',
                                        twitterUrl: 'https://twitter.com/3Shape',
                                        youTubeUrl: '' },
                                      ]



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
    height: '100%',
    width: '90%',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 8,
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
    borderRadius: 8
  },
  profileText: {
    top: 0,
    left: 0,
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


function studentLogin(student, navigation, myInfo) {
  var test = Dimensions.get('window').width
  if (studentCompanyList.length === 0) {
    sections = [{ title: '', data: [] }]
  } else {
    sections = studentCompanyList.reduce((a, b) => {
      const item = a
      const firstLetter = b.name[0].toUpperCase()
      if (item[firstLetter]) {
        item[firstLetter].push(b)
      } else {
        item[firstLetter] = [b]
      }
      return item
    }, {})
    sections = Object.keys(sections).map(key => ({ title: key, data: sections[key] }))
  }
  return(
      <FlipCard
      style={[flipCard, {width:"100%"}]}
      flipHorizontal={true}
      flipVertical={false}
      friction={5}
      clickable={true}>
        {/* Face Side */}
        <View style={flipCardFront}>
          <View style={{flex: 4, flexDirection: 'row', width: '100%'}}>
            <View style={{flex: 1, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
              <Image
                style={cardImage}
                source={require('../../resources/img/arkadTeam/IMG_3758.jpg')}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingRight:'5%'}}>
              <Text style={[profileText, {fontWeight: 'bold', fontSize: 18}]}>
                {myInfo.first_name} {myInfo.last_name}
              </Text>
              <Text style={profileText}>
                {myInfo.student.programme.name}
              </Text>
              <Text style={profileText}>
                  Year {myInfo.student.year}
              </Text>
              <Text style={profileText}>
                Master: Software Engineering
              </Text>
              <Text style={profileText}>
                Interested in: Summerjob, thesis, internship
              </Text>
            </View>
          </View>
          <ButtonBar />
          {/* <View style={{flex: 1.5, flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 1, width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
              <TouchableOpacity onPress={() => openUrl(url)}>
                <Icon name="address-book" size={35} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
              <TouchableOpacity onPress={() => openUrl(url)}>
                <Icon name="linkedin" size={35} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
              <TouchableOpacity onPress={() => openUrl(url)}>
                <Icon name="envelope" size={35} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
              <TouchableOpacity onPress={() => openUrl(url)}>
                <Icon name="phone" size={35} color="#000" />
              </TouchableOpacity>
            </View>
          </View> */}
          <View style={{flex: 5, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: global.arkadGray}}>
            <View style={{height: '12%', alignItems: 'center', justifyContent: 'center'}}>
              <Text>
              Your scanned companies
              </Text>
            </View>
            <SectionList
              style={{width: test * .9}}
              renderItem={({ item, index, section }) => <StudentListItem navigation={navigation} student={item} userType="DetailCompany"/>}
              sections={sections}
              onScrollBeginDrag={() => Keyboard.dismiss()}
            />
          </View>
        </View>
        {/* Back Side */}
        <View style={flipCardBack}>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
        <View style={{flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={qrText}>
            Your personal QR-code.
          </Text>
          <Text style={qrText}>
            Go share it with your favourite companies!
          </Text>
          <QRCode
            value={'https://www.arkadtlth.se/wrong-qr/' + myInfo.student.user_id.toString()}
            size={200}
            bgColor='rgb(0, 43, 100)'
            fgColor='#fff'/>
            </View>
            </View>
        </View>
      </FlipCard>
  )
}

const StudentCard = ({student, navigation, typeLogedin, isLoading, myInfo}) => (
  <View style={{alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
    { studentLogin(student, navigation, myInfo) }
  </View>
)

export default StudentCard
