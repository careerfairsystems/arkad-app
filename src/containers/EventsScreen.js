import { connect } from 'react-redux'
import EventsScreen from '../screens/Events/EventsScreen'

const mapStateToProps = state => ({
  eventList: state.eventReducer
})

export default connect(mapStateToProps)(EventsScreen)
