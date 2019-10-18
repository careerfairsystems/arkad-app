import React, { Component } from 'react'
import { View, Text, TextInput, SectionList, RefreshControl, Keyboard, Image, Linking, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import Modal from "react-native-modal"
import Button from '../../components/Button'
import LogoutButton from '../../containers/LogoutButton'
import HrefButton from '../../components/HrefButton'
import CloseButton from '../../components/CloseButton'
import StudentListItem from '../../components/listItems/StudentListItem'
import StudentCard from '../../containers/StudentCardContainer'
import StudentList from '../../containers/StudentListContainer'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoadingView from '../../components/LoadingView'


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
  inputContainer: {
   height: 40,
   borderTopColor: '#000',
   backgroundColor: 'rgba(0, 43, 100, 0.2)',
   borderRadius: 8,
   marginTop: 8,
   paddingLeft: 10
  },
  input: {
    height: '100%',
    width: '100%',
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
    height: 140,
    width: 145,
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
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center'
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
    height: 500,
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


const { header, buttonText, headerIcon, bar, title, scrollViewContent, listContainer, welcomeContainer, outerContainer, innerContainer, loginBtn, h1, h2, input,
        welcomeText, infoText, image, imageContainer, createAccountContainer, createAccountText, createAccountView, headerRightView, modalText, cardImage, button, helpView, helpContainer, text, hostImage, inputContainer } = styles

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
      showStudentHelpModal: false,
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
    if (this.props.logedIn == false) {
      return
    }
    this.fetchBlips()
    this.setState({
      password: '',
    })
  }

  async fetchBlips() {
    await this.props.getMyInfo()
    const windowWidth = Dimensions.get('window').width
    if (!this.props.companyLogedIn) {
      this.props.navigation.setParams({
          header: undefined,
          headerRight: (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity style={button} onPress={() => this.toggleStudentHelpModal()}>
              { windowWidth < 350 ?
                [<Icon style={[headerIcon, {paddingHorizontal: 0}]} name='question' size={16} color='#fff'/>,
                <Text style={[buttonText, {fontSize: 9}]}>Help</Text>]
                : [<Icon style={headerIcon} name='question' size={21} color='#fff'/>,
                <Text style={buttonText}>Help</Text>]}
              </TouchableOpacity>
              <LogoutButton navigation={this.props.navigation} />
            </View>
          )
      })
    }
    this.checkBlips()
  }

  async checkBlips() {
    if (this.props.companyLogedIn) {
      const windowWidth = Dimensions.get('window').width
      await this.props.getBlips()
      this.props.navigation.setParams({
          header: undefined,
          headerRight: (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity style={button} onPress={() => this.toggleHelpModal()}>
              { windowWidth < 350 ?
                [<Icon style={[headerIcon, {paddingHorizontal: 0}]} name='question' size={16} color='#fff'/>,
                <Text style={[buttonText, {fontSize: 9}]}>Help</Text>]
                : [<Icon style={headerIcon} name='question' size={21} color='#fff'/>,
                <Text style={buttonText}>Help</Text>]}
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

  toggleStudentHelpModal() {
    this.setState({ showStudentHelpModal: !this.state.showStudentHelpModal });
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
            <Text style={{fontStyle: 'italic', marginTop: 16, fontSize: 20 }}> Scanning System </Text>
          </View>
          <View style={inputContainer}>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={input}
              placeholder="Username"
              placeholderTextColor = 'gray'
              autoCompleteType={'email'}
              keyboardType={'email-address'}
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={[inputContainer, {marginBottom: 20}]}>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={input}
              placeholder="Password"
              placeholderTextColor = 'gray'
              secureTextEntry={true}
              autoCompleteType={'password'}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <Button title='Login'
                  onPress={() => this.handlePress()}
                  loading={this.props.loading}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{width:'70%'}} onPress={() => this.toggleCreateAccountModal()}>
              <Text style={h2}>
                Need an account?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'70%'}} onPress={() => Linking.openURL('https://arkad-nexpo.herokuapp.com/forgot-password')}>
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
  gotoStudentFAQ() {
    this.toggleStudentHelpModal()
    this.props.navigation.navigate('Faq')
  }


  studentHelpView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showStudentHelpModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showStudentHelpModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
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
                    How does the card work?
                  </Text>
                  <Text style={createAccountText}>
                    Click the card to see your QR-code. Companies see the same card as you.
                  </Text>
                  <CloseButton title='Learn more about the system' onPress={() => Linking.openURL('https://www.arkadtlth.se/scan')}></CloseButton>
                </View>
                <View style={{marginTop: 15, marginBottom:50}}>
                  <Text style={[createAccountText, {fontWeight: 'bold', fontSize:18}]}>
                    Changing your information
                  </Text>
                  <Button title='Edit Profile' onPress={() => Linking.openURL('https://arkad-nexpo.herokuapp.com/user')}></Button>
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
                          onPress={() => this.toggleStudentHelpModal()}
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
    if (this.props.companyLogedIn != null) {
      if (!this.props.companyLogedIn) {
        return <StudentCard student={this.state.student} navigation={this.props.navigation} typeLogedin={this.props.companyLogedIn}/>
      } else {
        if (!this.props.blips_loading) {
        return <StudentList navigation={this.props.navigation} isLoading={this.props.loading} cameraPermissionGiven={this.props.cameraPermissionGiven} setCameraPermission={this.props.setCameraPermission}/>
      }
      }
    } else {
      return <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%'}}><LoadingView /></View>
    }
  }

  render() {
    return(
      <View>
        { this.props.logedIn ? this.loadHome() : this.loginView()}
        { this.helpView() }
        { this.studentHelpView() }
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
