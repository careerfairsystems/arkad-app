import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import DetailsScreen from '../../components/DetailsScreen'
import TextSection from '../../components/text/TextSection'
import TextArraySection from '../../components/text/TextArraySection'
import TextSubtitleSection from '../../components/text/TextSubtitleSection'
import UrlButton from '../../components/UrlButton'

const styles = {
  logo: {
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class CompanyDetailsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { width: null, height: null }
  }

  componentWillMount() {
    const { navigation } = this.props
    const company = navigation.state.params.item
    Image.getSize(company.logotypeUrl, (width, height) => this.setState({ width, height }))
  }

  render() {
    const { width, height } = this.state
    const { navigation } = this.props
    const { logo } = styles
    const company = navigation.state.params.item
    return (
      <DetailsScreen>
        <View style={logo}>
          <Image style={{ width, height }} source={{ uri: company.logotypeUrl }} />
        </View>

        <TextSection title={`About ${company.name}`} description={company.about} />
        <TextSection title="Did you know?" description={company.didYouKnow} />

        <TextSubtitleSection
          title="Employees"
          subtitleSections={[
            { key: '0', subtitle: 'Local', description: company.employees.local },
            { key: '1', subtitle: 'Global', description: company.employees.global }
          ]}
        />

        <TextArraySection title="We offer" descriptionArray={company.weOffer} />
        <TextArraySection title="Desired programme" descriptionArray={company.desiredProgramme} />
        <TextArraySection title="Desired degree" descriptionArray={company.desiredDegree} />
        <TextArraySection title="Industry" descriptionArray={company.industry} />

        <TextSubtitleSection
          title="Contact"
          subtitleSections={[
            { key: '0', subtitle: 'Name', description: company.contact.name },
            { key: '1', subtitle: 'Title', description: company.contact.title },
            { key: '2', subtitle: 'Email', description: company.contact.email },
            { key: '3', subtitle: 'Phone', description: company.contact.phone }
          ]}
        />

        <TextSection title="Find us" description={company.mapPosition} />

        <UrlButton buttonText="Brochure URL" url={company.brochureUrl} />
        <UrlButton buttonText="Website" url={company.websiteUrl} />
        <UrlButton buttonText="LinkedIn" url={company.linkedInUrl} />
        <UrlButton buttonText="Facebook" url={company.facebookUrl} />
        <UrlButton buttonText="Twitter" url={company.twitterUrl} />
        <UrlButton buttonText="YouTube" url={company.youTubeUrl} />
      </DetailsScreen>
    )
  }
}

CompanyDetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default CompanyDetailsScreen
