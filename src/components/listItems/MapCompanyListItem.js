import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const styles = {
  boothNumberContainer: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boothNumberText: { fontSize: 12 },
  title: {
    flex: 1,
    fontSize: 16
  },
  showCompanyButton: {
    width: 70,
    height: 30,
    backgroundColor: global.arkadBlue,
    marginLeft: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  showCompanyButtonText: { fontSize: 12, color: '#fff' }
}

const {
  boothNumberContainer,
  boothNumberText,
  title,
  showCompanyButton,
  showCompanyButtonText
} = styles
const MapCompanyListItem = ({
  navigation, selectedCompany, company, toggleChangeCompany
}) => (
  <TouchableHighlight
    underlayColor={global.rowSelectionColor}
    onPress={() => toggleChangeCompany(company.boothNumber)}
  >
    <ListItem item={company}>
      <View
        style={[
          boothNumberContainer,
          {
            backgroundColor:
              selectedCompany === company.boothNumber ? global.arkadBlue : global.arkadGray
          }
        ]}
      >
        <Text
          style={[
            boothNumberText,
            { color: selectedCompany === company.boothNumber ? '#fff' : '#000' }
          ]}
        >
          {company.boothNumber}
        </Text>
      </View>
      <Text style={title}>{company.name}</Text>
      {selectedCompany === company.boothNumber ? (
        <TouchableHighlight
          style={showCompanyButton}
          onPress={() => navigation.navigate('CompanyDetails', { item: company })}
        >
          <Text style={showCompanyButtonText}>Show</Text>
        </TouchableHighlight>
      ) : null}
    </ListItem>
  </TouchableHighlight>
)

MapCompanyListItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  selectedCompany: PropTypes.number.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  toggleChangeCompany: PropTypes.func.isRequired
}

export default MapCompanyListItem
