import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapScreen from './screens/Map/MapScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import EventsScreenContainer from './containers/EventsScreen'
import AboutScreen from './screens/About/AboutScreen'

const Router = createBottomTabNavigator(
  {
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
  },
  {
    navigationOptions: ({ navigation }) => ({
      // TODO: Fix Arkad icon
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Map') {
          iconName = 'map-o'
        } else if (routeName === 'Companies') {
          iconName = 'briefcase'
        } else if (routeName === 'Events') {
          iconName = 'calendar-check-o'
        } else if (routeName === 'About') {
          iconName = 'question'
        }
        return <Icon name={iconName} size={20} color={tintColor} />
      }
    })
  }
)

export default Router
