import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  text: { fontSize: 16, color: 'red' }
}

async function remove(navigation, getBlips, removeBlippedStudent, studentId) {
  await removeBlippedStudent(studentId)
  getBlips()
  navigation.navigate('ProfileStack')
}

const { button, text } = styles
const RemoveButton = ({ navigation, getBlips, removeBlippedStudent, studentId, loading}) => (
  <TouchableOpacity onPress={() => remove(navigation, getBlips, removeBlippedStudent, studentId)}>
      {loading
        ? <ActivityIndicator color='red'/>
        : <Text style={text}>Remove</Text>
      }
  </TouchableOpacity>
)

RemoveButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default RemoveButton
