import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const styles = {
  noResults: { paddingVertical: 8 }
}

const renderNoResults = (
  <View style={styles.noResults}>
    <Text>No results</Text>
  </View>
)

const FilterSelect = ({
  item,
  desiredProgramme,
  weOffer,
  industry,
  desiredDegree,
  addCompanyFilter
}) => {
  let filter
  switch (item.id) {
    case 'desiredProgramme':
      filter = desiredProgramme
      break
    case 'weOffer':
      filter = weOffer
      break
    case 'industry':
      filter = industry
      break
    case 'desiredDegree':
      filter = desiredDegree
      break
    default:
  }
  return (
    <SectionedMultiSelect
      items={[item]}
      uniqueKey="name"
      subKey="children"
      selectedItems={filter}
      onSelectedItemsChange={selectedItems => addCompanyFilter(item.id, selectedItems)}
      showDropDowns={false}
      readOnlyHeadings
      showRemoveAll
      selectText="Choose"
      confirmText="Done"
      searchPlaceholderText="Search"
      noResultsComponent={renderNoResults}
      colors={{
        success: 'red',
        text: '#000',
        subText: '#000'
      }}
      styles={{
        selectToggle: {
          backgroundColor: '#eee',
          padding: 8,
          marginBottom: 8,
          borderRadius: 4
        },
        subItem: { marginVertical: 8 },
        itemText: { fontWeight: 'bold', fontSize: 20 },
        subSeparator: { backgroundColor: '#ccc' },
        button: { backgroundColor: '#555' }
      }}
      itemFontFamily={{}}
      subItemFontFamily={{}}
      searchTextFontFamily={{}}
      confirmFontFamily={{}}
    />
  )
}

FilterSelect.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired)
      .isRequired
  }).isRequired,
  desiredProgramme: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  weOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  industry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  desiredDegree: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  addCompanyFilter: PropTypes.func.isRequired
}

export default FilterSelect
