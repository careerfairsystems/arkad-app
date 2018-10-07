import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toggleChangeMap from '../actions/map'
import MapScreen from '../screens/Map/MapScreen'

const mapStateToProps = state => ({
  maps: state.mapReducer.maps
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeMap }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)
