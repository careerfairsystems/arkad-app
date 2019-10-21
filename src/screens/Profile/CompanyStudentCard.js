import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, Image, SectionList, RefreshControl, Dimensions, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native'
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
import { HeaderBackButton } from 'react-navigation'
import LoadingView from '../../components/LoadingView'
import SaveSuccess from '../../components/SaveSuccess'
import ButtonBar from '../../components/ButtonBar'
import DoneButton from 'react-native-keyboard-done-button'


const style = {
  starCount: 3.5,
  isLoading: false,
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
  removeButton: {
    paddingHorizontal: 16,
    backgroundColor: global.arkadBlue,
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

const { container, flipCard, flipCardFront, flipCardBack, qrText, button, text, filterView, headerIcon, buttonText, cardImage, profileText, modalText, removeButton } = style

class StudentCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flip: false,
      starCount: 0,
      isLoading: false,
      student: false,
      showModal: false,
      showUnsavedModal: false,
      commentText: '',
      hasChanged: false,
    }
  }

  async componentDidMount() {
    let tempComment = this.props.navigation.state.params.item.comment.replace(/\%0A/g, '\n')
    if (this.props.navigation.state.params.item.comment == null) {
      tempComment = ""
    }
    this.setState({
      starCount: this.props.navigation.state.params.item.rating,
      commentText: tempComment,
    })

    this.props.navigation.setParams({
        headerLeft: (
          <HeaderBackButton tintColor='#fff' onPress={() => this.customGoBack()} />
        )
    })

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
            <TouchableOpacity style={removeButton} onPress={() => this.toggleModal()}>
              <Icon style ={headerIcon} name='trash' size={21} color='#fff'/>
              <Text style={buttonText}>Remove</Text>
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

  customGoBack() {
    {this.state.hasChanged
      ? this.setState({
        showUnsavedModal: true,
      })
      : this.props.navigation.navigate('ProfileStack')}
  }

  onStarRatingPress(rating) {
    if (rating != this.state.starCount) {
      this.setState({
        hasChanged: true,
      })
    }
    this.setState({
      starCount: rating,
    })
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  toggleUnsavedModal() {
    this.setState({ showUnsavedModal: !this.state.showUnsavedModal });
  }

  async save() {
    const studentInfo = this.props.navigation.state.params.item
    await this.setState({
      hasChanged: false
    })
    await this.props.commentRateStudent(studentInfo.student_id, this.state.starCount, this.state.commentText)
    this.updateBlips()
  }

  async updateBlips() {
    const studentInfo = this.props.navigation.state.params.item
    await this.props.getBlips(studentInfo.student_id)
  }

  handleCommentText(text) {
    this.setState({commentText: text, hasChanged: true})
  }

  saveSuccessTimer() {
    setTimeout(() => this.props.unsetSaved(), 7000)
  }

  companyLogin() {
    var windowHeight = Dimensions.get('window').height
    const studentInfo = this.props.navigation.state.params.item

    return(
      <ScrollView style={{width: '100%', height: '100%'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={flipCardFront}>
          <View style={{flex: 10, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 30}}>
            <Image
              style={cardImage}
              source={require('../../../resources/img/arkadTeam/default.png')}
            />
            <Text style={{fontWeight: 'bold', fontSize: 22, marginVertical: '5%'}}>
              {studentInfo.first_name} {studentInfo.last_name}
            </Text>
          </View>
          {!this.props.loading ?
          <View style={{flex: 10, width: '100%', padding: '5%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{width: '35%'}}>
                <Text style={[profileText, {fontWeight: 'bold'}]}>
                  Programme:
                </Text>
              </View>
              <View style={{width: '65%'}}>
                <Text style={profileText}>
                  {studentInfo.programme.name == null ? "-" : studentInfo.programme.name}
                </Text>
              </View>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{width: '35%'}}>
                <Text style={[profileText, {fontWeight: 'bold'}]}>
                  Year:
                </Text>
              </View>
              <View style={{width: '65%'}}>
                <Text style={profileText}>
                  {studentInfo.year == null ? "-" : studentInfo.year}
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
                  {studentInfo.year == null ? "-" : studentInfo.year}
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
                  {studentInfo.year == null ? "-" : studentInfo.year}
                </Text>
              </View>
            </View>
          </View>
          : null}
          <View style={{flex: 10, flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 5, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 4}}>
              <ButtonBar linkedin={studentInfo.linked_in} email_adr={studentInfo.email} cvsv={studentInfo.resume_sv_url} cven={studentInfo.resume_en_url}/>
            </View>
            <View style={{flex: 1, flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 4, height: 90}}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                starSize={40}
              />
            </View>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={windowHeight*0.25} enabled style={{flex: 9, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: '100%'}}>
              <TextInput
                style={{width: '100%', height: 130, borderColor: global.arkadBlue, borderWidth: 1, textAlignVertical: 'top', borderRadius: 8, paddingLeft: 7, paddingTop: 4, backgroundColor: '#fff', zIndex: 1000, marginBottom: 20}}
                onChangeText={(text) => this.handleCommentText(text)}
                value={this.state.commentText=='not set' ? "" : this.state.commentText}
                placeholder="Write your comment here..."
                underlineColorAndroid="transparent"
                multiline = {true}
              />
              <Button title='Save'
                      onPress={() => this.save()}
                      loading={this.state.isLoading}
              />
            </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    )
  }

  removeView() {
    const studentInfo = this.props.navigation.state.params.item
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center', paddingVertical: '19%', top: '8%'}}>
          <View style={{ borderRadius: 8, backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%", paddingHorizontal: '3%'}}>
              <Text style={{fontSize: 16}}>Are you sure you want to remove this student?</Text>
            </View>
            <View style={{flex: 6, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
              <Image
                style={cardImage}
                source={require('../../../resources/img/arkadTeam/default.png')}
              />
              <Text style={{marginTop: '3%', fontWeight: 'bold', fontSize: 16}}>{studentInfo.first_name} {studentInfo.last_name}</Text>
            </View>
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%", flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
                <RemoveButton navigation={this.props.navigation} studentId={studentInfo.student_id} />
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

  unsavedModal() {
    return(
      <View>
        <Modal onBackdropPress={() => this.setState({ showUnsavedModal: false })} backdropTransitionOutTiming={0} isVisible={this.state.showUnsavedModal} style={{ flex:1, alignItems: 'center', justifyContent: 'center', paddingVertical: '30%'}}>
          <View style={{ borderRadius: 8, backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <View style={{flex: 1, marginTop: 8, justifyContent: 'center', alignItems: 'center', width: '80%'}}>
            <Text style={{textAlign: 'center', marginBottom: 24, fontSize: 20, fontWeight: 'bold'}}>Unsaved changes</Text>
            <Text style={{textAlign: 'center'}}>Are you sure you want to leave now? You need to click "save" to keep your changes.</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%", flexDirection: 'row'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
              <TouchableOpacity style={{marginHorizontal: 16, marginVertical: 8, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}} onPress={() => this.props.navigation.goBack()}>
                <Text style={{fontSize: 16, color: 'red'}}>Leave</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
              <TouchableOpacity style={button} onPress={() => this.toggleUnsavedModal()}>
                <Text style={modalText}>Stay</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
      </View>
    )
  }

  render() {
    this.saveSuccessTimer()
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', width: "100%", height:"100%"}}>
        {this.props.loading ?
        <View style={{position: 'absolute', width: '100%', height: '100%', zIndex: 100, alignItems: 'center', justifyContent: 'center'}}>
          <LoadingView />
        </View>
        : null}
        {this.props.save_success ?
        <View style={{position: 'absolute', width: '100%', height: '100%', zIndex: 100, alignItems: 'center', justifyContent: 'center'}}>
          <SaveSuccess />
        </View>
        : null}
        { this.companyLogin() }
        { this.removeView() }
        { this.unsavedModal() }
      </View>
    )
  }
}

export default StudentCard
