import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCompanies, loadUpdatedSince } from '../actions/api'
import AppStateHandler from '../components/AppStateHandler'

const mapStateToProps = state => ({
  notUpdated: state.apiReducer.notUpdated,
  loading: state.apiReducer.loading,
  error: state.apiReducer.error,
  updated: state.apiReducer.updated
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies, loadUpdatedSince }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppStateHandler)
