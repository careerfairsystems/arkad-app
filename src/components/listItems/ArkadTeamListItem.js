import React from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import LinkedInButton from '../LinkedInButton'

const styles = {
  image: {
    height: 60,
    width: 60,
    marginRight: 8,
    borderRadius: 30
  },
  infoContainer: { flexDirection: 'column', flex: 1 },
  title: {
    flex: 1,
    fontSize: 16,
    marginTop: 8
  },
  subtitle: { flex: 1, fontSize: 14, color: global.subtitleColor, marginBottom: 8 }
}



const {
  image, infoContainer, title, subtitle
} = styles
const ArkadTeamListItem = ({ person }) => (
  <ListItem>
    <Image style={image} source={person.image} />
    <View style={infoContainer}>
      <Text style={title}>{person.name}</Text>
      <Text style={subtitle}>{person.role}</Text>
    </View>
    <LinkedInButton url={person.linkedInUrl} />
  </ListItem>
)

ArkadTeamListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired
  }).isRequired
}

export default ArkadTeamListItem
