const initialState = [
  {
    title: 'November 3rd - Sunday',
    data: [
      {
        key: '1',
        name: 'Bounce',
        speaker: '',
        startTime: '15:10',
        endTime: '17:30',
        language: '',
        location: 'Outside Kårhuset, bus to Malmö',
        description:
          'Let’s Bounce! Come and join ARKAD for one full hour of jumping fun at bounce in Malmö! If you are tired of sitting still and studying for exams all day, then this event exactly what you need. For this event we will take the bus to the indoor jumping park Bounce in Malmö and let off some steam during one full hour. Bounce offers a variety of different jumping-areas with something for everyone to enjoy. Some of the areas are the freerun/parkour park, the ninja warrior course and the free jump trampoline area. Of course there will plenty of other areas to discover yourself!',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 4th - Monday',
    data: [
      {
        key: '1',
        name: 'The digital shift - how will you be affected? ',
        speaker: 'Nicholas Fernholm',
        startTime: '17:15',
        endTime: '18:45',
        language: 'English',
        location: 'Kårhuset: Auditorium',
        description:
          'Do you wonder what the future holds for you as an engineer, and how you may increase your competitiveness on the employment market? Then do not miss this lecture with Nicholas Fernholm! This event will give you valuable insight into the increasing automation in today’s industry, how this affects and changes our society and how engineers may face these changes in a successful way, to benefit themselves.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 5th - Tuesday',
    data: [
      {
        key: '1',
        name: 'Stand up with Hasse Brontén',
        speaker: 'Hasse Brontén',
        startTime: '17:15',
        endTime: '18:00',
        language: 'Swedish',
        location: 'Kårhuset: Auditorium',
        description:
          'Who doesn’t like a good laugh? We are happy to announce this year’s most comedic event with the stand-up comedian Hasse Brontén! A lively, bright and straightforward humour along with a slightly unusual way thinking makes Hasse a class act that gets across to everyone, young and old. If you want to get some high quality entertainment and take some time off from studies to laugh your heart out, then this is the event you don’t want to miss! There will be a limited amount of spots for this performance, so hurry up and register today! ',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 6th - Wednessday',
    data: [
      {
        key: '1',
        name: 'Personal development and a positive mindset',
        speaker: 'Pamela von Sabljar',
        startTime: '17:15',
        endTime: '18:45',
        language: 'Swedish',
        location: 'Kårhuset: Auditorium',
        description:
          'Have you ever wondered how to face challenges and setbacks in the best way possible? Then check out this inspirational and motivational event with Pamela von Sabljar! This event will help you learn more about the importance of a good mindset and how you may acquire one. Furthermore, Pamela will also talk about how to deal with setbacks and how to turn these from something negative into something positive.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 7th - Thursday',
    data: [
      {
        key: '1',
        name: 'Lunch lecture with Sveriges Ingenjörer',
        speaker: '',
        startTime: '12:00',
        endTime: '13:00',
        language: 'Swedish',
        location: 'Matteannexet: MA7',
        description:
          'Do you want to know how you may strengthen your own personal brand as an engineer and secure that summer job, master thesis project or first regular job you really want? Then this is an event you don’t want to miss!',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 11th - Monday',
    data: [
      {
        key: '1',
        name: 'Lunch lecture with Atea',
        speaker: '',
        startTime: '12:00',
        endTime: '13:00',
        language: 'Swedish',
        location: 'Matteannexet: MA7',
        description:
          "",
        signUpURL: 'https://www.arkadtlth.se/events/'
      },
      {
        key: '2',
        name: 'Snacka Snyggt',
        speaker: 'Anna Ekblom',
        startTime: '17:15',
        endTime: '18:45',
        language: 'Swedish',
        location: 'Kårhuset: Auditorium',
        description:
          'Do you want to know how you can gain that competitive edge in interaction with companies during ARKAD 2019? Then check out this event with Anna Ekblom from Snacka Snyggt! This event will give you tips and tricks regarding what you should and what you should not do during a fair. Specifically, this event will help you understand how to use both your words and your body language to stand out from the masses in a career fair environment.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 12th - Tuesday',
    data: [
      {
        key: '1',
        name: 'Opening Ceremony ARKAD 2019',
        speaker: '',
        startTime: '17:00',
        endTime: '19:00',
        language: '',
        location: 'Kårhuset: Gasquesalen',
        description:
          'Welcome to ARKAD 2019! It is with great pleasure that we welcome you to the opening ceremony for ARKAD 2019! This event will be the spark that will ignite this year’s career fair, as it will be the official opening of ARKAD 2019. Come and mingle with both company representatives and students while enjoying some sparkling drinks, appetizers and live music.',
        signUpURL: 'https://www.arkadtlth.se/events/'
      }
    ]
  },
  {
    title: 'November 13th - Wednessday',
    data: [
      {
        key: '1',
        name: 'Pitch please!',
        speaker: '',
        startTime: '12:00',
        endTime: '13:00',
        language: '',
        location: 'Matteannexet: MA7',
        description:
          'Are you looking to find out about new interesting companies in your search for a summer job, master thesis project or first regular job? Then this is the perfect event for you! For this event, a total of five different companies will get five minutes each to present and pitch themselves, what they do, as well as their visions, ideas and aspirations. Due to the time limit, be prepared to get high quality, time-optimized pitches.',
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
