import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StudentList from '../components/StudentList'
import setCameraPermission from '../actions/camera'
import { getBlips } from '../actions/api'


const mapStateToProps = state => ({
  items: state.apiReducer.items,
  logedIn: state.apiReducer.logedIn,
  loading: state.apiReducer.loading,
  blips_loading: state.apiReducer.blips_loading,
  cameraPermissionGiven: state.cameraReducer.cameraPermissionGiven,
  myInfo: state.apiReducer.myInfo,
  blips: state.apiReducer.blips,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCameraPermission, getBlips }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList)
