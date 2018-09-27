import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCompanies } from '../actions/api'
import ApiLoadingView from '../components/ApiLoadingView'

const mapStateToProps = state => ({
  loading: state.apiReducer.loading,
  error: state.apiReducer.error,
  updated: state.apiReducer.updated
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCompanies }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiLoadingView)
