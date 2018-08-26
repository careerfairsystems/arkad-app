import { createBottomTabNavigator } from 'react-navigation'
import MapScreen from './screens/Map/MapScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import EventsScreenContainer from './containers/EventsScreen'
import AboutScreen from './screens/About/AboutScreen'

const Router = createBottomTabNavigator({
  Map: {
    screen: MapScreen
  },
  Companies: {
    screen: CompaniesScreenContainer
  },
  Events: {
    screen: EventsScreenContainer
  },
  About: {
    screen: AboutScreen
  }
})

export default Router
