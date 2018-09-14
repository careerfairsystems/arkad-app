import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toggleChangeFloor from '../actions/map'
import { loadCompanies } from '../actions/company'
import MapScreen from '../screens/Map/MapScreen'

const mapStateToProps = state => ({
  currentFloor: state.mapReducer.currentFloor,
  floors: state.mapReducer.floors,
  loading: state.companyReducer.loading,
  error: state.companyReducer.error
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeFloor, loadCompanies }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)
