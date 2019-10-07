import React, { Component } from 'react'
import { View, Text, TextInput, SectionList, RefreshControl, Keyboard, Image, Linking, TouchableOpacity, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import Modal from "react-native-modal"
import Button from '../../components/Button'
import LogoutButton from '../../containers/LogoutButton'
import HrefButton from '../../components/HrefButton'
import CloseButton from '../../components/CloseButton'
import StudentListItem from '../../components/listItems/StudentListItem'
import StudentCard from '../../containers/StudentCardContainer'
import StudentList from '../../containers/StudentListContainer'
import RemoveButton from '../../containers/RemoveButton'
import Icon from 'react-native-vector-icons/FontAwesome'


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
                       { key: '20',
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
                       { key: '21',
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
                       { key: '22',
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
                       { key: '23',
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
                       { key: '24',
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
                       { key: '25',
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
                       { key: '26',
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
   backgroundColor: '#fff'
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
   marginTop: 10,
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
   marginBottom: 10
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
    backgroundColor: '#fff',
    borderRadius:10
  },
  headerRightView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 1
  },
  createAccountText: {
    fontSize: 14,
    color: global.arkadBlue,
    marginBottom: 8
  },
  modalText: {
    fontSize: 16,
    color: '#fff'
  },
  cardImage: {
    top: 0,
    right: 0,
    width: 125,
    height: 125,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  buttonText: {
    right: 0,
    fontSize: 12,
    color: global.arkadGray
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
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  headerIcon: {
  paddingHorizontal: 7,
  alignItems: 'center'
  },
  hostImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 20
  },
}


const { header, buttonText, headerIcon, bar, title, scrollViewContent, listContainer, welcomeContainer, outerContainer, innerContainer, loginBtn, h1, h2, usernameInput, passwordInput,
        welcomeText, infoText, image, imageContainer, createAccountContainer, createAccountText, createAccountView, headerRightView, modalText, cardImage, button, helpView, helpContainer, text, hostImage } = styles

class ProfileLoginScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      createAccount: false,
      logedIn: false,
      showRemoveModal: false,
      showCreateAccountModal: false,
      showHelpModal: false,
      student: false,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
        header: null,
    })
    {!this.props.companyLogedIn
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

  async handlePress() {
    await this.props.loadLogin(this.state.username, this.state.password)
    this.checkLoginIn()
  }

  async checkLoginIn() {
    await this.props.getMyInfo()
    if (!this.props.companyLogedIn == 'student') {
      this.props.navigation.setParams({
          header: undefined,
          headerRight: (
            <LogoutButton navigation={this.props.navigation} />
          )
      })
    } else {
      this.props.navigation.setParams({
          header: undefined,
          headerRight: (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity style={button} onPress={() => this.toggleHelpModal()}>
                <Icon style={headerIcon} name='question' size={21} color='#fff'/>
                <Text style={buttonText}>Help</Text>
              </TouchableOpacity>
              <LogoutButton navigation={this.props.navigation} />
            </View>
          )
      })
    }
  }

  toggleCreateAccountModal() {
    this.setState({ showCreateAccountModal: !this.state.showCreateAccountModal });
  }

  toggleRemoveModal() {
    this.setState({ showRemoveModal: !this.state.showRemoveModal });
  }

  toggleHelpModal() {
    this.setState({ showHelpModal: !this.state.showHelpModal });
  }

  createAccountView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showCreateAccountModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showCreateAccountModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={createAccountContainer}>
            <View style={createAccountView}>
              <ScrollView>
              <View style={{marginVertical: 20, marginHorizontal: 20}}>
                <View style={{justifyContent: 'center',
                alignItems: 'center', marginBottom:30}}>
                  <Text style={{fontSize: 30, color:global.arkadBlue, fontWeight: 'bold'}}>
                    Need an account?
                  </Text>
                </View>
                <View>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Student
                  </Text>
                  <Button title='Sign up here' onPress={() => Linking.openURL('https://arkad-nexpo.herokuapp.com/signup')}>
                  </Button>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Company
                  </Text>
                  <Text style={createAccountText}>
                    Check if any of your co-workers has been invited,
                    if so they can invite you. Check our support page to read more about how it works.
                  </Text>
                    <View style={{marginBottom: 20}}>
                    <CloseButton onPress={() => Linking.openURL('https://www.arkadtlth.se/scan/')} title='Go to Support Page' />
                    </View>
                    <Text style={createAccountText}>
                    If none of your co-workers has been invited email our support.
                    </Text>
                    <View style={{marginBottom: 10}}>
                    <CloseButton onPress={() => Linking.openURL('mailto:external_it.arkad@tlth.se')} title='Send Email to Support'/>
                    </View>
                </View>
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom:0,
            width:'100%',
          marginBottom:20,
        marginTop: 10}}>
                <View style={{width:'40%'}}>
                  <CloseButton title='Close'
                          onPress={() => this.toggleCreateAccountModal()}
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

  loginView() {
    return (
      <View>
      <View style={outerContainer}>
        <View style={innerContainer}>
          <View style={imageContainer}>
            <Image
              style={image}
              source={require('../../../resources/img/arkad_logo.png')}
            />
            <Text style={{fontStyle: 'italic', marginTop: 20, fontSize: 22 }}> Scanning System </Text>
          </View>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={usernameInput}
            placeholder="Username"
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={passwordInput}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
          />
          <Button title='Login'
                  onPress={() => this.handlePress()}
                  loading={this.props.loading}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{width:'35%'}} onPress={() => this.props.getMyInfo()}>
              <Text style={h2}>
                Need an account?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'45%'}} onPress={() => Linking.openURL('https://arkad-nexpo.herokuapp.com/forgot-password')}>
              <Text style={h2}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      { this.createAccountView() }
      </View>
    )
  }

  gotoFAQ() {
    this.toggleHelpModal()
    this.props.navigation.navigate('Faq')
  }

  helpView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showHelpModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showHelpModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={helpContainer}>
            <View style={helpView}>
            <ScrollView>
              <View style={{marginVertical: 20, marginHorizontal: 20}}>
                <View style={{justifyContent: 'center',
                alignItems: 'center', marginBottom:20}}>
                  <Text style={{fontSize: 30, color:global.arkadBlue, fontWeight: 'bold'}}>
                    Need help?
                  </Text>
                </View>
                <View>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Company Host
                  </Text>
                  <Text style={createAccountText}>
                  Need to get in touch with your company host? Below are the contact details.
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 7, marginBottom: 7}}>
                  <Image
                    style={hostImage}
                    source={require('../../../resources/img/arkadTeam/MartinHost.jpg')}
                  />
                  <Text style={createAccountText}>Martin Värd {"\n"}076 77 11 123 {"\n"}Martin@snus.se </Text>
                  </View>
                  <Text style={createAccountText}>
                  If you need help during the fair and can't reach your host, contact your closest Infodesk.
                  </Text>
                </View>
                <View>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Scanning system
                  </Text>
                  <Text style={createAccountText} >
                    <Text>Want to learn how the scanning system works? You can find the manual on our support page.</Text>
                  </Text>
                  <Button title='Go to Support Page' onPress={() => Linking.openURL('https://www.arkadtlth.se/scan/')}></Button>
                </View>
                <View style={{marginTop: 15, marginBottom:50}}>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Other questions
                  </Text>
                  <Button title='Go to FAQ' onPress={() => this.gotoFAQ()}></Button>
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
                  <CloseButton
                          title='Close'
                          onPress={() => this.toggleHelpModal()}
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

  loadHome() {
    if (!this.props.companyLogedIn) {
      return <StudentCard student={this.state.student} navigation={this.props.navigation} typeLogedin={this.props.companyLogedIn}/>
    } else {
      return <StudentList studentList={studentList} navigation={this.props.navigation} isLoading={this.props.loading} cameraPermissionGiven={this.props.cameraPermissionGiven} setCameraPermission={this.props.setCameraPermission} />
    }
  }

  render() {
    console.log(this.props.companyLogedIn)
    return(
      <View>
        { this.props.logedIn ? this.loadHome() : this.loginView()}
        { this.helpView() }
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
