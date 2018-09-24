import * as types from '../actions/types'

const initialState = {
  items: [],
  allItems: [],
  searchText: '',
  desiredProgramme: [],
  weOffer: [],
  industry: [],
  desiredDegree: [],
  allFilters: {},
  loading: false,
  error: '',
  showFavorites: false
}

const stringCleaner = string => (string ? string.toString().trim() : '')

const arrayCleaner = array => (array
  ? array.map(item => item.trim()).sort((a, b) => {
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

const filter = (items, desiredProg = [], weOffer = [], industry = [], desiredDeg = []) => {
  let companies = items
  companies = companies.filter(
    item => (desiredProg.length !== 0
      ? item.desiredProgramme.some(r => desiredProg.includes(r))
      : true)
      && (weOffer.length !== 0 ? item.weOffer.some(r => weOffer.includes(r)) : true)
      && (industry.length !== 0 ? item.industry.some(r => industry.includes(r)) : true)
      && (desiredDeg.length !== 0 ? item.desiredDegree.some(r => desiredDeg.includes(r)) : true)
  )
  return companies
}

const companyReducer = (state = initialState, action) => {
  let filteredCompanies
  let desiredProgramme = []
  let weOffer = []
  let industry = []
  let desiredDegree = []
  let newState
  switch (action.type) {
    case types.FETCH_COMPANIES_REQUEST:
      return { ...state, loading: true, error: '' }
    case types.FETCH_COMPANIES_SUCCESS:
      filteredCompanies = action.companies.filter(company => company.profile).map((item) => {
        const { profile } = item
        const company = {
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
        allItems: filteredCompanies,
        searchText: '',
        desiredProgramme: [],
        weOffer: [],
        industry: [],
        desiredDegree: [],
        allFilters: {
          desiredProgramme,
          weOffer,
          industry,
          desiredDegree
        },
        loading: false
      }
    case types.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        items: [],
        allItems: [],
        searchText: '',
        desiredProgramme: [],
        weOffer: [],
        industry: [],
        desiredDegree: [],
        allFilters: {},
        loading: false,
        error: action.error
      }
    case types.TOGGLE_SHOW_FAVORITES:
      return { ...state, showFavorites: !state.showFavorites }
    case types.SEARCH_COMPANY:
      return {
        ...state,
        searchText: action.text
      }
    case types.ADD_COMPANY_FILTER:
      newState = { ...state }
      newState[action.id] = action.filters
      newState.items = filter(
        newState.allItems,
        newState.desiredProgramme,
        newState.weOffer,
        newState.industry,
        newState.desiredDegree
      )
      return newState
    case types.CLEAR_COMPANY_FILTER:
      return {
        ...state,
        items: filter(state.allItems),
        desiredProgramme: [],
        weOffer: [],
        industry: [],
        desiredDegree: []
      }
    default:
      return state
  }
}

export default companyReducer
