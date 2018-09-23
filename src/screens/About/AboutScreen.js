import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'

const styles = {
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
}

const { button, text } = styles
const AboutScreen = ({ navigation }) => (
  <DetailsScreen>
    <TouchableHighlight style={button} onPress={() => navigation.navigate('Detail')}>
      <Text style={text}>Questions? Check out our FAQ!</Text>
    </TouchableHighlight>
  </DetailsScreen>
)

AboutScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default AboutScreen
