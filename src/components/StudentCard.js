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
  if (!loading) {
    var windowWidth = Dimensions.get('window').width
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
  }

  process(myInfo)
  
  return(
      <FlipCard
      style={[flipCard, {width:"100%"}]}
      flipHorizontal={true}
      flipVertical={false}
      friction={5}
      clickable={true}>
        {/* Face Side */}
        <View style={[flipCardFront, {width: windowWidth * 0.9}]}>
          <View style={{flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Image
              style={cardImage}
              source={require('../../resources/img/arkadTeam/default.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: '5%'}}>
              {myInfo.first_name} {myInfo.last_name}
            </Text>
          </View>
          {!loading ?
            <View style={{flex: 1, width: '100%', padding: '5%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View style={{width: '35%'}}>
                  <Text style={[profileText, {fontWeight: 'bold'}]}>
                    Programme:
                  </Text>
                </View>
                <View style={{width: '65%'}}>
                  <Text style={profileText}>
                    {myInfo.student.programme == "Not set" ? "Not set" : myInfo.student.programme.name}
                  </Text>
                </View>
              </View>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View style={{width: '35%'}}>
                  <Text style={[profileText, {fontWeight: 'bold'}]}>
                    Graduation year:
                  </Text>
                </View>
                <View style={{width: '65%'}}>
                  <Text style={profileText}>
                    {myInfo.student.year}
                  </Text>
                </View>
              </View>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View style={{width: '35%'}}>
                  <Text style={[profileText, {fontWeight: 'bold'}]}>
                    Master:
                  </Text>
                </View>
                <View style={{width: '65%'}}>
                  <Text style={profileText}>
                    {myInfo.student.master}
                  </Text>
                </View>
              </View>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View style={{width: '35%'}}>
                  <Text style={[profileText, {fontWeight: 'bold'}]}>
                    Interested in:
                  </Text>
                </View>
                <View style={{width: '65%'}}>
                  <Text style={profileText}>
                    {myInfo.student.interests == null ? "Not set" : getInterestNames(myInfo.student.interests)}
                  </Text>
                </View>
              </View>
            </View>
          : null}
          <ButtonBar linkedin={myInfo.student.linked_in} email_adr={myInfo.email} cvsv={myInfo.student.resume_sv_url} cven={myInfo.student.resume_en_url}/>
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
          {!loading ?
          <QRCode
            value={'https://www.arkadtlth.se/wrong-qr/' + myInfo.student.id.toString()}
            size={200}
            bgColor='rgb(0, 43, 100)'
            fgColor='#fff'/>
            : null}
            </View>
            </View>
        </View>
      </FlipCard>
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
