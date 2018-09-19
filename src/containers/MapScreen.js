import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toggleChangeFloor from '../actions/map'
import MapScreen from '../screens/Map/MapScreen'

const mapStateToProps = state => ({
  currentFloor: state.mapReducer.currentFloor,
  floors: state.mapReducer.floors
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeFloor }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)
