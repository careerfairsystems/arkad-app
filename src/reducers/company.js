import StringSimilarity from 'string-similarity'
import * as types from '../actions/types'

const initialState = {
  items: [],
  allItems: [],
  loading: false,
  error: '',
  showFavorites: false
}

const stringCleaner = string => (string ? string.toString().trim() : '')

const arrayCleaner = array => (array ? array.map(item => item.trim()) : [])

const filterCompany = (items, text) => {
  const append = '$' // Append a $ to improve the search, otherwise one character matches are ignored
  const { ratings } = StringSimilarity.findBestMatch(
    append + text,
    items.map(item => append + item.name)
  )
  const sortedItems = items
    .map((item) => {
      const rating = ratings.find(value => value.target === append + item.name)
      const sortedItem = { ...item, rating: rating.rating }
      return sortedItem
    })
    .filter(item => item.rating !== 0)
    .sort((a, b) => b.rating - a.rating)
  return sortedItems
}

const companyReducer = (state = initialState, action) => {
  let filteredCompanies
  switch (action.type) {
    case types.FETCH_COMPANIES_REQUEST:
      return { ...state, loading: true, errorMessage: '' }
    case types.FETCH_COMPANIES_SUCCESS:
      filteredCompanies = action.companies
        .filter(company => company.profile)
        .map((item) => {
          const { profile } = item
          return {
            key: item.id.toString(),
            name: stringCleaner(item.name),
            about: stringCleaner(profile.aboutUs),
            didYouKnow: stringCleaner(profile.didYouKnow),

            employees: {
              local: stringCleaner(profile.employeesLocal),
              global: stringCleaner(profile.employeesGlobal)
            },

            weOffer: arrayCleaner(profile.weOffer),
            desiredProgramme: arrayCleaner(profile.desiredProgramme),
            desiredDegree: arrayCleaner(profile.desiredDegree),
            industry: arrayCleaner(profile.industry),

            contact: {
              name: stringCleaner(profile.contactName),
              title: stringCleaner(profile.contactTitle),
              email: stringCleaner(profile.contactEmail),
              phone: stringCleaner(profile.contactPhone)
            },

            mapPosition: stringCleaner(profile.map),

            logotypeUrl: profile.logotype
              ? stringCleaner(profile.logotype.thumbs.small.replace('http://', 'https://'))
              : '',
            brochureUrl: profile.brochure ? stringCleaner(profile.brochure.url) : '',
            websiteUrl: stringCleaner(profile.urlWebsite),
            linkedInUrl: stringCleaner(profile.urlLinkedIn),
            facebookUrl: stringCleaner(profile.urlLinkedIn),
            twitterUrl: stringCleaner(profile.urlTwitter),
            youTubeUrl: stringCleaner(profile.urlYouTube)
          }
        })
        .sort((a, b) => {
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        })
      return {
        ...state,
        items: filteredCompanies,
        allItems: filteredCompanies,
        loading: false
      }
    case types.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        items: [],
        allItems: [],
        loading: false,
        error: action.error
      }
    case types.TOGGLE_SHOW_FAVORITES:
      return { ...state, showFavorites: !state.showFavorites }
    case types.SEARCH_COMPANY:
      return {
        ...state,
        items: action.text !== '' ? filterCompany(state.allItems, action.text) : state.allItems
      }
    default:
      return state
  }
}

export default companyReducer
