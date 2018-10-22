const initialState = [
  {
    title: '4 November',
    data: [
      {
        key: '1',
        name: 'Toughest Lab',
        speaker: '',
        startTime: '14:00',
        endTime: '17:00',
        language: '',
        location: 'Toughest Lab, Malmö',
        description:
          'Come and get sweaty with ARKAD! We’re arranging two 90-minute long classes with Toughest’s instructors which will be hold at Toughest LAB in Malmö. The two sessions will have 40 spots each, and a shuttle bus will depart from Kårhuset.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: '5 November',
    data: [
      {
        key: '1',
        name: 'The Digital Revolution',
        speaker: 'Andreas Ekström',
        startTime: '17:00',
        endTime: '18:30',
        language: 'Swedish',
        location: 'Kårhuset: Aulan',
        description:
          'The journalist Andreas Ekström will perform his internationally famous lecture - Seven ways to own the world". It will bring up how power, money and knowledge has been unevenly distributed in the digital revolution, but also the enormous possibilities which have appeared - to build business, new social interplay and the internet that we really want.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: '7 November',
    data: [
      {
        key: '1',
        name: 'Assa Abloy',
        speaker: '',
        startTime: '12:15',
        endTime: '13:00',
        language: 'English',
        location: 'Matteannexet: MA7',
        description:
          'Come and meet the real people of ASSA ABLOY before ARKAD! Are you curious to learn more about what you can do at ASSA ABLOY and what master thesis projects we have open for application? Our Research and Development colleagues from different parts of our organization will talk you through some interesting topics and opportunities, and are prepared to answer questions about the future, innovation, and more.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      },
      {
        key: '2',
        name: 'Kodjo Akolor',
        speaker: '',
        startTime: '17:00',
        endTime: '18:30',
        language: 'Swedish',
        location: 'Kårhuset: Aulan',
        description:
          'Kodjo Akolor, a Swedish comedian famous from Morgonpasset i p3, Musikhjälpen and a lot more is coming to perfom a stand-up show the 7th of November!',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: '8 November',
    data: [
      {
        key: '1',
        name: 'ATEA',
        speaker: '',
        startTime: '12:15',
        endTime: '13:00',
        language: 'Swedish',
        location: 'Matteannexet: MA7',
        description:
          "You're about to make life-changing decisions regarding your future, what's the smarter choice? How can you make the most out of contributing to a more sustainable world, perform on top and at the same time keep challenging yourself and your environment?",
        signUpURL: 'https://www.arkadtlth.se/events/'
      },
      {
        key: '2',
        name: 'Snacka Snyggt',
        speaker: 'Serena Mon de Vienne',
        startTime: '17:00',
        endTime: '18:30',
        language: 'Swedish',
        location: 'Kårhuset: Aulan',
        description:
          'Serena Mon de Vienne from the rhetoric consulting firm Snacka Snyggt will provide all the tips and trix for using the right rhetorics for landing the dream job. How do you avoid the clichés, how do you adjust your rhetorics due to your personal characteristics, how to brag in a trustworthy way without stepping on the toes of jantelagen, and how you can use storytelling to deliver a story in a trustworthy way.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: '12 November',
    data: [
      {
        key: '1',
        name: 'Region Skåne',
        speaker: '',
        startTime: '12:15',
        endTime: '13:00',
        language: 'Swedish',
        location: 'E-huset: E:B',
        description:
          'Region Skåne operates 10 hospitals, 150 primary care centres and are investing to become the leading region in digitalization of health care in Sweden in 2025. Are you interested in sourcing technology? There are several exciting opportunities coming up now, visit this lunch seminar to know more about your carreer at Region Skåne.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: '13 November',
    data: [
      {
        key: '1',
        name: 'Opening Ceremony ARKAD 2018',
        speaker: '',
        startTime: '18:00',
        endTime: '21:00',
        language: '',
        location: 'Kårhuset: Gasquesalen',
        description:
          'Come to Gasquesalen and enjoy a spectacular evening with us to celebrate the opening of this year’s ARKAD fair! There will be live music, entertainment and a competition where great knowledge of Lund will be the key for winning the big prize. We will offer delicious appetizers and a wide sortiment of good beverages. Welcome!',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: '15 November',
    data: [
      {
        key: '1',
        name: 'Pitch Please',
        speaker: '',
        startTime: '12:00',
        endTime: '13:00',
        language: '',
        location: 'Matteannexet: MA7',
        description:
          'Come and listen to offers for examination work, internships and trainee employment from companies who want you to work for their organisations. The companies who will pitch their offers are Preem, Sydkraft Hydropower, Tunstall Nordic, and Schibsted Media Group. Lunch will be offered!',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  }
]

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default eventReducer
