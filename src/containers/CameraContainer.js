import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createBlip, getBlips } from '../actions/api'
import CameraScreen from '../screens/Profile/CameraScreen'

const mapStateToProps = state => ({
  loading: state.apiReducer.loading,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createBlip, getBlips }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraScreen)
