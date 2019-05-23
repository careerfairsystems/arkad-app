import { Alert } from 'react-native'
import * as types from '../actions/types'

const initialState = {
  items: [],
  blips: [],
  logedIn: false,
  maps: [],
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

const translateWords = (originalWord, id) => {
  const translations = {
    desiredProgramme: [
      { words: ['Arkitekt'], translation: 'Architect' },
      { words: ['Bioteknik'], translation: 'Biotechnology' },
      {
        words: ['Brandingenjörsutbildning'],
        translation: 'Fire Protection Engineering'
      },
      { words: ['Byggteknik med arkitektur'], translation: 'Civil Engineering - Architecture' },
      {
        words: ['Byggteknik med järnvägsteknik'],
        translation: 'Civil Engineering - Railway Construction'
      },
      {
        words: ['Byggteknik med väg- och trafikteknik'],
        translation: 'Civil Engineering- Road and Traffic Technology'
      },
      { words: ['Datateknik'], translation: 'Computer Science and Engineering' },
      { words: ['Ekosystemteknik'], translation: 'Environmental Engineering' },
      { words: ['Elektroteknik'], translation: 'Electrical Engineering' },
      { words: ['Industridesign'], translation: 'Industrial Design' },
      { words: ['Industriell ekonomi'], translation: 'Industrial Engineering and Management' },
      {
        words: ['Informations- och kommunikationsteknik'],
        translation: 'Information and Communication Engineering'
      },
      { words: ['Kemiteknik'], translation: 'Chemical Engineering' },
      { words: ['Lantmäteri'], translation: 'Surveying' },
      {
        words: ['Maskinteknik med teknisk design'],
        translation: 'Mechanical Engineering with Industrial Design'
      },
      { words: ['Maskinteknik'], translation: 'Mechanical Engineering' },
      { words: ['Medicin och teknik'], translation: 'Biomedical Engineering' },
      { words: ['Teknisk Fysik'], translation: 'Engineering Physics' },
      { words: ['Teknisk Matematik'], translation: 'Engineering Mathematics' },
      { words: ['Teknisk Nanovetenskap'], translation: 'Engineering Nanoscience' },
      {
        words: ['Väg- och vattenbyggnad', 'Väg- och vatttenbyggnad'],
        translation: 'Civil Engineering'
      }
    ],
    weOffer: [
      {
        words: ['Exjobb'],
        translation: 'Thesis'
      },
      {
        words: ['Traineeplatser'],
        translation: 'Trainee employment'
      },
      {
        words: ['Praktikplatser'],
        translation: 'Internships'
      },
      {
        words: ['Sommarjobb'],
        translation: 'Summer jobs'
      },
      {
        words: ['Utlandsmöjligheter'],
        translation: 'Foreign Opportunities'
      },
      {
        words: ['Extrajobb'],
        translation: 'Part-time job'
      }
    ],
    industry: [
      {
        words: ['El, Energi och Kraft', 'Renewable energy', 'Water'],
        translation: 'Electricity, Energy & Power'
      },
      {
        words: ['Miljö'],
        translation: 'Environment'
      },
      {
        words: ['Bank och finans'],
        translation: 'Banking, Finance'
      },
      {
        words: ['Fackförbund'],
        translation: 'Union'
      },
      {
        words: ['Investering'],
        translation: 'Investment'
      },
      {
        words: ['Försäkring'],
        translation: 'Insurance'
      },
      {
        words: ['Bemanning & Arbetsförmedling'],
        translation: 'Recruitment'
      },
      {
        words: ['Bygg'],
        translation: 'Construction'
      },
      {
        words: ['Arkitektur och Grafisk design'],
        translation: 'Architecture, Graphic design'
      },
      {
        words: ['Data och IT', 'Data', 'IT'],
        translation: 'Data and IT'
      },
      {
        words: ['Ekonomi och konsultverksamhet'],
        translation: 'Finance and consultancy'
      },
      {
        words: ['Telekommunikation'],
        translation: 'Telecommunication'
      },
      {
        words: ['Konsultverksamhet'],
        translation: 'Consulting'
      },
      {
        words: ['Management'],
        translation: 'Management'
      },
      {
        words: ['Media'],
        translation: 'Media'
      },
      {
        words: ['Industri', 'Manufacturing industry'],
        translation: 'Industry'
      },
      {
        words: ['Kärnkraft'],
        translation: 'Nuclear power'
      },
      {
        words: ['Life Science'],
        translation: 'Life Science'
      },
      {
        words: ['Medicinteknik'],
        translation: 'Medical Techniques'
      },
      {
        words: ['Fastigheter & Infrastruktur'],
        translation: 'Property & Infrastructure'
      },
      {
        words: ['Forskning'],
        translation: 'Research'
      },
      {
        words: ['Vägledning'],
        translation: 'Coaching'
      }
    ],
    desiredDegree: [
      {
        words: ['Master’s degree (300 ECTS)', 'Master’s degree (300ECTS)'],
        translation: 'Master’s degree (300 ECTS)'
      },
      {
        words: ['Bachelor’s degree (180 ECTS)'],
        translation: 'Bachelor’s degree (180 ECTS)'
      },
      {
        words: ['Ph.D'],
        translation: 'Ph.D'
      }
    ]
  }

  let newWord
  translations[id].forEach((item) => {
    if (
      item.words.findIndex(word => originalWord.toLowerCase().trim() === word.toLowerCase())
        !== -1
      || originalWord.toLowerCase() === item.translation.toLowerCase()
    ) {
      newWord = item.translation
    }
  })
  return newWord || ''
}

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
  let maps = []
  let desiredProgramme = []
  let weOffer = []
  let industry = []
  let desiredDegree = []
  console.log(action.type)
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

          weOffer: arrayCleaner(profile.weOffer)
            .map(word => translateWords(word, 'weOffer'))
            .filter(word => word !== ''),
          desiredProgramme: arrayCleaner(profile.desiredProgramme)
            .map(word => translateWords(word, 'desiredProgramme'))
            .filter(word => word !== ''),
          desiredDegree: arrayCleaner(profile.desiredDegree)
            .map(word => translateWords(word, 'desiredDegree'))
            .filter(word => word !== ''),
          industry: arrayCleaner(profile.industry)
            .map(word => translateWords(word, 'industry'))
            .filter(word => word !== ''),

          contact: {
            name: stringCleaner(profile.contactName),
            title: stringCleaner(profile.contactTitle),
            email: stringCleaner(profile.contactEmail),
            phone: stringCleaner(profile.contactPhone)
          },

          map: stringCleaner(profile.map),
          boothNumber: profile.boothNumber ? profile.boothNumber : 0,

          logotypeUrl: profile.logotype
            ? stringCleaner(profile.logotype.thumbs.large.replace('http://', 'https://'))
            : '',
          brochureUrl: profile.ad ? urlFormatter(stringCleaner(profile.ad.url)) : '',
          websiteUrl: urlFormatter(stringCleaner(profile.urlWebsite)),
          linkedInUrl: urlFormatter(stringCleaner(profile.urlLinkedIn)),
          facebookUrl: urlFormatter(stringCleaner(profile.urlLinkedIn)),
          twitterUrl: urlFormatter(stringCleaner(profile.urlTwitter)),
          youTubeUrl: urlFormatter(stringCleaner(profile.urlYouTube))
        }
        return company
      })
      filteredCompanies.map((company) => {
        maps = [...maps, company.map]
        desiredProgramme = [...desiredProgramme, ...company.desiredProgramme]
        weOffer = [...weOffer, ...company.weOffer]
        industry = [...industry, ...company.industry]
        desiredDegree = [...desiredDegree, ...company.desiredDegree]
        return company
      })
      maps = Array.from(new Set(maps))
        .sort((a, b) => {
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
        .filter(item => item !== '')
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
        maps,
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
    case types.FETCH_LOGIN_REQUEST:
      return {
        ...state,
        logedIn: false,
        loading: true,
        error: ''
      }
    case types.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        logedIn: true,
        loading: false,
        updated: Math.floor(Date.now() / 1000)
      }
    case types.FETCH_LOGIN_FAILURE:
      Alert.alert(
        'Login failed!',
        'Wrong username or password.',
        [
          {text: 'OK'},
        ],
        {cancelable: true},
      );
      case types.LOGOUT:
        return {
          ...state,
          logedIn: false,
          loading: false,
          updated: Math.floor(Date.now() / 1000)
        }
        case types.FETCH_BLIPS_REQUEST:
          console.log("IOJSADOIAMOIAMSFOIAFOAISDN")
          return {
            ...state,
            loading: true,
            error: ''
          }
        case types.FETCH_BLIPS_SUCCESS:
          console.log("IOJSADOIAMOIAMSFOIAFOAISDN")
          return {
            ...state,
            loading: false,
            updated: Math.floor(Date.now() / 1000)
          }
        case types.FETCH_BLIPS_FAILURE:
          console.log("IOJSADOIAMOIAMSFOIAFOAISDN")
          Alert.alert(
            'Request to databse failed!',
            [
              {text: 'OK'},
            ],
            {cancelable: true},
          );
      return {
        ...state,
        logedIn: false,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default apiReducer
