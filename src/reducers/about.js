// Coordinator pictures are 200x200 pixels

const initialState = {
  aboutUs:
    'With 200 exhibiting companies and 300 volunteers, ARKAD is the largest career fair in Scandinavia. On the 13th and 14th of November Lund University, Faculty of Engineering will be crowded with thousands of students and exhibitors eager to meet new people and seize future opportunities. We hope to see you all there!',
  openingHours: [
    { date: '13th of November', time: '10:00-16:00' },
    { date: '14th of November', time: '10:00-15:00' }
  ],
  aboutArkadTeam:
    'The ARKAD organization consist of the Project Group, Coordinators and Hosts. All together we are almost 300 people and together we have been working very hard to make this year’s fair be the best one ever.',
  arkadTeam: [
    {
      title: 'Project group',
      data: [
        {
          key: '0',
          name: 'Nicolas Munke Cilano',
          role: 'Project Manager',
          image: require('../../resources/img/arkadTeam/Nicolas_Munke_Cilano.png'),
          linkedInUrl: 'https://www.linkedin.com/in/nicolas-munke-cilano/'
        },
        {
          key: '1',
          name: 'Daniel Tovesson',
          role: 'Head of IT',
          image: require('../../resources/img/arkadTeam/Daniel_Tovesson.png'),
          linkedInUrl: 'https://www.linkedin.com/in/danieltovesson/'
        },
        {
          key: '2',
          name: 'Madeleine Arkenius',
          role: 'Head of Marketing and Communication',
          image: require('../../resources/img/arkadTeam/Madeleine_Arkenius.png'),
          linkedInUrl: 'https://www.linkedin.com/in/madeleine-arkenius-60a34117a/'
        },
        {
          key: '3',
          name: 'Martin Andersson-Plyming',
          role: 'Head of Fair and Logistics',
          image: require('../../resources/img/arkadTeam/Martin_Andersson_Plyming.png'),
          linkedInUrl: 'https://www.linkedin.com/in/mvap/'
        },
        {
          key: '4',
          name: 'Matilda Holmberg',
          role: 'Head of Gasque and Event',
          image: require('../../resources/img/arkadTeam/Matilda_Holmberg.png'),
          linkedInUrl: 'https://www.linkedin.com/in/matilda-holmberg-a595a217a/'
        },
        {
          key: '5',
          name: 'Filippa Melin',
          role: 'Art Director',
          image: require('../../resources/img/arkadTeam/Filippa_Melin.png'),
          linkedInUrl: 'https://www.linkedin.com/in/filippa-melin-b2673713b/'
        },
        {
          key: '6',
          name: 'Max Granvik',
          role: 'Business Manager',
          image: require('../../resources/img/arkadTeam/Max_Granvik.png'),
          linkedInUrl: 'https://www.linkedin.com/in/max-granvik-44159370/'
        },
        {
          key: '7',
          name: 'Yusuf Qasem',
          role: 'Business Manager',
          image: require('../../resources/img/arkadTeam/Yusuf_Qasem.png'),
          linkedInUrl: 'https://www.linkedin.com/in/yusuf-qasem-15a17315b/'
        },
        {
          key: '8',
          name: 'Michael Lindberg',
          role: 'Event Manager',
          image: require('../../resources/img/arkadTeam/Michael_Lindberg.png'),
          linkedInUrl: 'https://www.linkedin.com/in/michael-lindberg-9a6382153/'
        },
        {
          key: '9',
          name: 'Alexander Mjöberg',
          role: 'External Systems Manager',
          image: require('../../resources/img/arkadTeam/Alexander_Mjoberg.png'),
          linkedInUrl: 'https://www.linkedin.com/in/alexander-mj%C3%B6berg/'
        },
        {
          key: '10',
          name: 'Emma Sandin',
          role: 'Gasque Manager',
          image: require('../../resources/img/arkadTeam/Emma_Sandin.png'),
          linkedInUrl: 'https://www.linkedin.com/in/emma-sandin-8213a6188/'
        },
        {
          key: '11',
          name: 'Johan Ternerot',
          role: 'Information Manager',
          image: require('../../resources/img/arkadTeam/Johan_Ternerot.png'),
          linkedInUrl: 'https://www.linkedin.com/in/johan-ternerot-852102183/'
        },
        {
          key: '12',
          name: 'Viktor Claesson',
          role: 'Internal Systems Manager',
          image: require('../../resources/img/arkadTeam/Viktor_Claesson.png'),
          linkedInUrl: 'https://www.linkedin.com/in/viktor-claesson-26a666129/'
        },
        {
          key: '13',
          name: 'Martin Olsson',
          role: 'Premises Manager',
          image: require('../../resources/img/arkadTeam/Martin_Olsson.png'),
          linkedInUrl: 'https://www.linkedin.com/in/martin-olsson-/'
        },
        {
          key: '14',
          name: 'Milda Grikainyte',
          role: 'Premises Manager',
          image: require('../../resources/img/arkadTeam/Milda_Grikainyte.png'),
          linkedInUrl: 'https://www.linkedin.com/in/milda-grikainyte-3624a5141/'
        },
        {
          key: '15',
          name: 'Johan Ravnborg',
          role: 'Recruitment Manager',
          image: require('../../resources/img/arkadTeam/Johan_Ravnborg.png'),
          linkedInUrl: 'https://www.linkedin.com/in/johan-ravnborg-69267617b/'
        },
        {
          key: '16',
          name: 'Johanna Lidholm',
          role: 'Service Manager',
          image: require('../../resources/img/arkadTeam/Johanna_Lidholm.png'),
          linkedInUrl: 'https://www.linkedin.com/in/johanna-lidholm/'
        }
      ]
    },
    {
      title: 'IT - Mobile application',
      data: [
        {
          key: '0',
          name: 'Arvid Pilhall',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Arvid_Pilhall.png'),
          linkedInUrl: 'https://www.linkedin.com/in/arvidpilhall/'
        },
        {
          key: '1',
          name: 'Fritjof Bengtsson',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Fritjof_Bengtsson.png'),
          linkedInUrl: 'https://www.linkedin.com/in/fritjofbengtsson/'
        },
        {
          key: '3',
          name: 'Joel Bångdal',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Joel_Bangdal.png'),
          linkedInUrl: 'https://www.linkedin.com/in/joel-b%C3%A5ngdal-90a2797a/'
        }
      ]
    },
    {
      title: 'IT - Internal systems',
      data: [
        {
          key: '0',
          name: 'Filip Hedén',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Filip_Heden.png'),
          linkedInUrl: 'https://www.linkedin.com/in/filip-hed%C3%A9n-823682171/'
        },
        {
          key: '1',
          name: 'Gabriel Borglund',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Gabriel_Borglund.png'),
          linkedInUrl: 'https://www.linkedin.com/in/gabriel-borglund/'
        },
        {
          key: '2',
          name: 'Mustafa Albayati',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Mustafa_Albayati.png'),
          linkedInUrl: 'https://www.linkedin.com/in/mustafa-albayati-952416196'
        },
        {
          key: '3',
          name: 'Nicki Berlin',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Nicki_Berlin.png'),
          linkedInUrl: ''
        },
        {
          key: '4',
          name: 'Oskar Damkjaer',
          role: 'IT Developer',
          image: require('../../resources/img/arkadTeam/Oskar_Damkjaer.png'),
          linkedInUrl: 'https://www.linkedin.com/in/oskar-damkjaer-771257b5/'
        }
      ]
    },
    // Coord-start
    {
      title: 'Fair And Logistics',
      data: [        {
          key: '0',
          name: 'Daniel Iveborg',
          role: 'Logistics Coordinator',
          image: require('../../resources/img/arkadTeam/Daniel_Iveborg.png'),
          linkedInUrl: ''
        },        {
          key: '1',
          name: 'Lucas Werner',
          role: 'Logistics Coordinator',
          image: require('../../resources/img/arkadTeam/Lucas_Werner.png'),
          linkedInUrl: 'https://www.linkedin.com/in/lucas-werner-21baab17a/'
        },        {
          key: '2',
          name: 'Samuel Hirschfeld',
          role: 'Logistics Coordinator',
          image: require('../../resources/img/arkadTeam/Samuel_Hirschfeld.png'),
          linkedInUrl: ''
        },        {
          key: '3',
          name: 'Anthon Izad Khast Wellerfeld',
          role: 'Lounge Coordinator',
          image: require('../../resources/img/arkadTeam/Anthon_Izad_Khast_Wellerfeld.png'),
          linkedInUrl: 'https://www.linkedin.com/in/anthon-izad-khast-wellerfeld-83a8a8183/'
        },        {
          key: '4',
          name: 'Rawan Yacoub',
          role: 'Lounge Coordinator',
          image: require('../../resources/img/arkadTeam/Rawan_Yacoub.png'),
          linkedInUrl: 'https://www.linkedin.com/in/rawan-yacoub-1088a714a'
        },        {
          key: '5',
          name: 'Arne Stenkrona',
          role: 'Lunch Coordinator',
          image: require('../../resources/img/arkadTeam/Arne_Stenkrona.png'),
          linkedInUrl: ''
        },        {
          key: '6',
          name: 'Matilda Horn',
          role: 'Lunch Coordinator',
          image: require('../../resources/img/arkadTeam/Matilda_Horn.png'),
          linkedInUrl: 'https://www.linkedin.com/in/matildahorn/'
        },        {
          key: '7',
          name: 'Daniel Ringwald',
          role: 'Power Supply & Network Coordinator',
          image: require('../../resources/img/arkadTeam/Daniel_Ringwald.png'),
          linkedInUrl: 'http://linkedin.com/in/daniel-ringwald-b73bb7142'
        },        {
          key: '8',
          name: 'Hugo Hildeman',
          role: 'Power Supply & Network Coordinator',
          image: require('../../resources/img/arkadTeam/Hugo_Hildeman.png'),
          linkedInUrl: ''
        },        {
          key: '9',
          name: 'Andreas Bengtsson',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Andreas_Bengtsson.png'),
          linkedInUrl: ''
        },        {
          key: '10',
          name: 'Diederik Harmsen',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Diederik_Harmsen.png'),
          linkedInUrl: ''
        },        {
          key: '11',
          name: 'Ebba Lundberg',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Ebba_Lundberg.png'),
          linkedInUrl: 'http://linkedin.com/in/ebba-lundberg-lth'
        },        {
          key: '12',
          name: 'Filip Lindkvist',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Filip_Lindkvist.png'),
          linkedInUrl: 'https://www.linkedin.com/in/filip-lindkvist-165537136/'
        },        {
          key: '13',
          name: 'Jessica Kågeman',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Jessica_Kageman.png'),
          linkedInUrl: ''
        },        {
          key: '14',
          name: 'Linus Åbrink',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Linus_Abrink.png'),
          linkedInUrl: ''
        },        {
          key: '15',
          name: 'Sanna Nordberg',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/Sanna_Nordberg.png'),
          linkedInUrl: ''
        },        {
          key: '16',
          name: 'Gustav Jönemo',
          role: 'Shuttle Service Coordinator',
          image: require('../../resources/img/arkadTeam/Gustav_Jonemo.png'),
          linkedInUrl: 'https://www.linkedin.com/in/gustav-j%C3%B6nemo-8b8720174/'
        },        {
          key: '17',
          name: 'Linnea Gidner',
          role: 'Task Force Coordinator',
          image: require('../../resources/img/arkadTeam/Linnea_Gidner.png'),
          linkedInUrl: 'https://www.linkedin.com/in/linnea-gidner-a58ba2158/'
        }      ]
    },{
      title: 'Gasque And Event',
      data: [        {
          key: '0',
          name: 'Emma Olsson',
          role: 'Event - Administration Coordinator',
          image: require('../../resources/img/arkadTeam/Emma_Olsson.png'),
          linkedInUrl: 'https://www.linkedin.com/in/emma-olsson-8b8398153/'
        },        {
          key: '1',
          name: 'Nelly Ostréus',
          role: 'Event - Administration Coordinator',
          image: require('../../resources/img/arkadTeam/Nelly_Ostreus.png'),
          linkedInUrl: ''
        },        {
          key: '2',
          name: 'Douglas Edström',
          role: 'Event - Meal Coordinator',
          image: require('../../resources/img/arkadTeam/Douglas_Edstrom.png'),
          linkedInUrl: ''
        },        {
          key: '3',
          name: 'Hjalmar Åhman',
          role: 'Event - Meal Coordinator',
          image: require('../../resources/img/arkadTeam/Hjalmar_Ahman.png'),
          linkedInUrl: ''
        },        {
          key: '4',
          name: 'Frida Joelsson',
          role: 'Gasque - Decor and purchase Coordinator',
          image: require('../../resources/img/arkadTeam/Frida_Joelsson.png'),
          linkedInUrl: ''
        },        {
          key: '5',
          name: 'Filip Berg',
          role: 'Gasque - Entertainment Coordinator',
          image: require('../../resources/img/arkadTeam/Filip_Berg.png'),
          linkedInUrl: 'https://www.linkedin.com/in/filip-berg-499712179/'
        },        {
          key: '6',
          name: 'Ming Li',
          role: 'Gasque - Entertainment Coordinator',
          image: require('../../resources/img/arkadTeam/Ming_Li.png'),
          linkedInUrl: ''
        },        {
          key: '7',
          name: 'Adam Turesson',
          role: 'Gasque - Sound & Lighting Coordinator',
          image: require('../../resources/img/arkadTeam/Adam_Turesson.png'),
          linkedInUrl: ''
        }      ]
    },{
      title: 'Marketing and Communication',
      data: [        {
          key: '0',
          name: 'Benjamin Kabil',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/Benjamin_Kabil.png'),
          linkedInUrl: ''
        },        {
          key: '1',
          name: 'Jakob Bengtsson',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/Jakob_Bengtsson.png'),
          linkedInUrl: ''
        },        {
          key: '2',
          name: 'Thomas Syski',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/Thomas_Syski.png'),
          linkedInUrl: 'https://www.linkedin.com/in/thomas-syski/'
        },        {
          key: '3',
          name: 'Zennat Gholam',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/Zennat_Gholam.png'),
          linkedInUrl: 'https://www.linkedin.com/in/zennatgholam/'
        },        {
          key: '4',
          name: 'Filip Tran',
          role: 'Information Coordinator',
          image: require('../../resources/img/arkadTeam/Filip_Tran.png'),
          linkedInUrl: ''
        },        {
          key: '5',
          name: 'Elias Åberg',
          role: 'Interior Coordinator',
          image: require('../../resources/img/arkadTeam/Elias_Aberg.png'),
          linkedInUrl: ''
        },        {
          key: '6',
          name: 'Louise Wedberg',
          role: 'Interior Coordinator',
          image: require('../../resources/img/arkadTeam/Louise_Wedberg.png'),
          linkedInUrl: 'www.linkedin.com/in/louise-wedberg-86a3aa15a'
        },        {
          key: '7',
          name: 'Jacob Nilsson',
          role: 'Market Research Coordinator',
          image: require('../../resources/img/arkadTeam/Jacob_Nilsson.png'),
          linkedInUrl: 'http://linkedin.com/in/jacob-nilsson-a8b8a0107'
        },        {
          key: '8',
          name: 'Axel Wiktor',
          role: 'Photo Coordinator',
          image: require('../../resources/img/arkadTeam/Axel_Wiktor.png'),
          linkedInUrl: 'https://www.linkedin.com/in/axelwiktor/'
        },        {
          key: '9',
          name: 'Alexia Han',
          role: 'PR Coordinator',
          image: require('../../resources/img/arkadTeam/Alexia_Han.png'),
          linkedInUrl: 'www.linkedin.com/in/alexia-x-han'
        },        {
          key: '10',
          name: 'André Nilsson',
          role: 'UX Coordinator',
          image: require('../../resources/img/arkadTeam/Andre_Nilsson.png'),
          linkedInUrl: 'https://www.linkedin.com/in/andr%C3%A9-nilsson-739585165/'
        }      ]
    },
    // Coord-stop
    {
    // Host-start
      title: 'Hosts',
      data: [
        {
          key: '0',
          name: 'Hosts',
          role: 'Helps companies at the fair',
          image: require('../../resources/img/arkadTeam/hosts.jpg')
        }
      ]
    },{
      title: 'Gasque hosts',
      data: [
    {
       name: "Lovis Åsberg",
       role: "Gasque host",
       key: 0,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alexander Sandström",
       role: "Gasque host",
       key: 1,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Amanda Nystedt",
       role: "Gasque host",
       key: 2,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Emma Holmqvist",
       role: "Gasque host",
       key: 3,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fanny Brink",
       role: "Gasque host",
       key: 4,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Felicia Schipperges Tjus",
       role: "Gasque host",
       key: 5,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Petter Håkansson",
       role: "Gasque host",
       key: 6,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Samuel Eklund",
       role: "Gasque host",
       key: 7,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sara Davidsson Bencker",
       role: "Gasque host",
       key: 8,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Shashank Bhanuprakash",
       role: "Gasque host",
       key: 9,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Shegofa Qorbanzade",
       role: "Gasque host",
       key: 10,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Valeriia Grudtsyna",
       role: "Gasque host",
       key: 11,
       image: require('../../resources/img/arkadTeam/default.png')
    }]},
    {
      title: 'Chauffeur hosts',
      data: [
    {
       name: "Fred Nordell",
       role: "Chauffeur host",
       key: 12,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Felicia Gabrielii Augustsson",
       role: "Chauffeur host",
       key: 13,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Nils Wicktor",
       role: "Chauffeur host",
       key: 14,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Maria Manuel De Bastos Pacheco",
       role: "Chauffeur host",
       key: 15,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Theo Nyman",
       role: "Chauffeur host",
       key: 16,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ardian Miftari",
       role: "Chauffeur host",
       key: 17,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Malin Wahlström",
       role: "Chauffeur host",
       key: 18,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gustav Sällberg",
       role: "Chauffeur host",
       key: 19,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Simon Hessman",
       role: "Chauffeur host",
       key: 20,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gloria Mokberi",
       role: "Chauffeur host",
       key: 21,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lukas Petersson",
       role: "Chauffeur host",
       key: 22,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Jasmina Trinh",
       role: "Chauffeur host",
       key: 23,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Andreas Thoft",
       role: "Chauffeur host",
       key: 24,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Patric Wargeus",
       role: "Chauffeur host",
       key: 25,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    ]
  },
    {
      title: 'Events hosts',
      data: [
    {
       name: "Lina Tinnerberg",
       role: "Event host",
       key: 26,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tove Persson",
       role: "Event host",
       key: 27,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Rebecka Knutsson",
       role: "Event host",
       key: 28,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Henriette Haugen",
       role: "Event host",
       key: 29,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oskar Wändesjö",
       role: "Event host",
       key: 30,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Johan Ekman",
       role: "Event host",
       key: 31,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sahqr",
       role: "Event host",
       key: 32,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Joakim Dworak",
       role: "Event host",
       key: 33,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Pauline Sandberg",
       role: "Event host",
       key: 34,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Kathleen Nguyen",
       role: "Event host",
       key: 35,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Moutoz Abdalrahman",
       role: "Event host",
       key: 36,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "YiZhen Yang",
       role: "Event host",
       key: 37,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Rasmus Olsson",
       role: "Event host",
       key: 38,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gelli Bharath",
       role: "Event host",
       key: 39,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Yash Shrimali",
       role: "Event host",
       key: 40,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Info-desk hosts',
    data: [
    {
       name: "Yasmeen Ali",
       role: "Info-desk host",
       key: 42,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gustav Ingvaldsson",
       role: "Info-desk host",
       key: 43,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Celina Gustafsson",
       role: "Info-desk host",
       key: 44,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Björn Lindgren",
       role: "Info-desk host",
       key: 45,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hanna Bengtsson",
       role: "Info-desk host",
       key: 46,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tove Nimvik",
       role: "Info-desk host",
       key: 47,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Elin Öberg",
       role: "Info-desk host",
       key: 48,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hugo wikholm",
       role: "Info-desk host",
       key: 49,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ester Pörtfors",
       role: "Info-desk host",
       key: 50,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Viktor Strömberg",
       role: "Info-desk host",
       key: 51,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Albin Forsberg",
       role: "Info-desk host",
       key: 52,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gustaf Carstam",
       role: "Info-desk host",
       key: 53,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Per Nelsson",
       role: "Info-desk host",
       key: 54,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Henrik Ramström",
       role: "Info-desk host",
       key: 55,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hanna Karlsson",
       role: "Info-desk host",
       key: 56,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Julia Lövgren",
       role: "Info-desk host",
       key: 57,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Anna Andersson",
       role: "Info-desk host",
       key: 58,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Märta Larsson",
       role: "Info-desk host",
       key: 59,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Johanna Schedin",
       role: "Info-desk host",
       key: 60,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Osama Eldawebi",
       role: "Info-desk host",
       key: 61,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Albin Erlander",
       role: "Info-desk host",
       key: 62,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Henrik Shadman",
       role: "Info-desk host",
       key: 63,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tselmeg Baasan",
       role: "Info-desk host",
       key: 64,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Heaven Frezgi",
       role: "Info-desk host",
       key: 65,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Victoria Lindwert",
       role: "Info-desk host",
       key: 66,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "SUPRADEEPA PANUAL GANESAN",
       role: "Info-desk host",
       key: 67,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oliver Bengtsson",
       role: "Info-desk host",
       key: 68,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Interior hosts',
    data: [
    {
       name: "Ida Andersson",
       role: "Interior host",
       key: 69,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lisa Bybro",
       role: "Interior host",
       key: 70,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Elina Yrlid",
       role: "Interior host",
       key: 71,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alice Berggren",
       role: "Interior host",
       key: 72,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Antonia Mundt-Petersen",
       role: "Interior host",
       key: 73,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Chia-Yin Lin",
       role: "Interior host",
       key: 74,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Durgaprasad Srinivasa",
       role: "Interior host",
       key: 75,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Cassandra Hennström",
       role: "Interior host",
       key: 76,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lova Sedigh",
       role: "Interior host",
       key: 77,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Lounge hosts',
    data: [
    {
       name: "Sofie Thulin",
       role: "Lounge host",
       key: 78,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Nicki Holmgran",
       role: "Lounge host",
       key: 79,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Henrik Ruuth",
       role: "Lounge host",
       key: 80,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Pontus Herrmann",
       role: "Lounge host",
       key: 81,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Jens Svendsen",
       role: "Lounge host",
       key: 82,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Johan Svensson",
       role: "Lounge host",
       key: 83,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Rebecka Lindquist",
       role: "Lounge host",
       key: 84,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Daniel Carlson Bjernald",
       role: "Lounge host",
       key: 85,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ulrika Lindquist",
       role: "Lounge host",
       key: 86,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Vesa Halipi",
       role: "Lounge host",
       key: 87,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Agnesa Halipi",
       role: "Lounge host",
       key: 88,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Max Gref",
       role: "Lounge host",
       key: 89,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "David Karlsson",
       role: "Lounge host",
       key: 90,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Miran Lurr",
       role: "Lounge host",
       key: 91,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Love Sjelvgren",
       role: "Lounge host",
       key: 92,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Johan Henningsson",
       role: "Lounge host",
       key: 93,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alexander Lenander",
       role: "Lounge host",
       key: 94,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Manjunath Harshavardhan",
       role: "Lounge host",
       key: 95,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Frida Takman",
       role: "Lounge host",
       key: 96,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Niklas Gälldin",
       role: "Lounge host",
       key: 97,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Pernilla Johansson",
       role: "Lounge host",
       key: 98,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lejla Alibegovic",
       role: "Lounge host",
       key: 99,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Anthony Chin",
       role: "Lounge host",
       key: 100,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Malin Thituson",
       role: "Lounge host",
       key: 101,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alex Gustafsson",
       role: "Lounge host",
       key: 102,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oskar Pott",
       role: "Lounge host",
       key: 103,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Lunch hosts',
    data: [
    {
       name: "Natalia Norambuena",
       role: "Lunch host",
       key: 105,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Nawanit Kumar",
       role: "Lunch host",
       key: 106,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Cassandra Doggett",
       role: "Lunch host",
       key: 107,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Evelina Morgan",
       role: "Lunch host",
       key: 108,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Emma Ralston",
       role: "Lunch host",
       key: 109,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Darshan Manjunathrao Chawan",
       role: "Lunch host",
       key: 110,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Manasa Sreeharideva",
       role: "Lunch host",
       key: 111,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Elna Seyer",
       role: "Lunch host",
       key: 112,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Janani",
       role: "Lunch host",
       key: 113,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Klara Eliasson",
       role: "Lunch host",
       key: 114,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sofia Larsson",
       role: "Lunch host",
       key: 115,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Divya Khanna",
       role: "Lunch host",
       key: 116,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Michaela Alsterberg",
       role: "Lunch host",
       key: 117,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alfred Langerbeck",
       role: "Lunch host",
       key: 118,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Amanda Ekegren",
       role: "Lunch host",
       key: 119,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Luut Hermans",
       role: "Lunch host",
       key: 120,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Shushruth Holla",
       role: "Lunch host",
       key: 121,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Rimzim Singh",
       role: "Lunch host",
       key: 122,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Power supply & Network hosts',
    data: [
    {
       name: "Oliver Stussi",
       role: "Power Supply & Network host",
       key: 123,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hussein Shreif",
       role: "Power Supply & Network host",
       key: 124,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Jakob Sinclair",
       role: "Power Supply & Network host",
       key: 125,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Manish Basavaraj Basaligundi",
       role: "Power Supply & Network host",
       key: 126,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tobias Karlsson",
       role: "Power Supply & Network host",
       key: 127,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Erik Busk",
       role: "Power Supply & Network host",
       key: 128,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Photo hosts',
    data: [
    {
       name: "Johan Hultqvist",
       role: "Photo host",
       key: 129,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Amanda Hillström",
       role: "Photo host",
       key: 130,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Student session hosts',
    data: [
    {
       name: "Revathi Saravana kumar",
       role: "Student Session host",
       key: 131,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lakshmi Manogna Dama",
       role: "Student Session host",
       key: 132,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oscar Wahlström",
       role: "Student Session host",
       key: 133,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Task force hosts',
    data: [
    {
       name: "Johan Bengtsson",
       role: "Task Force host",
       key: 134,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hanna Höjbert",
       role: "Task Force host",
       key: 135,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hannes Östergren",
       role: "Task Force host",
       key: 136,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Michal Nowak",
       role: "Task Force host",
       key: 137,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lauren Dell",
       role: "Task Force host",
       key: 138,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Viktor Halldén",
       role: "Task Force host",
       key: 139,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Johan Karlsson",
       role: "Task Force host",
       key: 140,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Anton Öreberg",
       role: "Task Force host",
       key: 141,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fredrik Berg",
       role: "Task Force host",
       key: 142,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Love Sandin",
       role: "Task Force host",
       key: 143,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Josefin Böhrens Radö",
       role: "Task Force host",
       key: 144,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Artina Sijarina",
       role: "Task Force host",
       key: 145,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alvin Ohlsson",
       role: "Task Force host",
       key: 146,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Bashir Chikho",
       role: "Task Force host",
       key: 147,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Prasad Rajendra Kekare",
       role: "Task Force host",
       key: 148,
       image: require('../../resources/img/arkadTeam/default.png')
    },
  ]},
  {
    title: 'Career fair hosts',
    data: [
    {
       name: "Joel Bäcker",
       role: "Career Fair host",
       key: 150,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Meshach Milon",
       role: "Career Fair host",
       key: 151,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Daniel Bakic Bakic",
       role: "Career Fair host",
       key: 152,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Olivia Samuelsson",
       role: "Career Fair host",
       key: 153,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tobias Widmark",
       role: "Career Fair host",
       key: 154,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fiona Hay",
       role: "Career Fair host",
       key: 155,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Henrik Elmér",
       role: "Career Fair host",
       key: 156,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Beri Manideep",
       role: "Career Fair host",
       key: 157,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "William Eriksson",
       role: "Career Fair host",
       key: 158,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Idun Jerlhagen Forsgren",
       role: "Career Fair host",
       key: 159,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Biborka Bihari",
       role: "Career Fair host",
       key: 160,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sofia Rokkones",
       role: "Career Fair host",
       key: 161,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Harald Harald Huber",
       role: "Career Fair host",
       key: 162,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ranjitha Gubbi Suresh",
       role: "Career Fair host",
       key: 163,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lisa Swanberg",
       role: "Career Fair host",
       key: 164,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gopal Gomatam",
       role: "Career Fair host",
       key: 165,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oskar Hindgren",
       role: "Career Fair host",
       key: 166,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gustaf Lundgren",
       role: "Career Fair host",
       key: 167,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Georg Hanö Ivarsson",
       role: "Career Fair host",
       key: 168,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Erik Svensson",
       role: "Career Fair host",
       key: 169,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Jonas Lilja",
       role: "Career Fair host",
       key: 170,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Marcus Hedebark",
       role: "Career Fair host",
       key: 171,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Spuran Reddy",
       role: "Career Fair host",
       key: 172,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gustav Lilja",
       role: "Career Fair host",
       key: 173,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lisa af Klint",
       role: "Career Fair host",
       key: 174,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "John Helbrink",
       role: "Career Fair host",
       key: 175,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Daniel Lundkvist",
       role: "Career Fair host",
       key: 176,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sara Ahrari",
       role: "Career Fair host",
       key: 177,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Filip Farbäck",
       role: "Career Fair host",
       key: 178,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fredrik Siemund",
       role: "Career Fair host",
       key: 179,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Karl-Oskar Rikås",
       role: "Career Fair host",
       key: 180,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oskar Heimer",
       role: "Career Fair host",
       key: 181,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Stina Josephson",
       role: "Career Fair host",
       key: 182,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Marie Ask Uggla",
       role: "Career Fair host",
       key: 183,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Niklas Karlsson",
       role: "Career Fair host",
       key: 184,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "John Moberg",
       role: "Career Fair host",
       key: 185,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "karnarjun kantharajan",
       role: "Career Fair host",
       key: 186,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ludvig Söderman",
       role: "Career Fair host",
       key: 187,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Amalia Emmoth",
       role: "Career Fair host",
       key: 188,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Uno Thurfjell",
       role: "Career Fair host",
       key: 189,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Vilmer Dahlberg",
       role: "Career Fair host",
       key: 190,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Amanda Blad",
       role: "Career Fair host",
       key: 191,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Clara Wilhelmsson",
       role: "Career Fair host",
       key: 192,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ajay Ravi Malasetty",
       role: "Career Fair host",
       key: 193,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Emil Palmenäs",
       role: "Career Fair host",
       key: 194,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tusjant Ruthran",
       role: "Career Fair host",
       key: 195,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "David Flyrin",
       role: "Career Fair host",
       key: 196,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Nermina Goletic",
       role: "Career Fair host",
       key: 197,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fredrik Sidh",
       role: "Career Fair host",
       key: 198,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oscar Odestål",
       role: "Career Fair host",
       key: 199,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sara Johannesson",
       role: "Career Fair host",
       key: 200,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sara Wallén",
       role: "Career Fair host",
       key: 201,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Badri Reddy Gade",
       role: "Career Fair host",
       key: 202,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Arvid Hansson",
       role: "Career Fair host",
       key: 203,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ebba Lundgren",
       role: "Career Fair host",
       key: 204,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Anudeep Gudimella",
       role: "Career Fair host",
       key: 205,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Javad Blouchi",
       role: "Career Fair host",
       key: 206,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "SUBHAJIT BHUINYA",
       role: "Career Fair host",
       key: 207,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Tobias Wrammerfors",
       role: "Career Fair host",
       key: 208,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Linus Andersson",
       role: "Career Fair host",
       key: 209,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Chandana Mysore Somashekar",
       role: "Career Fair host",
       key: 210,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Roberts Bitenieks",
       role: "Career Fair host",
       key: 211,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Edvin Ottosson",
       role: "Career Fair host",
       key: 212,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Yeabsra Habtegebriel",
       role: "Career Fair host",
       key: 213,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Molly Lillebjörn Rusk",
       role: "Career Fair host",
       key: 214,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Rodrigo Olmedo Sotomayor",
       role: "Career Fair host",
       key: 215,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sharath Thandava Murthy",
       role: "Career Fair host",
       key: 216,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Anton Liljefors",
       role: "Career Fair host",
       key: 217,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Emelie Wiklund",
       role: "Career Fair host",
       key: 218,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Andrej Zemtsovski",
       role: "Career Fair host",
       key: 219,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fabian Larhed",
       role: "Career Fair host",
       key: 220,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Agnes Köhler",
       role: "Career Fair host",
       key: 221,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gustav Klotz",
       role: "Career Fair host",
       key: 222,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Herman Lönnqvist",
       role: "Career Fair host",
       key: 223,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Lisa Chung",
       role: "Career Fair host",
       key: 224,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Christoffer Sörensson",
       role: "Career Fair host",
       key: 225,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sandra Olofsson",
       role: "Career Fair host",
       key: 226,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Celia Ramos sanchez",
       role: "Career Fair host",
       key: 227,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Anna Palmqvist Sjövall",
       role: "Career Fair host",
       key: 228,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Sandra Arvidsson",
       role: "Career Fair host",
       key: 229,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Ludvig Spångberg",
       role: "Career Fair host",
       key: 230,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Hema Kalidasu",
       role: "Career Fair host",
       key: 231,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Gopalakrishnan Srinivasan",
       role: "Career Fair host",
       key: 232,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Oscar de Kuijer",
       role: "Career Fair host",
       key: 233,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Henry Sandell",
       role: "Career Fair host",
       key: 234,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "David Lundberg",
       role: "Career Fair host",
       key: 235,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Fanny Ejlertsson",
       role: "Career Fair host",
       key: 236,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Qianqian Li",
       role: "Career Fair host",
       key: 237,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Rebecka Svensson",
       role: "Career Fair host",
       key: 238,
       image: require('../../resources/img/arkadTeam/default.png')
    },
    {
       name: "Alina Liljeäng",
       role: "Career Fair host",
       key: 239,
       image: require('../../resources/img/arkadTeam/default.png')
    }
 ]
}
 //Host-stop
  ],
  faq: {
    forStudents: [
            {
        key: '0',
        name: 'Before the fair',
        list: [
          {
            key: 1,
            question: 'How do I get involved in ARKAD 2019?',
            answer: 'Unfortunately, all of the applications for ARKAD 2019 have closed.'
          },          {
            key: 2,
            question: 'Do I have to be prepared and bring CV or something similar to the fair?',
            answer: 'ARKAD is for everyone and you do not have to prepare anything special. However, to get more out of the fair you could use scanning system and ofcourse, it is always good to know what you are looking for, which companies you are interested in or maybe some questions you want answers to. And if you don’t know any of this, ARKAD is the perfect place to find that out!'
          },          {
            key: 3,
            question: 'What is Student Session, and how can I apply?',
            answer: 'Student sessions are a great way to establish contact with a diverse range of companies. Generally, a session consists of a 20-25 minute one-on-one talk with a representative of a company. The topics can vary from internships, trainee programs, summer jobs, thesis projects, other forms of employment and much more. It all depends on what the company is looking for and what they are offering. You may apply by visiting the student sessions page and follow the instructions.'
          },          {
            key: 4,
            question: 'Where are the Student Sessions taking place?',
            answer: 'They will be in the E-building. If you are going to have a student session you will receive an email with more detailed information.'
          },      ]},
      {
        key: '1',
        name: 'During the fair',
        list: [          {
            key: 1,
            question: 'What else than networking with companies can ARKAD do for me?',
            answer: 'ARKAD offers more than just a great fair. Amongst other things, ARKAD gives you the opportunity to participate in fun, interesting and educative events. These events will take place both during the fair and the week leading up to the fair, in something called the event-week. Furthermore, ARKAD also offers something called the Career Room. The Career Room is a preparatory, inspiring opportunity for individual career coaching. You can ask any working life-related questions. Some examples are questions about job interviews, how to pitch yourself and how to negotiate your salary. It’s completely up to you what the visit will be about. In addition to the career coaching, you get a professional CV photo. A visit takes about 15 minutes and can be booked outside the room or on the website.'
          },          {
            key: 2,
            question: 'Which companies will be at ARKAD?',
            answer: 'You can find all the companies who will attend ARKAD in the app.'
          },          {
            key: 3,
            question: 'During what time is the fair open?',
            answer: 'Wednesday 13/11: 10.00-16.00\nThursday 14/11: 10.00 – 15.00'
          },          {
            key: 4,
            question: 'During what times are the Info Desks open?',
            answer: 'Tuesday 12/11: 15.00-18.00\nWednesday 13/11: 8.00-16.00\nThursday 14/11: 9.30-15.30'
          },          {
            key: 5,
            question: 'Who gets to use the wardrobe?',
            answer: 'The wardrobe is available for all Hosts and company representatives. The wardrobes are located in Kårhuset, Matteannexet and in Studiecentrum. These are open during the days, but we don’t take responsibility for your personal belongings.'
          },          {
            key: 6,
            question: 'Where is ARKAD?',
            answer: 'ARKAD is this year taking place in four houses, Matteannexet, Studiecentrum, Kårhuset and the E-building.'
          },          {
            key: 7,
            question: 'Where are the Info Desks?',
            answer: 'There is one Info Desk in every house where the fair takes place.'
          },          {
            key: 8,
            question: 'Can I apply for Student Sessions now?',
            answer: 'Yes, the application for student sessions will be open until the 23rd of October.'
          },      ]},
      {
        key: '3',
        name: 'Events',
        list: [
          {
            key: 1,
            question: 'What events are there, and when are they?',
            answer: 'You find all the events under “Events” in the menu on the website or in the app.'
          },          {
            key: 2,
            question: 'How do I sign up for the events?',
            answer: 'You can sign up in the app or on the website under “Events”'
          },          {
            key: 3,
            question: 'How do I know if I have signed up for an event?',
            answer: 'You will get a confirmation sent to the email you used when you registered.'
          },          {
            key: 4,
            question: 'I have signed up for an event but I will not be able to attend it, what do I do?',
            answer: 'Go to the confirmation email and follow the link to your registration, you can cancel so your spot goes to someone on the waiting list.'
          },      ]},
      {
        key: '4',
        name: 'Gasque',
        list: [
          {
            key: 1,
            question: 'Who gets to go to the Gasque?',
            answer: 'Representatives from the companies and students involved in ARKAD gets invited to the Gasque.'
          },          {
            key: 2,
            question: 'Where is the Gasque?',
            answer: 'The Gasque will be held at Sparbanken Skåne Arena. The address is:\nStattenavägen 25\n222 28 Lund.'
          },          {
            key: 3,
            question: 'Will I as a student have the opportunity to meet and converse with company representatives during the Gasque?',
            answer: 'Yes. You will be seated next to a company representative during the dinner, and during the mingle and the after party you have time to talk to the companies as well.'
          },          {
            key: 4,
            question: 'What is the dress code?',
            answer: 'Semi formal (mörk kostym)'
          },      ]},
      {
        key: '5',
        name: 'Other',
        list: [          {
            key: 1,
            question: 'How many companies are coming to ARKAD?',
            answer: 'About 200 companies plus startups and other associations.'
          },            ]
          }
        ],
    forCompanies: [
            {
        key: '0',
        name: 'Before the fair',
        list: [
          {
            key: 2,
            question: 'What is included in the Exhibition-package?',
            answer: '– An exhibitor booth of 3×2 meters with a maximum height of 2.3 meters\n– Exposure through our website and mobile applications\n– Access to a Career Fair Host\n– Access to business lounge, wardrobe and information desk\n– Breakfast, coffee and refreshments during both days of the fair\n– Lunch tickets to four (4) representatives per day\n– Two (2) tickets to the ARKAD gasque\n– Two (2) parking tickets per day\n– Access to Wi-fi and electrical outlets\n– Low tables and chairs\n– Free shuttle service in Lund'
          },          {
            key: 3,
            question: 'Can we get extra supplies to our exhibitor stand area when we are at the fair?',
            answer: 'We can not guarantee extra supplies beyond what you already have ordered.'
          },          {
            key: 4,
            question: 'At what times can we mount and prepare our exhibitor stand?',
            answer: 'Wednesday 13/11 between 8.00 and 9.30 am if you are standing in Kårhuset.\nIf you are in one of the other buildings you have the possibility to do it on Tuesday 12/11 15.00-17.00, or on Wednesday 13/11 between 8.00 and 9.30 am.'
          },          {
            key: 5,
            question: 'Can we apply for Student Sessions now?',
            answer: 'Unfortunately, the application for student sessions is closed.'
          },          {
            key: 6,
            question: 'What is the delivery address?',
            answer: 'Kårhuset, ARKAD\nSölvegatan 22B\n223 62 Lund\nReference: Martin Andersson-Plyming\nTelephone: 0702-96 95 68'
          },          {
            key: 7,
            question: 'At what times is the goods reception open?',
            answer: 'Monday 11/11: 8.00-17.00\nTuesday 12/11: 8.00-14.00'
          },          {
            key: 8,
            question: 'Why do we have to inform about our representatives?',
            answer: 'We have to know the names of the representatives who want to have access to the wi-fi and of those who want to go to the Gasque. If some of your representatives only attend the fair during one day, we still need you to fill in their names.'
          },          {
            key: 9,
            question: 'Who do I contact if I want to know our placement or have other questions?',
            answer: 'Your Career Fair Host will have all the answers you need. Your Career Fair Host will contact you one month prior to the the fair.'
          },          {
            key: 10,
            question: 'How does the shuttle service work?',
            answer: 'You can order shuttle service in the complete application. If you want to order Shuttle service after that, send an email to bilbokning.arkad@tlth.se. During the fair, you can book shuttle service at the info-desk in Matteannexet, but we can not guarantee that it’s always available. We offer to drive or pick up company representatives within Lund for free. We can also pick up or drop off at the airport in Malmö to an extra cost of 200 SEK, one way. The cars leave from the parking lot behind Matteannexet and they have signs which read “Shuttle Service” on them. We do not offer shuttle service to the Gasque.'
          },          {
            key: 11,
            question: 'Who do I contact if I wish to sponsor the fair?',
            answer: 'If you are looking to sponsor the fair, contact the service manager. Contact information can be found under Contact us.'
          },          {
            key: 12,
            question: 'How much does the Exhibition Package cost?',
            answer: 'The cost of the Exhibition Package is 33 500 SEK.'
          },      ]},
      {
        key: '1',
        name: 'During the fair',
        list: [          {
            key: 14,
            question: 'Where can we park our car?',
            answer: 'There will be several parking lots available around campus, but the parking tickets given to you in your exhibition package will only be valid in the areas that are classified as zone A. Please click the following link to see the different parking zones around LTH: parkeringskarta\nIf you need extra parking tickets you can buy them at the Info Desks at the fair, the price is 30 SEK for one day. You may also use the ticket machines at the parking lots.'
          },          {
            key: 15,
            question: 'During what times are the Info Desks open?',
            answer: 'Tuesday 12/11: 15.00-17.00\nWednesday 13/11: 8.00-16.00\nThursday 14/11: 9.00-15.30'
          },          {
            key: 16,
            question: 'Where is the closest lounge?',
            answer: 'There are lounges in Matteannexet, Studiecentrum and in the E-building. Please see the map for the exact position of the lounges.'
          },          {
            key: 17,
            question: 'Who do I contact if I have questions during the fair?',
            answer: 'Your Career Fair Host or the Info Desks.'
          },          {
            key: 18,
            question: 'Where do we get the envelope with parking tickets, Gasque tickets, wi-fi code etc?',
            answer: 'You get them at the Info desk or from your Career Fair Host.'
          },          {
            key: 19,
            question: 'Can we buy extra lunch tickets?',
            answer: 'There are a limited amout of 75 extra lunch tickets available for everyone. You can buy them at the info-desks.'
          },          {
            key: 20,
            question: 'Where is the lunch?',
            answer: 'The lunch is served at Moroten och Piskan (MoP), a restaurant located on the second floor in Kårhuset. The seating however, will be divided between MoP and Cornelis which is located on the first floor in Kårhuset.'
          },          {
            key: 21,
            question: 'Where can we get lunch if we don’t have lunch tickets?',
            answer: 'There are a few lunch-places around campus, for salads you have Grönt & Gott, for pizza or falafel you have Gott & Nära, both of them situated close to Helsingkronatornet. If you want a sandwich or other cold lunches all the houses on campus have their own café where you can buy cheap and nice lunches.'
          },          {
            key: 22,
            question: 'Is it ok to have competitions or live demonstrations in our exhibitor stand?',
            answer: 'Yes, however please keep in mind that you may only use your assigned space and to follow safety precautions.'
          },      ]},
      {
        key: '4',
        name: 'Gasque',
        list: [
          {
            key: 24,
            question: 'Who gets to go to the Gasque?',
            answer: 'Representatives from the companies and students involved in ARKAD gets invited to the Gasque.'
          },          {
            key: 25,
            question: 'Where is the Gasque?',
            answer: 'The Gasque will be held at Sparbanken Skåne Arena. The address is:\nStattenavägen 25\n222 28 Lund.\nParking will be available if you would like to go there by car. More information about parking can be found via following link:',
            links: 'https://www.sparbankenskanearena.se/besokare/'
          },          {
            key: 26,
            question: 'Can we get extra tickets to the Gasque?',
            answer: 'Yes, you may get extra tickets to the gasque by adding these to your exhibition package in the complete application .'
          },          {
            key: 27,
            question: 'We have tickets to the Gasque that will not be used, what do we do?',
            answer: 'You can hand these in at the info desks.'
          },          {
            key: 28,
            question: 'What is the dress code?',
            answer: 'Semi formal (mörk kostym)'
          },          {
            key: 29,
            question: 'Will I as exhibitor representative be placed next to the students whose education is strongly connected to my corporate work at the Gasque?',
            answer: 'We will place students and the exhibitor representatives next to each other so that they make the best of each other’s company. Both the students’ education and your company’s area of business will be taken into account for the placement.'
          },          {
            key: 30,
            question: 'Will there be an opportunity to meet and converse with students during the Gasque?',
            answer: 'The Gasque is a chance for the exhibitor representatives to meet ambitious students in a relaxed environment. There will be opportunities for conversation during the mingle, the dinner and after party, which will offer both dance floors and a lounge area.'
          },      ]},
      {
        key: '5',
        name: 'Other',
        list: [          {
            key: 32,
            question: 'What educations are there on LTH?',
            answer: 'LTH offers a lot of different engineering and architecture educations. For a list of all educations follow the link below',
            links: 'http://www.lth.se/utbildning/'
          },          {
            key: 33,
            question: 'When can we send back goods after the fair?',
            answer: 'Thursday 14/11: 15.00-17.00\nFriday 15/11: 8.00-13.00'
          },
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
