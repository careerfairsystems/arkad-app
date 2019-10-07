import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import SelectableStudentListItem from './SelectableStudentListItem'

const styles = {
  title: {
    fontSize: 16
  }
}

const { title } = styles
const StudentListItem = ({ navigation, student, userType }) => {
  return (
    <SelectableStudentListItem navigation={navigation} item={student} userType={userType}>
      <Text style={title}>{student.first_name} {student.last_name}</Text>
    </SelectableStudentListItem>
  )
}

StudentListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  student: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired
}

export default StudentListItem
