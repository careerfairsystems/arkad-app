import React from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const styles = {
  image: {
    height: 34,
    width: 34,
    marginRight: 8,
    borderRadius: 17
  },
  infoContainer: { flexDirection: 'column', flex: 1 },
  title: {
    flex: 1,
    fontSize: 16
  },
  subtitle: { flex: 1, fontSize: 14, color: global.subtitleColor }
}

const {
  image, infoContainer, title, subtitle
} = styles
const ArkadTeamListItem = ({ person }) => {
  let imageSource
  switch (person.image) {
    case 'daniel_tovesson':
      imageSource = require('../../../resources/img/arkadTeam/daniel_tovesson.png')
      break
    case 'fredrik_siemund':
      imageSource = require('../../../resources/img/arkadTeam/fredrik_siemund.png')
      break
    case 'john_helbrink':
      imageSource = require('../../../resources/img/arkadTeam/john_helbrink.png')
      break
    case 'gustav_lilja':
      imageSource = require('../../../resources/img/arkadTeam/gustav_lilja.png')
      break
    case 'victor_winberg':
      imageSource = require('../../../resources/img/arkadTeam/victor_winberg.png')
      break
    case 'company_hosts':
      imageSource = require('../../../resources/img/arkadTeam/company_hosts.png')
      break
    default:
  }
  return (
    <ListItem>
      <Image style={image} source={imageSource} />
      <View style={infoContainer}>
        <Text style={title}>{person.name}</Text>
        <Text style={subtitle}>{person.role}</Text>
      </View>
    </ListItem>
  )
}

ArkadTeamListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default ArkadTeamListItem
