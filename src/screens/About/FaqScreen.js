import React from 'react'
import {
  ScrollView, View, Text, FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'

const styles = {
  categoryHeader: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  categoryHeaderText: { fontSize: 20, fontWeight: 'bold' },
  subCategoryHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#444',
    borderBottomWidth: 1,
    borderColor: '#333'
  },
  subCategoryHeaderText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  qaContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  questionText: { fontSize: 14, fontWeight: 'bold' },
  answerText: { fontSize: 12 }
}

const {
  categoryHeader,
  categoryHeaderText,
  subCategoryHeader,
  subCategoryHeaderText,
  qaContainer,
  questionText,
  answerText
} = styles
const FaqScreen = ({ faqList }) => (
  <ScrollView>
    {faqList.map(category => (
      <Collapse key={category.key}>
        <CollapseHeader style={categoryHeader}>
          <Text style={categoryHeaderText}>{category.name}</Text>
        </CollapseHeader>
        <CollapseBody>
          {category.faq.map(subCategory => (
            <Collapse key={subCategory.key}>
              <CollapseHeader style={subCategoryHeader}>
                <Text style={subCategoryHeaderText}>{subCategory.name}</Text>
              </CollapseHeader>
              <CollapseBody>
                <FlatList
                  data={subCategory.list}
                  renderItem={({ item }) => (
                    <View style={qaContainer}>
                      <Text style={questionText}>{item.question}</Text>
                      <Text style={answerText}>{item.answer}</Text>
                    </View>
                  )}
                  scrollEnabled={false}
                />
              </CollapseBody>
            </Collapse>
          ))}
        </CollapseBody>
      </Collapse>
    ))}
  </ScrollView>
)

FaqScreen.propTypes = {
  faqList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      faq: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          list: PropTypes.arrayOf(
            PropTypes.shape({
              key: PropTypes.string.isRequired,
              question: PropTypes.string.isRequired,
              answer: PropTypes.string.isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
}

export default FaqScreen
