import React, { Component } from 'react'
import { View, Text, TextInput, SectionList, RefreshControl, Keyboard, Image, Linking, TouchableOpacity, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import StudentListItem from '../../components/listItems/StudentListItem'
import LogoutButton from '../../containers/LogoutButton'
import CameraButton from '../../components/CameraButton'
import Modal from "react-native-modal"
import Button from '../../components/Button'


const studentList = [ {  key: '1',
                         name: 'Arvid Pilhall',
                         about: 'Awesome person',
                         didYouKnow: 'Is lefthanded',
                         employees: { local: 'E-huset', global: '1100' },
                         weOffer:
                          [ 'Food',
                            'Chill',
                          ],
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
                       { key: '2',
                         name: 'Alfons Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Torbjörn Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Olof Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Gjert Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Clas Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Björn Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Artur Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       },
                       { key: '2',
                         name: 'Kjell Olofmeister',
                         about: 'Our goal is simple. We want to be your first choice for value-adding vegetable oil solutions. Regardless if you are a customer, employee, or supplier. AAK has employees in more than 25 countries. We have 20 production facilities and customization plants across the world and a global procurement and sales organization. Organic growth, investments in production facilities, and selective acquisitions are expanding that global presence. AAK strives to be an attractive employer with a high-performance organization with people carrying AAK forward. Join us on an exciting journey.',
                         didYouKnow: 'At AAK, sustainable development is fundamental to our business. Social and environmental responsibility, hand in hand with financial growth, is key to our continued development and future success. This is what we mean by sustainable growth.',
                         employees: { local: '450', global: '3200' },
                         weOffer:
                          [ 'Thesis',
                            'Summer jobs',
                            'Trainee employment',
                            'Foreign Opportunities' ],
                         desiredProgramme:
                          [ 'Biotechnology',
                            'Industrial Engineering and Management',
                            'Chemical Engineering',
                            'Mechanical Engineering',
                            'Biomedical Engineering' ],
                         desiredDegree: [ 'Bachelor’s degree (180 ECTS)', 'Master’s degree (300 ECTS)' ],
                         industry: [ 'Industry' ],
                         contact:
                          { name: 'Marie Sundström',
                            title: 'HR Business Partner',
                            email: 'marie.sundstrom@aak.com',
                            phone: '+46 454 82867' },
                         map: 'Studiecentrum Floor 1',
                         boothNumber: 102,
                         logotypeUrl: 'https://storage.googleapis.com/jexpo-arkad/1010425868412665_large_000.png',
                         brochureUrl: '',
                         websiteUrl: 'http://www.aak.com',
                         linkedInUrl: '',
                         facebookUrl: '',
                         twitterUrl: '',
                         youTubeUrl: ''
                       }
                     ]

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

class StudentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      isLoading: false,
      createAccount: false,
      logedIn: false,
      showModal: false,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
        headerRight: (
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={button} onPress={() => this.toggleModal()}>
              <Text style={text}>Help</Text>
            </TouchableOpacity>
            <LogoutButton navigation={this.props.navigation} />
          </View>
        )
    })
  }

  render() {
    if (studentList.length === 0) {
      sections = [{ title: '', data: [] }]
    } else {
      sections = studentList.reduce((a, b) => {
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
      <View style={listContainer}>
        <View style={welcomeContainer}>
          <Text style={welcomeText}>
            Välkommen Axis!
          </Text>
        </View>
        <SectionList
          style={{width:'100%'}}
          renderItem={({ item, index, section }) => <StudentListItem navigation={this.props.navigation} student={item} />}
          sections={sections}
          onScrollBeginDrag={() => Keyboard.dismiss()}
        />
        <CameraButton navigation={this.props.navigation} />
        { this.HelpView() }
      </View>
    )
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  gotoFAQ() {
    this.toggleModal()
    this.props.navigation.navigate('Faq')
  }

  HelpView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={helpContainer}>
            <View style={helpView}>
            <ScrollView >
              <View style={{marginVertical: 20, marginHorizontal: 20}}>
                <View style={{justifyContent: 'center',
                alignItems: 'center', marginBottom:20}}>
                  <Text style={{fontSize: 30, color:global.arkadBlue, fontWeight: 'bold'}}>
                    Need help?
                  </Text>
                </View>
                <View>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Scanning system
                  </Text>
                  <Text style={createAccountText} >
                    <Text>Want to learn how the scanning system works? You can find the manual at {"\n"}</Text>
                    <Text style={{fontWeight:'bold'}} onPress={() => Linking.openURL('https://www.arkadtlth.se/scan')}> www.arkadtlth.se/scan</Text>
                    <Text>.</Text>
                  </Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Company Host
                  </Text>
                  <Text style={createAccountText}>
                  Need to get in touch with your company host? Below are the contact details
                  </Text>
                  <Text style={createAccountText}>Name {"\n"}Phone {"\n"}Email </Text>
                  <Text style={createAccountText}>
                  If you need help during the fair and can't reach your host, contact your closest Infodesk.
                  </Text>
                </View>
                <View style={{marginTop: 15, marginBottom:50}}>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Other questions
                  </Text>
                  <Text style={createAccountText}>
                    <Text>Check out our FAQ </Text>
                    <Text style={{fontWeight:'bold'}} onPress={() => this.gotoFAQ()}> here</Text>
                  </Text>
                </View>
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom:0,
              position: 'absolute',
            width:'100%',
          marginBottom:20}}>
                <View style={{width:'40%'}}>
                  <Button title='Close'
                          onPress={() => this.toggleModal()}
                          showIcon={false}
                  />
                </View>
              </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}



export default StudentList
