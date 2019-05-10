import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'


const styles = {
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
    fontSize: 30,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    borderTopColor: '#000',
    backgroundColor: '#c9c9c9',
    borderRadius: 8,
    marginVertical: 10
  }
}

const ProfileLoginScreen = ({
  navigation, loadLogin, logedIn
}) => {
  console.log("FUUUUUUUUUUUUUK")
  console.log(logedIn)
  function test () {
    console.log(logedIn)
    console.log("\nasdas\nasdasd\n\n\n\n\nasdad")
    loadLogin("hej", "hejsan!")
    console.log("\notyiupotyiutpoiu\naoiertuoiertu\n\n\n\n\nauytafdtyagbhd")
  }
  return (
    <View style={outerContainer}>
      <View style={innerContainer}>
        <Text style={h1}>
          ARKAD
        </Text>
        <Text style={h2}>
          -Login
        </Text>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={textInput}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          underlineColorAndroid={'transparent'}
          style={textInput}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
        <Button title='Login' onPress={() => test()}/>
      </View>
    </View>
  )
}

const { outerContainer, innerContainer, loginBtn, h1, h2, textInput } = styles

// class ProfileLoginScreen extends Component {
//   constructor(props){
//     super(props)
//
//     this.state = {
//       username: '',
//       password: '',
//     }
//   }
//
//   handlePress(username, password) {
//     const loadLogin = this.props.loadLogin
//     loadLogin(username, password)
//   }
//
//   render() {
//     const username = this.state.username
//     const password = this.state.password
//     console.log("LOGED IN")
//     console.log(this.props.logedIn)
//     console.log("?????")
//     return (
//       <View style={outerContainer}>
//         <View style={innerContainer}>
//           <Text style={h1}>
//             ARKAD
//           </Text>
//           <Text style={h2}>
//             -Login
//           </Text>
//           <TextInput
//             underlineColorAndroid={'transparent'}
//             style={textInput}
//             placeholder="Username"
//             onChangeText={(text) => this.setState({username:text})}
//           />
//           <TextInput
//             underlineColorAndroid={'transparent'}
//             style={textInput}
//             placeholder="Password"
//             secureTextEntry={true}
//             onChangeText={(text) => this.setState({password:text})}
//           />
//           <Button title='Login' onPress={
//             () => this.handlePress(username, password)
//           }/>
//         </View>
//       </View>
//     )
//   }
// }

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
