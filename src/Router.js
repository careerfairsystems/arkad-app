import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import MapScreen from './screens/Map/MapScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import EventsScreenContainer from './containers/EventsScreen'
import AboutScreen from './screens/About/AboutScreen'

const Router = createBottomTabNavigator({
  Map: {
    screen: createStackNavigator({
      MapStack: {
        screen: MapScreen,
        navigationOptions: {
          title: 'MapScreen'
        }
      }
    })
  },
  Companies: {
    screen: createStackNavigator({
      CompanyStack: {
        screen: CompaniesScreenContainer,
        navigationOptions: {
          title: 'Companies'
        }
      }
    })
  },
  Events: {
    screen: createStackNavigator({
      EventStack: {
        screen: EventsScreenContainer,
        navigationOptions: {
          title: 'Events'
        }
      }
    })
  },
  About: {
    screen: createStackNavigator({
      AboutStack: {
        screen: AboutScreen,
        navigationOptions: {
          title: 'About'
        }
      }
    })
  }
})

export default Router
