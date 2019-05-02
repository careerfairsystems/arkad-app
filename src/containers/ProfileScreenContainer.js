import { connect } from 'react-redux'
import ProfileLoginScreen from '../screens/Profile/ProfileLoginScreen'
import { login } from '../actions/api'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default ProfileLoginScreen
