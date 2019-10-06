import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadLogin, getMyInfo } from '../actions/api'
import ProfileLoginScreen from '../screens/Profile/ProfileLoginScreen'
import StudentList from '../components/StudentList'
import setCameraPermission from '../actions/camera'



const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn,
  loading: state.apiReducer.loading,
  typeLogedin: state.apiReducer.typeLogedin,
  jwt: state.apiReducer.jwt,
  cameraPermissionGiven: state.cameraReducer.cameraPermissionGiven,
  myInfo: state.apiReducer.myInfo,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogin, setCameraPermission, getMyInfo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLoginScreen)
