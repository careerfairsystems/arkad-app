import { connect } from 'react-redux'
import ArkadTeamScreen from '../screens/About/ArkadTeamScreen'

const mapStateToProps = state => ({
  arkadTeam: state.aboutReducer.arkadTeam
})

export default connect(mapStateToProps)(ArkadTeamScreen)
