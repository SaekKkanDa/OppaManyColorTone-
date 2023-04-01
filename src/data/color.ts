export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type Tone = 'warm' | 'cool' | 'bright' | 'mute' | 'light' | 'deep';

export type Type =
  | 'springbright'
  | 'springwarm'
  | 'springlight'
  | 'summerlight'
  | 'summercool'
  | 'summermute'
  | 'autumnmute'
  | 'autumnwarm'
  | 'autumndeep'
  | 'winterdeep'
  | 'wintercool'
  | 'winterbright';

type Color = {
  season: Season;
  tone: Tone;
  type: Type;
  color: string[];
  namedColor: { name: string; hex: string }[];
};

const color: Color[] = [
  {
    season: 'spring',
    tone: 'bright',
    type: 'springbright',
    color: [
      '#F8F7D9',
      '#F9E22D',
      '#FDD274',
      '#FECC2D',
      '#FCB937',
      '#FBAA69',
      '#F58538',
      '#F58D72',
      '#D83C39',
      '#DF3252',
      '#BE539F',
      '#A57FBA',
      '#8954A0',
      '#854399',
      '#225B8E',
      '#1881A4',
      '#1D89B1',
      '#1C90AF',
      '#1EA59F',
      '#78C5D5',
      '#CDDA3F',
      '#A56838',
      '#BC5E39',
      '#624F40',
      '#4C4244',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },
  {
    season: 'spring',
    tone: 'warm',
    type: 'springwarm',
    color: [
      '#F9E22D',
      '#FDD274',
      '#FECC2D',
      '#FDBA38',
      '#EBB433',
      '#D1C33B',
      '#C1D442',
      '#A9C24C',
      '#A7AF44',
      '#76A95A',
      '#71C051',
      '#209F54',
      '#1EA5A0',
      '#4DC3CC',
      '#74C7B8',
      '#9696CA',
      '#8954A0',
      '#D83B3B',
      '#B26F5C',
      '#E95644',
      '#A56838',
      '#F58538',
      '#F49139',
      '#F8AC69',
      '#F6A18B',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },
  {
    season: 'spring',
    tone: 'light',
    type: 'springlight',
    color: [
      '#F8F7D9',
      '#EEEB9E',
      '#F4E1A5',
      '#F6CDAB',
      '#FDC9A0',
      '#D7E59E',
      '#D0DEBC',
      '#A6D9D2',
      '#A6DBEB',
      '#9CCBEB',
      '#C3B4D7',
      '#CDA8D0',
      '#FADC6C',
      '#C8C7A9',
      '#D1BD8E',
      '#D7B590',
      '#F8AC69',
      '#CAA07E',
      '#BFA596',
      '#F58D72',
      '#F7A991',
      '#9696CA',
      '#4DC3CC',
      '#74C7B8',
      '#71C051',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },

  {
    season: 'summer',
    tone: 'light',
    type: 'summerlight',
    color: [
      '#c6dce9',
      '#9cd6ea',
      '#9dcfee',
      '#bacae3',
      '#eeb5cd',
      '#d49fc9',
      '#c7bfb6',
      '#d1b7aa',
      '#a69887',
      '#f27a9c',
      '#f284b4',
      '#ce95bb',
      '#ac98c9',
      '#999ac9',
      '#6c8cbb',
      '#85888d',
      '#b370ad',
      '#9e66a9',
      '#61778f',
      '#497095',
      '#9fbad6',
      '#74c7ec',
      '#61c5e9',
      '#77c9b7',
      '#55bd80',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },
  {
    season: 'summer',
    tone: 'cool',
    type: 'summercool',
    color: [
      '#f098c1',
      '#bdbec0',
      '#c5a6ab',
      '#f283b4',
      '#d07fb7',
      '#b370ac',
      '#a47daa',
      '#85888d',
      '#21a77b',
      '#1bb3bb',
      '#1cace1',
      '#2dbdb4',
      '#61778f',
      '#307bbc',
      '#7c6ab0',
      '#8c559f',
      '#944291',
      '#af3463',
      '#c0344d',
      '#e7317e',
      '#ef68a5',
      '#257b87',
      '#257668',
      '#535459',
      '#2d415e',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },
  {
    season: 'summer',
    tone: 'mute',
    type: 'summermute',
    color: [
      '#f3bfcb',
      '#f9a4b8',
      '#9dcfee',
      '#77c9b7',
      '#a0b38d',
      '#a69887',
      '#c5a6ab',
      '#d795ad',
      '#eadba5',
      '#85888d',
      '#a37cac',
      '#9e66a9',
      '#a56298',
      '#8b6b80',
      '#7f7094',
      '#61778f',
      '#6588aa',
      '#7da2b7',
      '#9fbad6',
      '#74c7ec',
      '#aaa5c4',
      '#999ac9',
      '#1e9fa8',
      '#535459',
      '#ac4877',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },

  {
    season: 'autumn',
    tone: 'mute',
    type: 'autumnmute',
    color: [
      '#f5e2a5',
      '#fbd59e',
      '#e0d3ab',
      '#bcc697',
      '#a7ad87',
      '#a39d61',
      '#8c956b',
      '#987e65',
      '#de8a57',
      '#c77567',
      '#977260',
      '#986842',
      '#c45a40',
      '#825746',
      '#59514c',
      '#537d81',
      '#598375',
      '#3a825d',
      '#72c8bb',
      '#ceaa8c',
      '#f9ad6a',
      '#cda459',
      '#b88558',
      '#cda459',
      '#dbb792',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
    ],
  },
  {
    season: 'autumn',
    tone: 'warm',
    type: 'autumnwarm',
    color: [
      '#fecc2d',
      '#b6ac3d',
      '#b89e47',
      '#a29c60',
      '#919a49',
      '#678247',
      '#7c7660',
      '#9f783b',
      '#a66838',
      '#996541',
      '#9c5238',
      '#7d5545',
      '#994138',
      '#624f3e',
      '#c5683e',
      '#e85743',
      '#f07838',
      '#f39041',
      '#d39c42',
      '#6fc8ba',
      '#34bcb1',
      '#219f54',
      '#1d7b8f',
      '#226e47',
      '#2d624e',
    ],
    namedColor: [
      {
        name: 'cream',
        hex: '#fffed0',
      },
      {
        name: 'golden poppy',
        hex: '#fac400',
      },
      {
        name: 'olive',
        hex: '#929a2f',
      },
      {
        name: 'dark olive green',
        hex: '#566c2d',
      },
      {
        name: 'turquoise',
        hex: '#4ab8c5',
      },
      {
        name: 'teal',
        hex: '#027b8b',
      },
    ],
  },
  {
    season: 'autumn',
    tone: 'deep',
    type: 'autumndeep',
    color: [
      '#c1d542',
      '#d9ab3a',
      '#cc713a',
      '#bf6d34',
      '#bb5b3b',
      '#dc5644',
      '#7d5544',
      '#984138',
      '#655748',
      '#624f3e',
      '#616845',
      '#708644',
      '#219f54',
      '#1ea1af',
      '#1d89b1',
      '#1881a7',
      '#1c7a85',
      '#1f5f7b',
      '#87569f',
      '#8a315f',
      '#654045',
      '#7e3639',
      '#603b89',
      '#9f783b',
      '#1e5e55',
    ],
    namedColor: [
      {
        name: 'cream',
        hex: '#fefcd1',
      },
      {
        name: 'mustard',
        hex: '#ffcc00',
      },
      {
        name: 'dark olive green',
        hex: '#566c30',
      },
      {
        name: 'rifle green',
        hex: '#414935',
      },
      {
        name: 'turquoise',
        hex: '#4bb9c8',
      },
      {
        name: 'teal',
        hex: '#027b8b',
      },
      {
        name: 'camel',
        hex: '#c19b6d',
      },
      {
        name: 'vivid orange',
        hex: '#ff7418',
      },
      {
        name: 'tangelo',
        hex: '#f94f00',
      },
      {
        name: 'rust',
        hex: '#b74210',
      },
      {
        name: 'cadmium red',
        hex: '#cc163f',
      },
      {
        name: 'carmine',
        hex: '#95011a',
      },
      {
        name: 'brown',
        hex: '#7c4812',
      },
      {
        name: 'cafe noir',
        hex: '#4c3620',
      },
      {
        name: 'rose ebony',
        hex: '#674747',
      },
      {
        name: 'golden brown',
        hex: '#866417',
      },
      {
        name: 'deer',
        hex: '#a09274',
      },
      {
        name: 'dark pink',
        hex: '#e35d7c',
      },
      {
        name: 'soft navy',
        hex: '#0b3266',
      },
      {
        name: 'byzantium',
        hex: '#6f2864',
      },
      {
        name: 'dark imperial blue',
        hex: '#00416d',
      },
      {
        name: 'teal blue',
        hex: '#387687',
      },
      {
        name: 'blue-green',
        hex: '#149dc0',
      },
      {
        name: 'medium sky blue',
        hex: '#82dcec',
      },
    ],
  },

  {
    season: 'winter',
    tone: 'deep',
    type: 'winterdeep',
    color: [
      '#ffffff',
      '#bbc4e2',
      '#1d9bd1',
      '#3686ce',
      '#1683a1',
      '#246385',
      '#2d62ac',
      '#2c558b',
      '#87429c',
      '#8955a0',
      '#b14c9f',
      '#d72f86',
      '#e12c75',
      '#cd3247',
      '#a8366c',
      '#9a366e',
      '#8a3161',
      '#603b86',
      '#159b80',
      '#219f56',
      '#1b5f51',
      '#364179',
      '#343969',
      '#3a322d',
      '#2d2e31',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#ffffff',
      },
      {
        name: 'yellow',
        hex: '#ffdf00',
      },
      {
        name: 'jungle green',
        hex: '#28ac85',
      },
      {
        name: 'midnight green',
        hex: '#037278',
      },
      {
        name: 'turquoise',
        hex: '#01b3bb',
      },
      {
        name: 'teal',
        hex: '#047c8c',
      },
      {
        name: 'gray',
        hex: '#7a7e85',
      },
      {
        name: 'persian pink',
        hex: '#f781bd',
      },
      {
        name: 'french rose',
        hex: '#f54b8a',
      },
      {
        name: 'mexican pink',
        hex: '#e3027d',
      },
      {
        name: 'dark candy apple red',
        hex: '#af0a41',
      },
      {
        name: 'dark scarlet',
        hex: '#640138',
      },
      {
        name: 'black',
        hex: '#010101',
      },
      {
        name: 'onyx',
        hex: '#37383a',
      },
      {
        name: 'dark silver',
        hex: '#5e6267',
      },
      {
        name: 'bright lavender',
        hex: '#be96e5',
      },
      {
        name: 'deep lilac',
        hex: '#a86acf',
      },
      {
        name: 'regalia',
        hex: '#542d80',
      },
      {
        name: 'navy',
        hex: '#030281',
      },
      {
        name: 'midnight blue',
        hex: '#002e5c',
      },
      {
        name: 'sapphire',
        hex: '#0d53b8',
      },
      {
        name: 'royal blue',
        hex: '#4069e3',
      },
      {
        name: 'bleu de france',
        hex: '#318ce9',
      },
      {
        name: 'vivid sky blue',
        hex: '#00ccff',
      },
    ],
  },
  {
    season: 'winter',
    tone: 'cool',
    type: 'wintercool',
    color: [
      '#ffffff',
      '#99d6ed',
      '#f5e29b',
      '#e896be',
      '#5fc9e5',
      '#a0b7d3',
      '#2ea2dc',
      '#7f888b',
      '#189c7d',
      '#1db2bb',
      '#2485bd',
      '#3587cd',
      '#3876b8',
      '#3260ae',
      '#2c5589',
      '#52525c',
      '#89419b',
      '#8955a0',
      '#b44c9d',
      '#d93086',
      '#e22c73',
      '#cd3248',
      '#a9346e',
      '#8d305f',
      '#2d2e31',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#ffffff',
      },
      {
        name: 'lemon yellow',
        hex: '#fef44e',
      },
      {
        name: 'mint',
        hex: '#00a595',
      },
      {
        name: 'pine green',
        hex: '#019287',
      },
      {
        name: 'pale turquoise',
        hex: '#b0eded',
      },
      {
        name: 'turquoise',
        hex: '#01b3bb',
      },
      {
        name: 'slate gray',
        hex: '#718091',
      },
      {
        name: 'light fuchsia pink',
        hex: '#f984ef',
      },
      {
        name: 'rose pink',
        hex: '#ff66cc',
      },
      {
        name: 'fashion fuchsia',
        hex: '#db4697',
      },
      {
        name: 'rubine red',
        hex: '#e30870',
      },
      {
        name: 'burgundy',
        hex: '#97004e',
      },
      {
        name: 'black',
        hex: '#010101',
      },
      {
        name: 'charcoal',
        hex: '#1f384c',
      },
      {
        name: 'lavender gray',
        hex: '#c4c3cf',
      },
      {
        name: 'pale lavender',
        hex: '#ded1fe',
      },
      {
        name: 'lavender',
        hex: '#b67fdc',
      },
      {
        name: 'blue-magenta violet',
        hex: '#563592',
      },
      {
        name: 'navy',
        hex: '#030281',
      },
      {
        name: 'sapphire',
        hex: '#0d53b8',
      },
      {
        name: 'han blue',
        hex: '#456bcd',
      },
      {
        name: 'french sky blue',
        hex: '#79b4ff',
      },
      {
        name: 'baby blue',
        hex: '#8ccff1',
      },
      {
        name: 'fresh air',
        hex: '#7fcdf5',
      },
    ],
  },
  {
    season: 'winter',
    tone: 'bright',
    type: 'winterbright',
    color: [
      '#ffffff',
      '#c5d7e7',
      '#eb96bf',
      '#2fa1dc',
      '#2399cf',
      '#188ab4',
      '#3587ca',
      '#2d7bbe',
      '#3260b0',
      '#2c5589',
      '#304f9f',
      '#364a9b',
      '#863c94',
      '#a3368f',
      '#a8366c',
      '#c23386',
      '#da2c8c',
      '#e22c74',
      '#e23254',
      '#cb3447',
      '#b54c9e',
      '#8d53a0',
      '#19997f',
      '#215d53',
      '#2d2e31',
    ],
    namedColor: [
      {
        name: 'white',
        hex: '#fffeff',
      },
      {
        name: 'vivid yellow',
        hex: '#fee200',
      },
      {
        name: 'jade',
        hex: '#00a96d',
      },
      {
        name: 'emerald',
        hex: '#2f9175',
      },
      {
        name: 'bright turquoise',
        hex: '#0ae9df',
      },
      {
        name: 'turquoise',
        hex: '#01b3ba',
      },
      {
        name: 'ash gray',
        hex: '#abaeaf',
      },
      {
        name: 'carnation pink',
        hex: '#fea6cc',
      },
      {
        name: 'hot pink',
        hex: '#ff68b2',
      },
      {
        name: 'mexican pink',
        hex: '#dc1e7e',
      },
      {
        name: 'american rose',
        hex: '#ee135d',
      },
      {
        name: 'burgundy',
        hex: '#97004e',
      },
      {
        name: 'black',
        hex: '#010002',
      },
      {
        name: 'quartz',
        hex: '#41474d',
      },
      {
        name: 'dark silver',
        hex: '#707070',
      },
      {
        name: 'bright lavender',
        hex: '#c093e2',
      },
      {
        name: 'electric purple',
        hex: '#c100fc',
      },
      {
        name: 'french violet',
        hex: '#732d90',
      },
      {
        name: 'navy',
        hex: '#030082',
      },
      {
        name: 'sapphire',
        hex: '#0d53b8',
      },
      {
        name: 'azure',
        hex: '#0381ff',
      },
      {
        name: 'capri',
        hex: '#00bffe',
      },
      {
        name: 'vivid sky blue',
        hex: '#00cbff',
      },
      {
        name: 'fresh air',
        hex: '#7eccf4',
      },
    ],
  },
];

export default color;
