import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getBlips, removeBlippedStudent } from '../actions/api'
import RemoveButton from '../components/RemoveButton'

const mapStateToProps = state => ({
  loading: state.apiReducer.loading
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBlips, removeBlippedStudent }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveButton)
