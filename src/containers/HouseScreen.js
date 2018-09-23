import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toggleChangeMap from '../actions/map'
import HouseScreen from '../screens/Map/HouseScreen'

const mapStateToProps = state => ({
  currentMap: state.mapReducer.currentMap,
  maps: state.mapReducer.maps
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleChangeMap }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseScreen)
