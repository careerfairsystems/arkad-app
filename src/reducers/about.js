const initialState = {
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

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default aboutReducer
