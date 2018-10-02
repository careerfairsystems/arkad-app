import { Alert } from 'react-native'
import * as types from '../actions/types'

const initialState = {
  items: [],
  filters: {},
  notUpdated: [],
  loading: false,
  error: '',
  updated: 0
}

const stringCleaner = string => (string ? string.toString().trim() : '')

const urlFormatter = url => (url.includes('http') || url === '' ? url : `http://${url}`)

const arrayCleaner = array => (array
  ? array.map(item => stringCleaner(item)).sort((a, b) => {
    const nameA = a.toLowerCase()
    const nameB = b.toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  : [])

const filterFormatter = (name, id, array) => {
  const children = Array.from(new Set(array))
    .map(item => ({
      name: item
    }))
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
  return { name, id, children }
}

const apiReducer = (state = initialState, action) => {
  let filteredCompanies
  let desiredProgramme = []
  let weOffer = []
  let industry = []
  let desiredDegree = []
  switch (action.type) {
    case types.FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.FETCH_COMPANIES_SUCCESS:
      filteredCompanies = action.companies.filter(company => company.profile).map((item) => {
        const { profile } = item
        const company = {
          key: stringCleaner(item.id),
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
            ? stringCleaner(profile.logotype.thumbs.large.replace('http://', 'https://'))
            : '',
          brochureUrl: profile.brochure ? urlFormatter(stringCleaner(profile.brochure.url)) : '',
          websiteUrl: urlFormatter(stringCleaner(profile.urlWebsite)),
          linkedInUrl: urlFormatter(stringCleaner(profile.urlLinkedIn)),
          facebookUrl: urlFormatter(stringCleaner(profile.urlLinkedIn)),
          twitterUrl: urlFormatter(stringCleaner(profile.urlTwitter)),
          youTubeUrl: urlFormatter(stringCleaner(profile.urlYouTube))
        }
        return company
      })
      filteredCompanies.map((company) => {
        desiredProgramme = [...desiredProgramme, ...company.desiredProgramme]
        weOffer = [...weOffer, ...company.weOffer]
        industry = [...industry, ...company.industry]
        desiredDegree = [...desiredDegree, ...company.desiredDegree]
        return company
      })
      desiredProgramme = filterFormatter('Programs', 'desiredProgramme', desiredProgramme)
      weOffer = filterFormatter('Offers', 'weOffer', weOffer)
      industry = filterFormatter('Industries', 'industry', industry)
      desiredDegree = filterFormatter('Degrees', 'desiredDegree', desiredDegree)
      return {
        ...state,
        items: filteredCompanies,
        filters: {
          desiredProgramme,
          weOffer,
          industry,
          desiredDegree
        },
        notUpdated: [],
        loading: false,
        updated: Math.floor(Date.now() / 1000)
      }
    case types.FETCH_COMPANIES_FAILURE:
      Alert.alert(action.error)
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case types.FETCH_UPDATED_SINCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.FETCH_UPDATED_SINCE_SUCCESS:
      return {
        ...state,
        notUpdated: arrayCleaner(action.companyIds),
        loading: false
      }
    case types.FETCH_UPDATED_SINCE_FAILURE:
      Alert.alert(action.error)
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default apiReducer
