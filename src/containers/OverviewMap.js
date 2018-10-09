import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleChangeMap, toggleChangeCompany } from '../actions/map'
import OverviewMap from '../components/maps/OverviewMap'

const mapStateToProps = state => ({
  maps: state.apiReducer.maps
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeMap, toggleChangeCompany }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewMap)
