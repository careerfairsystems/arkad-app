import React, { Component } from 'react'
import { View, Text, TextInput, SectionList, RefreshControl, Keyboard, Image, Linking, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Modal from "react-native-modal"
import Button from '../../components/Button'
import LogoutButton from '../../containers/LogoutButton'

import StudentListItem from '../../components/listItems/StudentListItem'


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
  }
}


const { header, bar, title, scrollViewContent, listContainer, welcomeContainer, outerContainer, innerContainer, loginBtn, h1, h2, usernameInput, passwordInput,
        welcomeText, infoText, image, imageContainer, createAccountContainer, createAccountText, createAccountView, headerRightView } = styles

class ProfileLoginScreen extends Component {
  constructor(props){
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
        header: null,
    })
  }

  handlePress() {
    this.setState({isLoading: true})
    this.login()
  }

  async login() {
    await this.props.loadLogin(this.state.username, this.state.password, "student")
    this.checkLoginIn()
  }

  checkLoginIn() {
    if (this.props.typeLogedin == "student") {
      this.props.navigation.navigate('StudentLogin', studentList[0])
      this.setState({
        isLoading: false
      })
    } else {
      this.props.navigation.navigate('CompanyLogin')
      this.setState({
        isLoading: false
      })
      this.setState({
        username:'',
        password:'',
        logedIn: this.props.logedIn,
        isLoading: false,
      })
    }
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  createAccountView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={createAccountContainer}>
            <View style={createAccountView}>
              <View style={{marginVertical: 20, marginHorizontal: 20}}>
                <View style={{justifyContent: 'center',
                alignItems: 'center', marginBottom:50}}>
                  <Text style={{fontSize: 30, color:global.arkadBlue, fontWeight: 'bold'}}>
                    Welcome!
                  </Text>
                </View>
                <View>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Student
                  </Text>
                  <Text style={createAccountText} onPress={() => Linking.openURL('https://arkad-nexpo.herokuapp.com/signup')}>
                    <Text>Sign up</Text>
                    <Text style={{fontWeight:'bold'}}> here</Text>
                    <Text>.</Text>
                  </Text>
                </View>
                <View style={{marginTop: 30}}>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Company
                  </Text>
                  <Text style={createAccountText}>
                    Ask a co-worker with an account to send you an invite.
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
                  loading={this.state.isLoading}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{width:'35%'}} onPress={() => this.toggleModal()}>
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

  render() {
    return(
      <View>
        { this.loginView() }
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
