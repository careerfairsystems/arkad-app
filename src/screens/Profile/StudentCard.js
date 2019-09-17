import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, Image, SectionList, RefreshControl, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import ActionSheet from 'react-native-actionsheet'
import FlipCard from 'react-native-flip-card'
import QRCode from 'react-native-qrcode'
import Modal from "react-native-modal"
import Icon from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'
import LogoutButton from '../../containers/LogoutButton'
import RemoveButton from '../../containers/RemoveButton'
import LinkedInButton from '../../components/LinkedInButton'
import StudentListItem from '../../components/listItems/StudentListItem'
import SectionHeader from '../../components/SectionHeader'


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

const studentCompanyList = [ { key: '1010146733143312',
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
                                 { key: '1010146733143312',
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
                                    key: '1010146733143312',
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
                                     { key: '1010146733143312',
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


const { container, flipCard, flipCardFront, flipCardBack, qrText, button, text, filterView, headerIcon, buttonText, cardImage, profileText, modalText } = style

class StudentCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flip: false,
      starCount: 3,
      isLoading: false,
      student: false,
      showModal: false,
    }
  }

  componentDidMount() {
    {this.props.typeLogedin == "student"
      ? (this.props.navigation.setParams({
          headerLeft: (null),
          headerRight: (
            <LogoutButton navigation={this.props.navigation} />
          )
      })
    )
      : (this.props.navigation.setParams({
          headerRight: (
            <TouchableOpacity style={button} onPress={() => this.toggleModal()}>
              <Text style={text}>Remove</Text>
            </TouchableOpacity>
          )
      }))
    }
    {this.props.typeLogedin == "student"
      ? (this.setState({
          student: true
        })
      )
      : (this.setState({
          student: false
        })
      )
    }
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  studentLogin() {
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
        flip={this.state.flip}
        clickable={this.state.student}>
          {/* Face Side */}
          <View style={flipCardFront}>
            <View style={{flex: 4, flexDirection: 'row', width: '100%'}}>
              <View style={{flex: 1, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <Image
                  style={cardImage}
                  source={require('../../../resources/img/arkadTeam/IMG_3758.jpg')}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingRight:'5%'}}>
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
                <Text style={profileText}>
                  Interested in: Summerjob, thesis, internship
                </Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 1, width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
                <TouchableOpacity onPress={() => openUrl(url)}>
                  <Icon name="address-card" size={25} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 5, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: global.arkadGray}}>
              <View style={{height: '12%', alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                Your scanned companies
                </Text>
              </View>
              <SectionList
                style={{width: test * .9}}
                renderItem={({ item, index, section }) => <StudentListItem navigation={this.props.navigation} student={item} userType="DetailCompany"/>}
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
              value="www.google.se"
              size={200}
              bgColor='rgb(0, 43, 100)'
              fgColor='#fff'/>
              </View>
              </View>
          </View>
        </FlipCard>
    )
  }

  companyLogin() {
    return(
        <FlipCard
        style={flipCard}
        flipHorizontal={true}
        flipVertical={false}
        friction={10}
        flip={this.state.flip}
        clickable={this.state.student}>
          {/* Face Side */}
          <View style={flipCardFront}>
            <View style={{flex: 3, flexDirection: 'row', width: '100%'}}>
              <View style={{flex: 1, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <Image
                  style={cardImage}
                  source={require('../../../resources/img/arkadTeam/IMG_3758.jpg')}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingRight: '5%'}}>
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
                <Text style={profileText}>
                  Interested in: Summerjob, thesis, internship
                </Text>
              </View>
            </View>
            <View style={{flex: 4, flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 9, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                  <LinkedInButton url={"https://www.google.com"} />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10}}>
                  <TouchableOpacity onPress={() => openUrl(url)}>
                    <Icon name="address-card" size={25} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 9, flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 4}}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  starSize={32}
                />
              </View>
              <View style={{flex: 9, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: '8%'}}>
                <TextInput
                  style={{width: '100%', height: 60, borderColor: global.arkadBlue, borderWidth: 1, textAlignVertical: 'top', borderRadius: 8, paddingLeft: 7, paddingTop: 4}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  placeholder="Write your comment here..."
                  underlineColorAndroid="transparent"
                  multiline = {true}
                />
              </View>
              <View style={{flex: 14, width: '100%', justifyContent: 'center'}}>
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
              Your personal QR-code.
            </Text>
            <Text style={qrText}>
              Go share it with your favourit companies!
            </Text>
            <QRCode
              value="www.google.se"
              size={200}
              bgColor='rgb(0, 43, 100)'
              fgColor='#fff'/>
          </View>
        </FlipCard>
    )
  }

  removeView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center', paddingVertical: '20%'}}>
          <View style={{ borderRadius: 8, backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
              <Text>Are you sure you want to remove this student?</Text>
            </View>
            <View style={{flex: 6, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
              <Image
                style={cardImage}
                source={require('../../../resources/img/arkadTeam/IMG_3758.jpg')}
              />
            </View>
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%", flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
                <RemoveButton navigation={this.props.navigation} />
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
                <TouchableOpacity style={button} onPress={() => this.toggleModal()}>
                  <Text style={modalText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  render() {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
        {this.props.typeLogedin == "student"
         ? this.studentLogin()
         : this.companyLogin()
        }
        { this.removeView() }
      </View>
    )
  }
}

export default StudentCard
