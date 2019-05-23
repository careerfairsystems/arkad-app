import React from 'react'
import { TouchableHighlight, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import HighListItem from './HighListItem'
import SelectStudentButton from '../SelectStudentButton'

const styles = {
  image: {
    height: 34,
    width: 34,
    marginHorizontal: 16,
    borderRadius: 17,
    marginVertical: 12,
  },
  viewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
}

const { image, viewLeft, viewRight } = styles

const SelectableStudentListItem = ({ children, navigation, item }) => (
  <TouchableHighlight
    underlayColor={global.rowSelectionColor}
    onPress={() => navigation.navigate('Detail', { item })}
  >
    <View>
      <HighListItem>
        <View>
          <Image style={image} source={require('../../../resources/img/arkadTeam/IMG_3798.jpg')} />
        </View>
        {children}
        <View style={viewRight}>
          <SelectStudentButton navigation={navigation}/>
        </View>
      </HighListItem>
    </View>
  </TouchableHighlight>
)

SelectableStudentListItem.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default SelectableStudentListItem
