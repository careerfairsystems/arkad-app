const initialState = [
  {
    title: '14 November',
    data: [
      {
        key: '1',
        name: 'Bygg en dator med IBM',
        location: 'Kårhuset',
        address: 'Sölvegatan 22A 22362 Lund',
        startTime: '08:00',
        endTime: '10:00',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://storage.googleapis.com/jexpo-arkad/1007385894541221_large_000.png'
      },
      {
        key: '2',
        name: 'Bygg en bil med Volvo',
        location: 'Kårhuset',
        address: 'Sölvegatan 22A 22362 Lund',
        startTime: '14:00',
        endTime: '16:00',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://storage.googleapis.com/jexpo-arkad/1007385894541221_large_000.png'
      },
      {
        key: '3',
        name: 'Spökrunda med IKEA',
        location: 'Kårhuset',
        address: 'Sölvegatan 22A 22362 Lund',
        startTime: '15:00',
        endTime: '16:00',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://storage.googleapis.com/jexpo-arkad/1007385894541221_large_000.png'
      }
    ]
  },
  {
    title: '15 November',
    data: [
      {
        key: '1',
        name: 'Föreläsning med Accando',
        location: 'Kårhuset',
        address: 'Sölvegatan 22A 22362 Lund',
        startTime: '14:00',
        endTime: '18:00',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://storage.googleapis.com/jexpo-arkad/1007385894541221_large_000.png'
      },
      {
        key: '2',
        name: 'Lär dig spionera med Axis',
        location: 'Kårhuset',
        address: 'Sölvegatan 22A 22362 Lund',
        startTime: '16:00',
        endTime: '18:00',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://storage.googleapis.com/jexpo-arkad/1007385894541221_large_000.png'
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
