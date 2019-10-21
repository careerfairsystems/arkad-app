import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadLogin, getMyInfo, getBlips } from '../actions/api'
import ProfileLoginScreen from '../screens/Profile/ProfileLoginScreen'
import StudentList from '../components/StudentList'
import setCameraPermission from '../actions/camera'



const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn,
  loading: state.apiReducer.loading,
  blips_loading: state.apiReducer.blips_loading,
  companyLogedIn: state.apiReducer.companyLogedIn,
  jwt: state.apiReducer.jwt,
  cameraPermissionGiven: state.cameraReducer.cameraPermissionGiven,
  myInfo: state.apiReducer.myInfo,
  blips: state.apiReducer.blips,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadLogin, setCameraPermission, getMyInfo, getBlips }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLoginScreen)
