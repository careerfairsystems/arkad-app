import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import SelectableListItem from './SelectableListItem'

const styles = {
  title: {
    flex: 1,
    fontSize: 16
  }
}

const { title } = styles
const StudentListItem = ({ navigation, student }) => {
  console.log("AAAAAAAAAAAAAAAAAHAHAHAHAHAHHA")
  console.log(student)
  return (
    <SelectableListItem navigation={navigation} item={student}>
      <Text style={title}>{student.name}</Text>
    </SelectableListItem>
  )
}

StudentListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  student: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default StudentListItem
