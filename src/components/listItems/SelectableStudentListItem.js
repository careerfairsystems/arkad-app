import React from 'react'
import { TouchableHighlight, View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import HighListItem from './HighListItem'
import SelectStudentButton from '../SelectStudentButton'
import StarRating from 'react-native-star-rating'

const styles = {
  image: {
    height: 45,
    width: 45,
    marginHorizontal: 16,
    borderRadius: 17,
    marginVertical: 12,
  },
  viewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
}

const { image, viewLeft, viewRight } = styles

const starRating = (
  <StarRating
    fullStarColor={'#fab700'}
    disabled={false}
    maxStars={5}
    rating={4}
    starSize={12}
  />
)

const SelectableStudentListItem = ({ children, navigation, item, userType }) => (
  <TouchableHighlight
    underlayColor={global.rowSelectionColor}
    onPress={() => navigation.navigate(userType, { item })}
  >
    <View>
      <HighListItem>
        <View>
          <Image style={image} source={require('../../../resources/img/arkadTeam/IMG_3798.jpg')} />
        </View>
        {children}

        <View style={viewRight}>
          { userType == 'DetailCompany'
            ? null
            : starRating
          }
          <SelectStudentButton navigation={navigation} item={item} userType={userType}/>
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
