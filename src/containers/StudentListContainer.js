import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentList from '../components/StudentList'
import setCameraPermission from '../actions/camera'


const mapStateToProps = state => ({
  logedIn: state.apiReducer.logedIn,
  loading: state.apiReducer.loading,
  cameraPermissionGiven: state.cameraReducer.cameraPermissionGiven,
  myInfo: state.apiReducer.myInfo,
  blips: state.apiReducer.blips,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCameraPermission }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList)
