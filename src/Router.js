import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, HeaderBackButton } from 'react-navigation'
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
import ProfileScreenContainer from './containers/ProfileScreenContainer'
import CameraContainer from './containers/CameraContainer'
import CompanyStudentCardContainer from './containers/CompanyStudentCardContainer'
import StudentListContainer from './containers/StudentListContainer'
import AboutScreenContainer from './containers/AboutScreen'
import ArkadTeamScreenContainer from './containers/ArkadTeamScreen'
import FaqScreenContainer from './containers/FaqScreen'
import LogoutButton from './containers/LogoutButton'
import CameraButton from './components/CameraButton'
import FavoriteButton from './containers/FavoriteButton.js'

const styles = {
  headerIcon: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  filterView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: global.arkadGray,
    textAlign: 'center',
  },
  qrButton: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  qrText: {
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    paddingHorizontal: 8,
  }
}

const navigationOptions = {
  headerStyle: {
    backgroundColor: global.arkadBlue
  },
  headerTintColor: '#fff'
}

const ArkadIcon = createIconSetFromFontello(fontelloConfig)

const MainStack = createBottomTabNavigator(

  {
    Events: {
      screen: createStackNavigator(
        {
          EventStack: {
            screen: EventsScreenContainer,
            navigationOptions: {
              ...navigationOptions,
              title: 'Events'
            }
          },
          Detail: {
            screen: EventDetailsScreen,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
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
              headerTitle: <SubtitleHeader title="The ARKAD area" subtitle="Click on a building" />
            }
          },
          House: {
            screen: HouseScreenContainer,
            navigationOptions: {
              ...navigationOptions,
              headerTitle: <MapActionSheet />
            }
          },
          CompanyDetails: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
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
              headerRight: (
                <View style={styles.filterView}>
                  <View>
                    <ShowFavoritesButton />
                  </View>
                  <View style={styles.filterView}>
                    <TouchableOpacity
                      style={styles.headerIcon}
                      onPress={() => navigation.navigate('Filter')}
                    >
                      <Icon name="filter" size={21} color="#fff" style={styles.icon} />
                      <Text style={styles.buttonText}>Filter</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          },
          Detail: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name,
              headerRight: (
                <View style={{marginHorizontal: 16}}>
                  <FavoriteButton company={navigation.state.params.item} color={"#fff"}/>
                </View>
              )
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    },
    Profile: {
      screen: createStackNavigator(
        {
          ProfileStack: {
            screen: ProfileScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: 'Profile',
              header: navigation.state.params ? navigation.state.params.header : null,
              headerRight: navigation.state.params ? navigation.state.params.headerRight : undefined,
            })
          },
          DetailStudent: {
            screen: CompanyStudentCardContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.first_name + ' ' + navigation.state.params.item.last_name,
              headerRight: navigation.state.params ? navigation.state.params.headerRight : undefined,
              headerLeft: navigation.state.params ? navigation.state.params.headerLeft : undefined,
            })
          },
          DetailCompany: {
            screen: CompanyDetailsScreenContainer,
            navigationOptions: ({ navigation }) => ({
              ...navigationOptions,
              title: navigation.state.params.item.name,
              headerRight: navigation.state.params ? navigation.state.params.headerRight : undefined,
            })
          },
          CameraScreen: {
            screen: CameraContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'Camera',
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    },
    About: {
      screen: createStackNavigator(
        {
          AboutStack: {
            screen: AboutScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'About'
            })
          },
          ArkadTeam: {
            screen: ArkadTeamScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'The ARKAD team'
            })
          },
          Faq: {
            screen: FaqScreenContainer,
            navigationOptions: () => ({
              ...navigationOptions,
              title: 'FAQ',
              headerStyle: {
                ...navigationOptions.headerStyle,
                borderBottomWidth: 0
              }
            })
          }
        },
        {
          cardStyle: { backgroundColor: global.arkadGray }
        }
      )
    }
  },
  {
    initialRouteName: 'Companies',
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'CameraScreen' ? false : true,
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
        } else if (routeName === 'Profile') {
          iconName = 'user'
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
        header: null,
      }
    },
    Filter: {
      screen: CompanyFilterScreenContainer,
      navigationOptions: ({ navigation }) => ({
        ...navigationOptions,
        title: 'Filter',
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
    cardStyle: { backgroundColor: global.arkadGray }
  }
)

export default RootStack
