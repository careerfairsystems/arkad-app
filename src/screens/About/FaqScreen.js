import React, { Component } from 'react'
import {
  ScrollView, View, TouchableHighlight, Text, FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'

const styles = {
  container: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: global.arkadBlue
  },
  tab: {
    flex: 0.5,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderColor: global.arkadBlue
  },
  selectedBottomBorderColor: { borderColor: global.arkadLightBlue },
  tabText: { fontSize: 14, color: global.gray },
  selectedTextColor: { color: '#fff' },
  categoryHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: global.separatorColor
  },
  categoryHeaderText: { fontSize: 20 },
  qaContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: global.lightGray,
    borderBottomWidth: 1,
    borderColor: global.separatorColor
  },
  questionText: { fontSize: 14, fontWeight: 'bold' },
  answerText: { fontSize: 12 }
}

const {
  categoryHeader, categoryHeaderText, qaContainer, questionText, answerText
} = styles
const renderFaqList = categories => categories.map(category => (
  <Collapse key={category.key}>
    <CollapseHeader style={categoryHeader}>
      <Text style={categoryHeaderText}>{category.name}</Text>
    </CollapseHeader>
    <CollapseBody>
      <FlatList
        data={category.list}
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
))

class FaqScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTab: 0 }
  }

  toggleTab(id) {
    this.setState({ selectedTab: id })
  }

  renderTab(id, title) {
    const { selectedTab } = this.state
    const {
      tab, selectedBottomBorderColor, tabText, selectedTextColor
    } = styles
    return (
      <TouchableHighlight
        style={[tab, selectedTab === id ? selectedBottomBorderColor : null]}
        underlayColor={null}
        onPress={() => this.toggleTab(id)}
      >
        <Text style={[tabText, selectedTab === id ? selectedTextColor : null]}>{title}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    const { selectedTab } = this.state
    const { faqList } = this.props
    const { container, tabBar } = styles
    return (
      <View style={container}>
        <View style={tabBar}>
          {this.renderTab(0, 'For students')}
          {this.renderTab(1, 'For companies')}
        </View>
        <ScrollView>
          {selectedTab === 0 ? renderFaqList(faqList.forStudents) : null}
          {selectedTab === 1 ? renderFaqList(faqList.forCompanies) : null}
        </ScrollView>
      </View>
    )
  }
}

FaqScreen.propTypes = {
  faqList: PropTypes.shape({
    forStudents: PropTypes.arrayOf(
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
    ).isRequired,
    forCompanies: PropTypes.arrayOf(
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
}

export default FaqScreen
