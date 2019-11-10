import React, { Component } from 'react'
import { View, Text, TextInput, SectionList, RefreshControl, Keyboard, Image, Linking, TouchableOpacity, ScrollView, Dimensions, Platform, StatusBar } from 'react-native'
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
import QRCode from 'react-native-qrcode'


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
    height:'55%',
    width:'100%',
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
    paddingRight: 8,
    paddingLeft: 12,
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
    width:'100%',
  },
  helpView: {
    height:'60%',
    width:'100%',
    backgroundColor: '#fff',
    borderRadius:10,
  },
  qrModal: {
    height:'100%',
    width:'100%',
    backgroundColor: '#fff',
    borderRadius:10,
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
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 10
  },
  qrText: {
    textAlign: 'center',
    fontSize: 14,
    width: '100%',
    marginBottom: 20,
    color: global.arkadBlue
  },
}


const { header, buttonText, headerIcon, bar, title, scrollViewContent, listContainer, welcomeContainer, outerContainer, innerContainer, loginBtn, h1, h2, input,
        welcomeText, infoText, image, imageContainer, createAccountContainer, createAccountText, createAccountView, headerRightView, modalText, cardImage, button, helpView, helpContainer, text, hostImage, inputContainer, qrText, qrModal } = styles

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
      showStudentQRModal: false,
      student: false,
      student_id: 0,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
        header: null,
    })
    if (this.props.logedIn == true) {
      this.fetchBlips()
    }
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
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            {Platform.OS === 'android' ?
            <TouchableOpacity style={button} onPress={() => this.toggleStudentQRModal()}>
            { windowWidth < 350 ?
              [<Icon style={[headerIcon, {marginLeft: 0}]} name='qrcode' size={14} color='#fff'/>,
              <Text style={[buttonText, {fontSize: 9, marginTop: 3}]}>QR-Code</Text>]
              : [<Icon style={headerIcon} name='qrcode' size={20} color='#fff'/>,
              <Text style={buttonText}>QR-Code</Text>]}
            </TouchableOpacity>
            : null}
              <TouchableOpacity style={button} onPress={() => this.toggleStudentHelpModal()}>
              { windowWidth < 350 ?
                [<Icon style={[headerIcon, {paddingHorizontal: 0}]} name='question' size={16} color='#fff'/>,
                <Text style={[buttonText, {fontSize: 9}]}>Help</Text>]
                : [<Icon style={headerIcon} name='question' size={21} color='#fff'/>,
                <Text style={buttonText}>Help</Text>]}
              </TouchableOpacity>
              <LogoutButton navigation={this.props.navigation} />
            </View>
          ),
          headerLeft: (
            Platform.OS === 'android' ? null :
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity style={button} onPress={() => this.toggleStudentQRModal()}>
              { windowWidth < 350 ?
                [<Icon style={[headerIcon, {marginLeft: 0}]} name='qrcode' size={14} color='#fff'/>,
                <Text style={[buttonText, {fontSize: 9, marginTop: 3}]}>QR-Code</Text>]
                : [<Icon style={headerIcon} name='qrcode' size={20} color='#fff'/>,
                <Text style={buttonText}>QR-Code</Text>]}
              </TouchableOpacity>
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

  toggleStudentQRModal() {
    this.setState({ showStudentQRModal: !this.state.showStudentQRModal });
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
              placeholder="Email"
              placeholderTextColor = 'gray'
              autoCapitalize = 'none'
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

  isEmpty(str) {
      return (!str || 0 === str.length);
  }

  getText(str){
    if (this.isEmpty(str))
      return 'Not set'
    return str
  }

  formatPhone(nbr){
    if (this.isEmpty(nbr)){
      return 'Not set'
    }
    else if (nbr.toString().charAt(0) == '+' || nbr.toString().charAt(0) == '0'){
      return nbr
    }
    else{
      return '0'.toString().concat(nbr)
    }
  }


  studentHelpView() {
    return(
      <View style={{ backgroundColor: 'pink' }}>
        <Modal onBackdropPress={() => this.setState({ showStudentHelpModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showStudentHelpModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
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
                    Once companies have scanned your QR-code they see your card. We recommend you add your interests, graduation year and program information as companies are very interested in this information. Adding a profile picture will help them remember you from the fair. You should also add a CV or linkedin so companies can learn more about you. All this information is collected from your Nexpo account.
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
        </Modal>
      </View>
    )
  }

  studentQRView() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showStudentQRModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showStudentQRModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={helpContainer}>
            <View style={qrModal}>
              <View style={{flex: 1, flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[qrText, { marginTop: 20, fontWeight: 'bold' }]}>
                  Your personal QR-code.
                </Text>
                <Text style={qrText}>
                  Go share it with your favourite companies!
                </Text>
                { this.props.myInfo.student != undefined ?
                  <View style={{ marginTop: 10, marginBottom: 25 }}>
                  <QRCode
                    value={'https://www.arkadtlth.se/wrong-qr/' + this.props.myInfo.student.id.toString()}
                    size={200}
                    bgColor='rgb(0, 43, 100)'
                    fgColor='#fff'
                  />
                  </View>
                : null}
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%',
                marginBottom:20,
                marginTop: 10}}>
                <View style={{width:'40%'}}>
                  <CloseButton title='Close'
                          onPress={() => this.toggleStudentQRModal()}
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
                  <View style={{flexDirection: 'row', marginTop: 7, marginBottom: 7, alignItems:'center'}}>
                  {(this.props.logedIn == false || this.props.companyLogedIn== false || this.props.myInfo.representative == null || this.props.myInfo.representative.company == null)  ? null : this.getHostImage(this.props.myInfo.representative.company.host_email)}
                  <Text style={[createAccountText, {marginRight:8, width: '60%'}]}>
                    {(this.props.logedIn == false || this.props.companyLogedIn == false || this.props.myInfo.representative == null || this.props.myInfo.representative.company == null) ? null : this.getText(this.props.myInfo.representative.company.host_name)}
                    {"\n"}
                    {(this.props.logedIn == false || this.props.companyLogedIn == false || this.props.myInfo.representative == null || this.props.myInfo.representative.company == null) ? null : this.getText(this.props.myInfo.representative.company.host_email)}
                    {"\n"}
                    {(this.props.logedIn == false || this.props.companyLogedIn == false || this.props.myInfo.representative == null || this.props.myInfo.representative.company == null) ? null : this.formatPhone(this.props.myInfo.representative.company.host_phone)}
                  </Text>
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
      return <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}><LoadingView /></View>
    }
  }

  render() {
    return(
      <View>
        { this.props.logedIn ? this.loadHome() : this.loginView()}
        { this.helpView() }
        { this.studentHelpView() }
        { this.props.logedIn && !this.props.companyLogedIn ? this.studentQRView() : null }
        { this.props.loading && this.props.logedIn ? <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}><LoadingView /></View> : null }
      </View>
    )
  }

  //Bless me father for I have sinned. My last confession was 2 months ago and these are my sins. Since pictures of ARKAD career fair hosts could not be hosted in blessed Nexpo, this vile switch case method below had to be constructed. React-natives bundling does not allow dynamic images, so each resource must be listed if URI isn't used. May the lord have mercy on my wicked ways.
  getHostImage(hostEmail){
      switch (hostEmail){
        case 'Alaxan_@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/Alaxan_@hotmail.com.jpg')} />
        case 'ag1633ko-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/ag1633ko-s@student.lu.se.jpg')} />
        case 'aj3487ma-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/aj3487ma-s@student.lu.se.jpg')} />
        case 'amalia.emmoth@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/amalia.emmoth@hotmail.com.jpg')} />
        case 'amanda.blad@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/amanda.blad@hotmail.com.jpg')} />
        case 'antonliljefors@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/antonliljefors@gmail.com.jpg')} />
        case 'anudeepgudimella1996@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/anudeepgudimella1996@gmail.com.jpg')} />
        case 'badrireddy1997@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/badrireddy1997@gmail.com.jpg')} />
        case 'bibbibihari@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/bibbibihari@gmail.com.jpg')} />
        case 'celia1793@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/celia1793@gmail.com.jpg')} />
        case 'chandana.somashekarmysore@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/chandana.somashekarmysore@gmail.com.jpg')} />
        case 'christoffer.s@hotmail.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/christoffer.s@hotmail.se.jpg')} />
        case 'cogustaflundgren@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/cogustaflundgren@gmail.com.jpg')} />
        case 'da2587lu-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/da2587lu-s@student.lu.se.jpg')} />
        case 'dat15asj@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/dat15asj@student.lu.se.jpg')} />
        case 'david.l.lundberg@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/david.l.lundberg@gmail.com.jpg')} />
        case 'dolf_96@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/dolf_96@hotmail.com.jpg')} />
        case 'ebba.lundberg@users.tlth.se': return <Image style={hostImage} source={require('../../../resources/img/arkadTeam/Ebba_Lundberg.png')} />
        case 'edvin72@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/edvin72@hotmail.com.jpg')} />
        case 'elmer.henrik@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/elmer.henrik@gmail.com.jpg')} />
        case 'elt15dba@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/elt15dba@student.lu.se.jpg')} />
        case 'emelie.v.wiklund@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/emelie.v.wiklund@gmail.com.jpg')} />
        case 'emil.palmenas@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/emil.palmenas@gmail.com.jpg')} />
        case 'ersv1001@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/ersv1001@gmail.com.jpg')} />
        case 'fabian.larhed@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/fabian.larhed@gmail.com.jpg')} />
        case 'fanny.ejlertsson@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/fanny.ejlertsson@gmail.com.jpg')} />
        case 'fi7023li-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/arkadTeam/Filip_Lindkvist.png')} />
        case 'fionaahay@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/fionaahay@hotmail.com.jpg')} />
        case 'georghanoivarsson@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/georghanoivarsson@gmail.com.jpg')} />
        case 'go3751go-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/go3751go-s@student.lu.se.jpg')} />
        case 'gopalakrishnan.rajappa@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/gopalakrishnan.rajappa@gmail.com.jpg')} />
        case 'gsranjitha3003bsc@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/gsranjitha3003bsc@gmail.com.jpg')} />
        case 'gustav.a.klotz@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/gustav.a.klotz@gmail.com.jpg')} />
        case 'ha7758an-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/ha7758an-s@student.lu.se.jpg')} />
        case 'hema.kalidasu@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/hema.kalidasu@gmail.com.jpg')} />
        case 'henry.sandell@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/henry.sandell@gmail.com.jpg')} />
        case 'hermanluthagen@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/hermanluthagen@gmail.com.jpg')} />
        case 'id3741je-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/id3741je-s@student.lu.se.jpg')} />
        case 'jessica.kageman@users.tlth.se': return <Image style={hostImage} source={require('../../../resources/img/arkadTeam/Jessica_Kageman.png')} />
        case 'joelbacker10@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/joelbacker10@gmail.com.jpg')} />
        case 'johnmoberg97@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/johnmoberg97@gmail.com.jpg')} />
        case 'karloskarrikaas@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/karloskarrikaas@gmail.com.jpg')} />
        case 'karnarjun2018@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/karnarjun2018@gmail.com.jpg')} />
        case 'lan14elu@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/lan14elu@student.lu.se.jpg')} />
        case 'li1782an-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/li1782an-s@student.lu.se.jpg')} />
        case 'lilja.gustav@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/lilja.gustav@gmail.com.jpg')} />
        case 'lisa.swanberg@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/lisa.swanberg@gmail.com.jpg')} />
        case 'lisaafklint@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/lisaafklint@hotmail.com.jpg')} />
        case 'lisachung98@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/lisachung98@gmail.com.jpg')} />
        case 'ludvig.soederman@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/ludvig.soederman@gmail.com.jpg')} />
        case 'manideepkumar7200@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/manideepkumar7200@gmail.com.jpg')} />
        case 'meshachmilon@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/meshachmilon@gmail.com.jpg')} />
        case 'molly.lilljebjornrusk@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/molly.lilljebjornrusk@gmail.com.jpg')} />
        case 'nat14lsp@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/nat14lsp@student.lu.se.jpg')} />
        case 'nermina_ng@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/nermina_ng@hotmail.com.jpg')} />
        case 'niklas_karlsson93@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/niklas_karlsson93@hotmail.com.jpg')} />
        case 'o.dekuijer@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/o.dekuijer@hotmail.com.jpg')} />
        case 'oliviasamuelsson_@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/oliviasamuelsson_@hotmail.com.jpg')} />
        case 'oscar.odestal@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/oscar.odestal@gmail.com.png')} />
        case 'oskar.v.heimer@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/oskar.v.heimer@gmail.com.jpg')} />
        case 'oskar@hindgren.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/oskar@hindgren.se.jpg')} />
        case 'paw.eriksson@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/paw.eriksson@hotmail.com.jpg')} />
        case 'rbitenieks@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/rbitenieks@gmail.com.jpg')} />
        case 'rebeckasvensson27@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/rebeckasvensson27@gmail.com.jpg')} />
        case 'rodrigo_ibq@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/rodrigo_ibq@hotmail.com.jpg')} />
        case 'sa5141ol-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sa5141ol-s@student.lu.se.jpg')} />
        case 'sandraarvidsson@hotmail.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sandraarvidsson@hotmail.se.jpg')} />
        case 'sara.ahrari97@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sara.ahrari97@gmail.com.jpg')} />
        case 'sara.l.wallen@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sara.l.wallen@gmail.com.jpg')} />
        case 'sarajohannesson96@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sarajohannesson96@gmail.com.jpg')} />
        case 'sharaththandavamurthy@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sharaththandavamurthy@gmail.com.jpg')} />
        case 'sofiarokkones@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/sofiarokkones@gmail.com.jpg')} />
        case 'stina.josephson@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/stina.josephson@hotmail.com.jpg')} />
        case 'tna14ewr@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/tna14ewr@student.lu.se.jpg')} />
        case 'tobiaswidmark97@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/tobiaswidmark97@gmail.com.png')} />
        case 'tusjant@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/tusjant@gmail.com.jpg')} />
        case 'uno.thurfjell@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/uno.thurfjell@gmail.com.jpg')} />
        case 'vi8808da-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/vi8808da-s@student.lu.se.jpg')} />
        case 'vov15ffa@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/vov15ffa@student.lu.se.jpg')} />
        case 'ye0082ha-s@student.lu.se': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/ye0082ha-s@student.lu.se.jpg')} />
        case 'wilhelmsson.clara@hotmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/wilhelmsson.clara@hotmail.com.jpg')} />
        case 'zemtsovski.andrej@gmail.com': return <Image style={hostImage} source={require('../../../resources/img/careerFairHosts/zemtsovski.andrej@gmail.com.jpg')} />


        default: return <Image style={hostImage} source={require('../../../resources/img/arkadTeam/default.png')} />
        }
  }

}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
