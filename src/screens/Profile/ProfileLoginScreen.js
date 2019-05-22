import React, { Component } from 'react'
import { View, Text, TextInput, SectionList, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import LogoutButton from '../../containers/LogoutButton'
import StudentListItem from '../../components/listItems/StudentListItem'
import SectionHeader from '../../components/SectionHeader'


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
  },
}

const studentList = [ {  key: '1010146733143312',
                         name: 'HAHiuiouoiuoiuoiuAHAHAHAHA',
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
                       { key: '1010146794928248',
                         name: 'oioioioioioioioi',
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

const { content, outerContainer, innerContainer, loginBtn, h1, h2, textInput } = styles

class ProfileLoginScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
        headerLeft: null
    });
  }

  handlePress() {
    this.setState({isLoading: true})
    this.login()
  }

  async login() {
    await this.props.loadLogin(this.state.username, this.state.password)
    this.setState({username:''})
    this.setState({password:''})
    this.setState({isLoading: false})
    if (this.props.logedIn) {
      this.props.navigation.setParams({
          headerLeft: <LogoutButton navigation={this.props.navigation} />
      });
    }
  }

  listView() {
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
    // console.log("HAHASIDHAIUHSDIUAHSDIUAHS")
    // console.log(sections)
    return(
      <View style={outerContainer}>
      <SectionList
        renderItem={({ item }) => <StudentListItem navigation={this.props.navigation} student={item} />}
        renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
        sections={sections}
        onScrollBeginDrag={() => Keyboard.dismiss()}
      />
      </View>
    )
  }

  loginView() {
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
            value={this.state.username}
            onChangeText={(text) => this.setState({username:text})}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            style={textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password:text})}
          />
          <Button title='Login'
                  onPress={() => this.handlePress()}
                  loading={this.state.isLoading}
          />
        </View>
      </View>
    )
  }

  render() {
    return(
      <View>
        { this.props.logedIn
          ?
            <View>
              { this.listView() }
            </View>
          :
            <View>
              { this.loginView() }
            </View>
        }
      </View>
    )
  }
}

ProfileLoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default ProfileLoginScreen
