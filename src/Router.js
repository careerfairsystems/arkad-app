import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from '../selection.json'
import ShowFavoritesButton from './containers/ShowFavoritesButton'
import MapScreenContainer from './containers/MapScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import CompanyDetailsScreen from './screens/Companies/CompanyDetailsScreen'
import CompanyFilterScreenContainer from './containers/CompanyFilterScreen'
import EventsScreenContainer from './containers/EventsScreen'
import EventDetailsScreen from './screens/Events/EventDetailsScreen'
import AboutScreen from './screens/About/AboutScreen'
import FaqScreenContainer from './containers/FaqScreen'

const styles = {
  headerIcon: { paddingHorizontal: 14 }
}

const ArkadIcon = createIconSetFromFontello(fontelloConfig)

const MainStack = createBottomTabNavigator(
  {
    Map: {
      screen: createStackNavigator({
        MapStack: {
          screen: MapScreenContainer,
          navigationOptions: {
            title: 'Map'
          }
        }
      })
    },
    Companies: {
      screen: createStackNavigator({
        CompanyStack: {
          screen: CompaniesScreenContainer,
          navigationOptions: ({ navigation }) => ({
            title: 'Companies',
            headerRight: (
              <TouchableOpacity
                style={styles.headerIcon}
                onPress={() => navigation.navigate('Filter')}
              >
                <Icon name="filter" size={24} color="#000" />
              </TouchableOpacity>
            ),
            headerLeft: <ShowFavoritesButton />
          })
        },
        Detail: {
          screen: CompanyDetailsScreen,
          navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.item.name
          })
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
        },
        Detail: {
          screen: EventDetailsScreen,
          navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.item.name
          })
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
        },
        Detail: {
          screen: FaqScreenContainer,
          navigationOptions: () => ({
            title: 'FAQ'
          })
        }
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Disable unnecessary eslint warning
      // eslint-disable-next-line react/prop-types
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
          return <ArkadIcon name="arkadlogo" size={26} color={tintColor} />
        }
        return <Icon name={iconName} size={20} color={tintColor} />
      }
    })
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        header: null
      }
    },
    Filter: {
      screen: CompanyFilterScreenContainer,
      navigationOptions: ({ navigation }) => ({
        title: 'Filter',
        headerLeft: null,
        headerRight: (
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
            <Icon name="angle-down" size={34} color="#000" />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    mode: 'modal'
  }
)

export default RootStack
