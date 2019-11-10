import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import EHuset from '../../components/maps/EHuset'
import Karhuset from '../../components/maps/Karhuset'
import MatteannexetFirstFloor from '../../components/maps/MatteannexetFirstFloor'
import MatteannexetSecondFloor from '../../components/maps/MatteannexetSecondFloor'
import StudiecentrumFirstFloor from '../../components/maps/StudiecentrumFirstFloor'
import StudiecentrumSecondFloor from '../../components/maps/StudiecentrumSecondFloor'
import MapCompanyListItem from '../../components/listItems/MapCompanyListItem'
import LoadingView from '../../components/LoadingView'
import Button from '../../components/FloorButton'

const styles = {
  container: { flex: 1 },
  mapView: {
    backgroundColor: global.arkadLightBlue,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  listHeader: {
    height: 44,
    alignItems: 'center',
    backgroundColor: global.lightGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: global.separatorColor,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  listHeaderText: { fontWeight: 'bold'},
  list: { flex: 1 }
}

class HouseScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { map: <LoadingView /> }
  }

  componentDidMount() {
    // Set a zero timeout so that it doesn't load this immediately when pressing a building
    setTimeout(() => {
      this.setState({ map: this.renderMap() })
    }, 0)
  }

  componentDidUpdate(prevProps) {
    const { currentMap } = this.props
    if (prevProps.currentMap !== currentMap) {
      this.updateMap()
      this.flatList.scrollToIndex({ index: 0, animated: false })
    }
  }

  parseSvg = (svg) => {
    const { selectedCompany } = this.props
    let newSvg = svg
    newSvg = {
      ...newSvg,
      props: {
        ...newSvg.props,
        children: newSvg.props.children.map((item) => {
          let newItem = item
          if (item.props['data-name'] === `${selectedCompany}`) {
            newItem = {
              ...item,
              props: {
                ...item.props,
                children: {
                  ...item.props.children,
                  props: {
                    ...item.props.children.props,
                    children: item.props.children.props.children.map((number, index) => ({
                      ...number,
                      props: {
                        ...number.props,
                        fill: index === 0 ? global.arkadRed : '#ffffff'
                      }
                    }))
                  }
                }
              }
            }
          }
          return newItem
        })
      }
    }
    return newSvg
  }

  parseSvgMA = (svg) => {
    const { selectedCompany } = this.props
    let newSvg = svg
    newSvg = {
      ...newSvg,
      props: {
        ...newSvg.props,
        children: newSvg.props.children.map((item) => {
          let newItem = item
          if (item.props['data-name'] === `${selectedCompany}`) {
            newItem = {
              ...item,
              props: {
                ...item.props,
                children: item.props.children.map((number, index) => ({
                  ...number,
                  props: {
                    ...number.props,
                    fill: index === 0 ? global.arkadRed : '#ffffff'
                  }
                }))
              }
            }
          }
          return newItem
        })
      }
    }
    return newSvg
  }

  updateMap = () => {
    this.setState({ map: this.renderMap() })
  }

  renderMap = () => {
    const { currentMap } = this.props
    switch (currentMap) {
      case global.eHuset:
        return <EHuset parseSvg={this.parseSvg} />
      case global.karhuset:
        return <Karhuset parseSvg={this.parseSvg} />
      case global.matteannexetFirstFloor:
        return <MatteannexetFirstFloor parseSvg={this.parseSvg} />
      case global.matteannexetSecondFloor:
        return <MatteannexetSecondFloor parseSvg={this.parseSvg} />
      case global.studiecentrumFirstFloor:
        return <StudiecentrumFirstFloor parseSvg={this.parseSvg} />
      case global.studiecentrumSecondFloor:
        return <StudiecentrumSecondFloor parseSvg={this.parseSvg} />
      default:
        return <Text>Could not load map</Text>
    }
  }

  render() {
    const { map } = this.state
    const {
      navigation, selectedCompany, companyList, toggleChangeCompany, toggleChangeMap
    } = this.props
    const {
      container, mapView, listContainer, listHeader, listHeaderText, list
    } = styles
    return (
      <View style={container}>
        <View style={mapView}>{map}</View>
        <View style={listContainer}>
          <View style={listHeader}>
            <Text style={listHeaderText}>Companies</Text>
            { (this.state.map.type.name == 'StudiecentrumFirstFloor' || this.state.map.type.name == 'StudiecentrumSecondFloor' || this.state.map.type.name == 'MatteannexetFirstFloor' || this.state.map.type.name == 'MatteannexetSecondFloor') ?
               <Button title="Change floor" onPress={() => { switch (this.state.map.type.name) {
                    case 'StudiecentrumFirstFloor':
                      toggleChangeMap(global.studiecentrumSecondFloor)
                      break;
                    case 'StudiecentrumSecondFloor':
                      toggleChangeMap(global.studiecentrumFirstFloor)
                      break;
                    case 'MatteannexetFirstFloor':
                      toggleChangeMap(global.matteannexetSecondFloor)
                      break;
                    case "MatteannexetSecondFloor":
                      toggleChangeMap(global.matteannexetFirstFloor)
                      break;
                  }
                 }
                   } /> : null}
          </View>
          <View style={list}>
            <FlatList
              ref={(ref) => {
                this.flatList = ref
              }}
              data={companyList}
              renderItem={({ item }) => (
                <MapCompanyListItem
                  navigation={navigation}
                  selectedCompany={selectedCompany}
                  company={item}
                  toggleChangeCompany={toggleChangeCompany}
                />
              )}
            />
          </View>
        </View>
      </View>
    )
  }
}

HouseScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  currentMap: PropTypes.string.isRequired,
  selectedCompany: PropTypes.number.isRequired,
  companyList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleChangeCompany: PropTypes.func.isRequired
}

export default HouseScreen
