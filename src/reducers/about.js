const initialState = {
  aboutUs:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  openingHours: [
    { date: '14 November', time: '08:00-18:00' },
    { date: '15 November', time: '08:00-18:00' }
  ],
  arkadTeam: [
    {
      title: 'IT - mobile application',
      data: [
        {
          key: '0',
          name: 'Daniel Tovesson',
          role: 'Scrum Master',
          image: 'daniel_tovesson'
        },
        {
          key: '1',
          name: 'Fredrik Siemund',
          role: 'Developer',
          image: 'fredrik_siemund'
        },
        {
          key: '2',
          name: 'John Helbrink',
          role: 'Developer',
          image: 'john_helbrink'
        },
        {
          key: '3',
          name: 'Gustav Lilja',
          role: 'UX-designer',
          image: 'gustav_lilja'
        }
      ]
    },
    {
      title: 'IT - internal systems',
      data: [
        {
          key: '0',
          name: 'Victor Winberg',
          role: 'Scrum Master',
          image: 'victor_winberg'
        }
      ]
    },
    {
      title: 'Other',
      data: [
        {
          key: '0',
          name: 'Company hosts',
          role: 'Helps companies at the fair',
          image: 'company_hosts'
        }
      ]
    }
  ],
  faq: {
    forStudents: [
      {
        key: '0',
        name: 'Before',
        list: [
          { key: '0', question: 'How do I present myself?', answer: 'First name is a good start.' },
          { key: '1', question: 'How many companies will attend?', answer: 'A great number.' }
        ]
      },
      {
        key: '1',
        name: 'During',
        list: [
          {
            key: '0',
            question: 'Where is each company placed?',
            answer: 'Check the map in the app.'
          },
          { key: '1', question: 'How long is the fair open?', answer: 'It depends.' },
          { key: '2', question: 'Do I get free stuff?', answer: 'Yes, lots of candy.' }
        ]
      },
      {
        key: '2',
        name: 'After/Banquet',
        list: [{ key: '0', question: 'Will I get a job?', answer: 'Maybe.' }]
      }
    ],
    forCompanies: [
      {
        key: '0',
        name: 'Before',
        list: [
          { key: '0', question: 'How do I register?', answer: 'On the website.' },
          {
            key: '1',
            question: 'Where can I park?',
            answer: 'Parking lots are everywhere and nowhere.'
          },
          { key: '2', question: 'Is it nice?', answer: 'Yep.' }
        ]
      },
      {
        key: '1',
        name: 'During',
        list: [
          { key: '0', question: 'Where do I eat?', answer: 'In the restaurant Moroten & Piskan.' },
          { key: '1', question: 'Where do I pardey?', answer: 'Everywhere.' }
        ]
      },
      {
        key: '2',
        name: 'After/Banquet',
        list: [
          { key: '0', question: 'What do do with life now?', answer: 'Apply for next year.' },
          {
            key: '1',
            question: 'Can I hire all coordinators?',
            answer: 'Yes, if the money is right.'
          },
          { key: '2', question: 'Can I apply next year?', answer: 'Of course.' },
          { key: '3', question: 'When is the banquet?', answer: 'TBD.' }
        ]
      }
    ]
  }
}

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default aboutReducer
