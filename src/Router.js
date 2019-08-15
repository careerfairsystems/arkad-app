import React from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from '../selection.json'
import SubtitleHeader from './components/SubtitleHeader'
import MapActionSheet from './containers/MapActionSheet'
import ShowFavoritesButton from './containers/ShowFavoritesButton'
import FaqButton from './components/FaqButton'
import MapScreen from './screens/Map/MapScreen'
import HouseScreenContainer from './containers/HouseScreen'
import CompaniesScreenContainer from './containers/CompaniesScreen'
import CompanyDetailsScreenContainer from './containers/CompanyDetailsScreen'
import CompanyFilterScreenContainer from './containers/CompanyFilterScreen'
import EventsScreenContainer from './containers/EventsScreen'
import EventDetailsScreen from './screens/Events/EventDetailsScreen'
import AboutScreenContainer from './containers/AboutScreen'
import CountdownScreen from './screens/Countdown/CountdownScreen'
import ArkadTeamScreenContainer from './containers/ArkadTeamScreen'
import FaqScreenContainer from './containers/FaqScreen'
import './../global'

const styles = {
  headerIcon: { paddingHorizontal: 14 }
}

const navigationOptions = {
  headerStyle: {
    backgroundColor: global.arkadBlue,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
}

const ArkadIcon = createIconSetFromFontello(fontelloConfig)

const MainStack = createBottomTabNavigator(
  {
    Countdown: {
      screen: createStackNavigator(
        {
          Countdown: {
            screen: CountdownScreen,
            navigationOptions: {
              header: null,
            }
          }
        },
        {
          cardStyle: {
            backgroundColor: global.arkadGray,
            shadowColor: 'transparent',
            elevation: 0,
          }
        }
      )
    },
    Map: {
      screen: createStackNavigator(
        {
          MapStack: {
            screen: MapScreen,
            navigationOptions: {
              ...navigationOptions,
              title: 'The ARKAD area',
              headerTitleStyle : {width : Dimensions.get('window').width}
//              headerTitle: <SubtitleHeader title="The ARKAD area" subtitle="Click on a building" />
            }
          },
          House: {
            screen: HouseScreenContainer,
            navigationOptions: {
              ...navigationOptions,
              headerTitle: <MapActionSheet />,
              headerTitleStyle : {width : Dimensions.get('window').width}
            }
          },
          CompanyDetails: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name,
              headerTitleStyle : {width : Dimensions.get('window').width}
            })
          }
        },
        {
          cardStyle: {
            backgroundColor: global.arkadGray,
            shadowColor: 'transparent',
            elevation: 0,
          }
        }
      )
    },
    Companies: {
      screen: createStackNavigator(
        {
          CompanyStack: {
            screen: CompaniesScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: 'Companies',
              headerTitleStyle : {width : Dimensions.get('window').width}
              // headerRight: (
              //   <TouchableOpacity
              //     style={styles.headerIcon}
              //     onPress={() => navigation.navigate('Filter')}
              //   >
              //     <Icon name="filter" size={24} color="#fff" />
              //   </TouchableOpacity>
              // ),
              // headerLeft: <ShowFavoritesButton />
            })
          },
          Detail: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name,
              headerTitleStyle : {width : Dimensions.get('window').width}
            })
          }
        },
        {
          cardStyle: {
            backgroundColor: global.arkadGray,
            shadowColor: 'transparent',
            elevation: 0,
          }
        }
      )
    },
    Events: {
      screen: createStackNavigator(
        {
          EventStack: {
            screen: EventsScreenContainer,
            navigationOptions: {
              ...navigationOptions,
              title: 'Events',
              headerTitleStyle : {width : Dimensions.get('window').width}
            }
          },
          Detail: {
            screen: EventDetailsScreen,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name,
              headerTitleStyle : {width : Dimensions.get('window').width}
            })
          }
        },
        {
          cardStyle: {
            backgroundColor: global.arkadGray,
            shadowColor: 'transparent',
            elevation: 0,
          }
        }
      )
    },
    About: {
      screen: createStackNavigator(
        {
          AboutStack: {
            screen: AboutScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: 'About',
              headerTitleStyle : {width : Dimensions.get('window').width}
//              headerRight: <FaqButton navigation={navigation} />
            })
          },
          ArkadTeam: {
            screen: ArkadTeamScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'The ARKAD team',
              headerTitleStyle : {width : Dimensions.get('window').width}
            })
          },
          Faq: {
            screen: FaqScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'FAQ',
              headerTitleStyle : {width : Dimensions.get('window').width},
              headerStyle: {
                ...navigationOptions.headerStyle,
                borderBottomWidth: 0
              }
            })
          }
        },
        {
          cardStyle: {
            backgroundColor: global.arkadGray,
            shadowColor: 'transparent',
            elevation: 0,
          }
        }
      )
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Disable unnecessary eslint warning
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Countdown') {
          iconName = 'calendar'
        } else if (routeName === 'Map') {
          iconName = 'map-o'
        } else if (routeName === 'Companies') {
          iconName = 'briefcase'
        } else if (routeName === 'Events') {
          iconName = 'calendar-check-o'
        } else if (routeName === 'About') {
          return <ArkadIcon name="arkadlogo" size={26} color={tintColor} />
        }
        return <Icon name={iconName} size={20} color={tintColor} />
      },
      tabBarOptions: {
        activeTintColor: global.arkadBlue,
        style: {
          borderTopWidth: 2,
          borderTopColor: global.arkadBlue,
          backgroundColor: '#fff',
        }
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
        ...navigationOptions,
        title: 'Filter',
        headerTitleStyle : {width : Dimensions.get('window').width},
        headerLeft: null,
        headerRight: (
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
            <Icon name="angle-down" size={34} color="#fff" />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    mode: 'modal',
    cardStyle: {
      backgroundColor: global.arkadGray,
      shadowColor: 'transparent',
      elevation: 0,
    }
  }
)

export default RootStack
