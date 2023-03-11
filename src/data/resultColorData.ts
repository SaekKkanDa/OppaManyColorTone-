import resultImg from '@Assets/result';

export type ColorTone =
  | 'springBright'
  | 'springWarm'
  | 'springLight'
  | 'summerLight'
  | 'summerCool'
  | 'summerMute'
  | 'autumnMute'
  | 'autumnWarm'
  | 'autumnDeep'
  | 'winterDeep'
  | 'winterCool'
  | 'winterBright';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export interface ColorResult {
  name: string;
  textColor: Color;
  gridColors: Color[];
  description: string;
  bestColors: Color[];
  worstColors: Color[];
  stylingColor: Color[];
  stylingURL: string;
  celebrities: {
    name: string;
    imageURL: string;
  }[];
}

const springBright: ColorResult = {
  name: '봄 브라이트',
  textColor: '#FDD274',
  gridColors: [
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
  description:
    '봄 컬러 중 색의 청탁이 가장 중요한 타입이에요. 쩅하고 꺠끗한 청색 또는 순색이 가장 잘 어울려요. 봄 브라이트 컬러는 대비감이 중요해서 색상과 명도 중 하나라도 대비감이 강하게 느껴지도록 사용해서 포인트를 주는 것이 좋아요. 대비감이 강하게 느껴지는 극단적인 고명도, 저명도, 고채도, 저채도의 색을 골고루 잘 소화하기 떄문에 쉽게 이미지 변신을 할 수 있다는 장점이 있어요. 흐릿한 탁색을 사용하면 얼굴이 칙칙해 보이고 건조하게 느껴져 봄 브라이트 컬러 특유의 깨끗하고 맑은 느낌을 반감시키고, 회색이 과하게 섞인 여름 타입의 탁색을 사용하면 혈색이 없이 아파 보이거나 피곤하고 힘이 빠진 느낌을 줘요.',
  bestColors: [
    '#F8F7D9',
    '#F9E22D',
    '#FDD274',
    '#F58538',
    '#F58D72',
    '#D83C39',
    '#BE539F',
    '#A57FBA',
    '#8954A0',
    '#225B8E',
    '#1881A4',
    '#1D89B1',
    '#78C5D5',
    '#CDDA3F',
    '#A56838',
    '#4C4244',
  ],
  worstColors: [
    '#f3bfcb',
    '#d795ad',
    '#8b6b80',
    '#eadba5',
    '#9dcfee',
    '#9fbad6',
    '#aaa5c4',
    '#85888d',
  ],
  stylingColor: ['#FDD274', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '아이유', imageURL: resultImg.celebrity.iu },
    { name: '수지', imageURL: resultImg.celebrity.suzy },
    { name: '이준호', imageURL: resultImg.celebrity.leejunho },
  ],
};

const springWarm: ColorResult = {
  name: '봄 웜',
  textColor: '#76A95A',
  gridColors: [
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
  description:
    '봄 컬러 중 색의 온도가 가장 중요한 봄 웜 컬러에요. 노랗고 따뜻한 느낌이 드는 전형적인 웜톤의 색들이 가장 잘 어울리고, 개나리색과 오렌지섹이 특히 귀엽고 발랄하게 잘 어울려요. 차가움이 느껴지는 쿨톤 색은 최대한 피하는게 좋고, 베이지한 색을 사용할 때는 흰색이나 검은색 대신 아이보리, 베이지, 브라운처럼 노란색이 섞인 색상을 사용하는 것이 좋아요.',
  bestColors: [
    '#F9E22D',
    '#FDD274',
    '#FECC2D',
    '#EBB433',
    '#D1C33B',
    '#C1D442',
    '#76A95A',
    '#71C051',
    '#209F54',
    '#74C7B8',
    '#9696CA',
    '#8954A0',
    '#D83B3B',
    '#E95644',
    '#F49139',
    '#F8AC69',
  ],
  worstColors: [
    '#ffffff',
    '#99d6ed',
    '#f5e29b',
    '#e896be',
    '#2485bd',
    '#3587cd',
    '#3876b8',
    '#e22c73',
  ],
  stylingColor: ['#76A95A', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '유인나', imageURL: resultImg.celebrity.yooinna },
    { name: '조이', imageURL: resultImg.celebrity.joy },
    { name: '뷔', imageURL: resultImg.celebrity.btsv },
  ],
};

const springLight: ColorResult = {
  name: '봄 라이트',
  textColor: '#FADC6C',
  gridColors: [
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
  description:
    '봄 컬러 중 명도가 가장 중요한 타입이에요. 고명도의 색이 특히 잘 어울려요. 봄 타입의 색들 중 고채도의 순색보다는 흰색이나 베이지가 섞인 파스텔톤 색상들이 잘 어울리며, 검은색이나 짙고 어두운 저명도의 색상은 되도록 피하는 것이 좋아요.',
  bestColors: [
    '#F8F7D9',
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
    '#F7A991',
    '#9696CA',
    '#4DC3CC',
    '#74C7B8',
  ],
  worstColors: [
    '#ffffff',
    '#1d9bd1',
    '#3686ce',
    '#b14c9f',
    '#d72f86',
    '#cd3247',
    '#603b86',
    '#159b80',
  ],
  stylingColor: ['#F8F7D9', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '윤아', imageURL: resultImg.celebrity.yoona },
    { name: '한지민', imageURL: resultImg.celebrity.hanjimin },
    { name: '이종석', imageURL: resultImg.celebrity.leejongsuk },
  ],
};

const summerLight: ColorResult = {
  name: '여름 라이트',
  textColor: '#9dcfee',
  gridColors: [
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
  description:
    '여름 컬러 중 명도가 가장 중요한 타입이에요. 고명도의 파스텔톤색이 잘 어울려요. 여름 타입 중 쩅하고 깨끗한 색들을 가장 잘 소화해요. 활발하면서 발랄한 봄의 기운이 섞여 있어 스포티하고 활동적인 느낌의 색과 스타일이 잘 어울려요. 고명도의 색이라면 고채도의 색도 잘 어울리고, 베이지와 같은 색을 사용해도 괜찮아요. 어두운 느낌이 드는 가을 타입의 색은 잘 어울리지 않아서 되도록 피하는 것이 좋아요.',
  bestColors: [
    '#9cd6ea',
    '#9dcfee',
    '#bacae3',
    '#eeb5cd',
    '#c7bfb6',
    '#d1b7aa',
    '#a69887',
    '#f27a9c',
    '#f284b4',
    '#ac98c9',
    '#999ac9',
    '#6c8cbb',
    '#85888d',
    '#9fbad6',
    '#74c7ec',
    '#55bd80',
  ],
  worstColors: [
    '#c1d542',
    '#d9ab3a',
    '#cc713a',
    '#dc5644',
    '#7d5544',
    '#616845',
    '#708644',
    '#654045',
  ],
  stylingColor: ['#bacae3', '#85888d'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '손예진', imageURL: resultImg.celebrity.sonyejin },
    { name: '장원영', imageURL: resultImg.celebrity.jangwonyoung },
    { name: '이도현', imageURL: resultImg.celebrity.leedohyun },
  ],
};

const summerCool: ColorResult = {
  name: '여름 쿨',
  textColor: '#1cace1',
  gridColors: [
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
  description:
    '여름 컬러 중 색의 온도가 가장 중요한 타입이에요. 파란기가 강한 전형적인 쿨톤 색이 가장 잘 어울리고, 차가운 쿨톤의 색이라면 겨울 타입의 색도 함꼐 사용할 수 있어요. 고명도의 색들이 우아하게 잘 어울리며, 전체적으로 산뜻하고 맑고 시원한 느낌을 잘 소화하는 단아함이 느껴지는 타입이에요. 쿨톤의 속성을 강하게 가진 전형적인 여름 타입이므로 노랗고 따뜻함이 느껴지는 웜톤의 색은 피하는 것이 좋아요.',
  bestColors: [
    '#f098c1',
    '#bdbec0',
    '#b370ac',
    '#a47daa',
    '#85888d',
    '#21a77b',
    '#1bb3bb',
    '#1cace1',
    '#307bbc',
    '#7c6ab0',
    '#8c559f',
    '#944291',
    '#af3463',
    '#c0344d',
    '#e7317e',
    '#ef68a5',
  ],
  worstColors: [
    '#fecc2d',
    '#b89e47',
    '#9f783b',
    '#996541',
    '#e85743',
    '#f39041',
    '#1d7b8f',
    '#226e47',
  ],
  stylingColor: ['#1cace1', '#85888d'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '태연', imageURL: resultImg.celebrity.taeyeon },
    { name: '전지현', imageURL: resultImg.celebrity.jeonjihyun },
    { name: '차은우', imageURL: resultImg.celebrity.chaeunwoo },
  ],
};

const summerMute: ColorResult = {
  name: '여름 뮤트',
  textColor: '#f9a4b8',
  gridColors: [
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
  description:
    '여름 컬러 중 색의 청탁이 가장 중요한 타입이에요. 여름 타입의 색 중에서 탁한 느낌의 드는 저채도의 색이 가장 잘 어울리며, 흐리고 뽀얀 탁한 느낌의 색이라면 윔톤인 가을 타입의 탁한 색도 함께 사용할 수 있어요. 비비드한 형광색을 사용할 경우 색이 얼굴보다 더 도드라져 보일 수 있으므로 피하는 것이 좋아요. 또한 너무 깨끗한 느낌이 드는 고채도의 순색이나 극단적인 고명도 또는 저명도의 색 역시 쨍하고 강한 느낌을 줘서 잘 어울리지는 않아요. 따라서 흰색 대신 아이보리나 라이트 그레이를, 검은색보다는 다크 그레이나 네이비를 대용으로 사용하면 훨씬 자연스러워요.',
  bestColors: [
    '#f3bfcb',
    '#f9a4b8',
    '#9dcfee',
    '#77c9b7',
    '#c5a6ab',
    '#d795ad',
    '#eadba5',
    '#85888d',
    '#a37cac',
    '#61778f',
    '#6588aa',
    '#7da2b7',
    '#9fbad6',
    '#74c7ec',
    '#aaa5c4',
    '#ac4877',
  ],
  worstColors: [
    '#FECC2D',
    '#FCB937',
    '#F58D72',
    '#DF3252',
    '#1881A4',
    '#1D89B1',
    '#CDDA3F',
    '#854399',
  ],
  stylingColor: ['#f3bfcb', '#85888d'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '김태리', imageURL: resultImg.celebrity.kimtaeri },
    { name: '김고은', imageURL: resultImg.celebrity.kimgoeun },
    { name: '진', imageURL: resultImg.celebrity.jin },
  ],
};

const autumnMute: ColorResult = {
  name: '가을 뮤트',
  textColor: '#a7ad87',
  gridColors: [
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
  description:
    '가을 컬러 중 색의 청탁이 가장 중요한 타입이에요. 부드럽고 뽀얀 느낌의 탁색이 잘 어울리며, 탁한색이라면 가을 타입의 색뿐만 아니라 봄 타입의 베이지 또는 아이보리가 섞인 부드러운 파스텔 톤이나 여름 타입의 탁한 인디 핑크, 탁한 연보라색등을 전부 잘 소화할 수 있어요. 가을 타입의 전형적인 느낌이 거의 느껴지지 않는 굉장히 청순하고 여리여리한 타입이에요. 색이 강한 고채도와 형광색, 주목성과 존재감이 느껴지는 노랑 계열이 많이 섞인 색은 얼굴보다 색이 튀게 느껴지므로 피하는 것이 좋아요. 매트한 느낌이 드는 무광이나 천연 소재에서 나오는 새미 매트의 반광까지는 괜찮지만, 광이 과한 소재나 재질은 자칫 인위적인 느낌이 강하게 들 수 있으니 조심해야 해요.',
  bestColors: [
    '#f5e2a5',
    '#e0d3ab',
    '#bcc697',
    '#a7ad87',
    '#a39d61',
    '#8c956b',
    '#987e65',
    '#de8a57',
    '#825746',
    '#59514c',
    '#537d81',
    '#598375',
    '#3a825d',
    '#72c8bb',
    '#b88558',
    '#cda459',
  ],
  worstColors: [
    '#ffffff',
    '#c5d7e7',
    '#eb96bf',
    '#2fa1dc',
    '#304f9f',
    '#364a9b',
    '#da2c8c',
    '#e22c74',
  ],
  stylingColor: ['#8c956b', '#59514c'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '츄', imageURL: resultImg.celebrity.chuu },
    { name: '제니', imageURL: resultImg.celebrity.jennie },
    { name: '서강준', imageURL: resultImg.celebrity.seokangjun },
  ],
};

const autumnWarm: ColorResult = {
  name: '가을 웜',
  textColor: '#f07838',
  gridColors: [
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
  description:
    '가을 컬러 중 색의 온도가 가장 중요한 타입이에요. 레드, 카키 그린, 베이지, 브라운 등 웜톤 색이 특히나 잘 어울리며, 웜톤 색이라면 봄 타입의 색상도 함께 사용할 수 있어요. 흰색이나 검은색처럼 차가움이 느껴지는 색보다는 아이보리, 베이지, 브라운처럼 따뜻한 느낌의 색을 사용하는 것을 추천드리며, 개나리색과 레드 오렌지색 등 봄 타입의 대표색을 포인트 용도로 사용하면 좋아요. 차가운 느낌이 느껴지는 쿨톤의 색들은 어울리지 않으니 주의하세요.',
  bestColors: [
    '#fecc2d',
    '#b6ac3d',
    '#a29c60',
    '#919a49',
    '#678247',
    '#7c7660',
    '#a66838',
    '#996541',
    '#9c5238',
    '#f07838',
    '#f39041',
    '#d39c42',
    '#6fc8ba',
    '#34bcb1',
    '#219f54',
    '#1d7b8f',
  ],
  worstColors: [
    '#f098c1',
    '#bdbec0',
    '#b370ac',
    '#a47daa',
    '#85888d',
    '#1bb3bb',
    '#1cace1',
    '#e7317e',
  ],
  stylingColor: ['#9c5238', '#59514c'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    {
      name: '신세경',
      imageURL: resultImg.celebrity.shinsaekyeong,
    },
    { name: '한예슬', imageURL: resultImg.celebrity.hanyeseul },
    { name: '박보검', imageURL: resultImg.celebrity.parkbogum },
  ],
};

const autumnDeep: ColorResult = {
  name: '가을 딥',
  textColor: '#624f3e',
  gridColors: [
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
  description:
    '가을 컬러 중 색의 명도가 가장 중요한 타입이에요. 채도에 상관없이 저명도의 색들이 다 잘 어울리며, 저명도의 색이라면 쿨톤인 겨울 타입의 색도 함께 사용할 수 있어요. 웜톤에 속하지만 고채도의 노란기가 강하게 느껴지는 색이나 고명도의 색이 잘 어울리지 않기 때문에, 노랑 계열에서 쓸 수 있는 색상들이 매우 한정적이에요. 또한 빨강에 흰색이 섞인 연핑크나 형광색도 되도록 피하는 것이 좋아요. 노랑보다는 초록, 핑크보다는 레드가 좀 더 무게감 있게 잘 어울려요.',
  bestColors: [
    '#c1d542',
    '#d9ab3a',
    '#cc713a',
    '#bb5b3b',
    '#dc5644',
    '#7d5544',
    '#624f3e',
    '#616845',
    '#708644',
    '#219f54',
    '#1ea1af',
    '#1d89b1',
    '#8a315f',
    '#7e3639',
    '#603b89',
    '#9f783b',
  ],
  worstColors: [
    '#c6dce9',
    '#9cd6ea',
    '#eeb5cd',
    '#d49fc9',
    '#c7bfb6',
    '#f284b4',
    '#9e66a9',
    '#61778f',
  ],
  stylingColor: ['#624f3e', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '이효리', imageURL: resultImg.celebrity.leehyolee },
    { name: '김유정', imageURL: resultImg.celebrity.kimyoujung },
    { name: '공유', imageURL: resultImg.celebrity.gongyoo },
  ],
};

const winterDeep: ColorResult = {
  name: '겨울 딥',
  textColor: '#d72f86',
  gridColors: [
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
  description:
    '겨울 컬러 중 색의 명도가 가장 중요한 타입이에요. 저명도의 색이 특히나 잘 어울리기 떄문에 명도만 잘 맞춰준다면 웜톤인 가을 타입의 색도 함께 사용할 수 있어요. 겨울 타입의 태표 색상인 핫 핑크나 레몬색처럼 형광 색상들은 인위적이고 얼굴보다 튀어보이는 느낌이 들기 때문에 메인 컬러로 사용하기 어려워요. 진분홍색이나 체리색처럼 진한색 또는 고채도이면서 저명도인 색을 더 잘 소화해요. 모든 색을 어두운 색으로만 맞춰도 잘 어울리지만, 대비감이 중요한 타입이라 유광이나 고채도 또는 고명도의 색을 포인트 용으로 사용하는 것이 좋아요.',
  bestColors: [
    '#ffffff',
    '#bbc4e2',
    '#1d9bd1',
    '#3686ce',
    '#1683a1',
    '#246385',
    '#87429c',
    '#8955a0',
    '#d72f86',
    '#e12c75',
    '#cd3247',
    '#159b80',
    '#1b5f51',
    '#364179',
    '#343969',
    '#3a322d',
  ],
  worstColors: [
    '#EEEB9E',
    '#F4E1A5',
    '#D7E59E',
    '#D0DEBC',
    '#A6DBEB',
    '#9CCBEB',
    '#C3B4D7',
    '#CDA8D0',
  ],
  stylingColor: ['#ffffff', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '이하늬', imageURL: resultImg.celebrity.leehanee },
    { name: '지수', imageURL: resultImg.celebrity.jisoo },
    { name: '차승원', imageURL: resultImg.celebrity.chaseungwon },
  ],
};

const winterCool: ColorResult = {
  name: '겨울 쿨',
  textColor: '#99d6ed',
  gridColors: [
    '#ffffff',
    '#f5e29b',
    '#e896be',
    '#99d6ed',
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
  description:
    '겨울 컬러 중 색의 온도가 가장 중요한 타입이에요. 차가운 느낌의 쿨톤 색상이 잘 어울리므로 쿨톤의 색을 사용한다면 청순한 여름 타입의 색도 잘 소화할 수 있어요. 어중간하게 밝거나 어두운 색보다는 흰색, 검은색, 코발트 블루, 핫 핑크, 체리 레드 등 확실히 밝거나 어두운 색이 잘 어울려요. 무채색만 사용해도 시크하고 도시적인 느낌을 잘 살릴 수 있으며, 쨍한 고채도의 존재감이 강렬한 색들을 대비감 있게 사용해 깔끔하고 세련된 이미지를 연출하는 것도 좋아요. 웜톤 색상이 잘 어울리지 않는 타입이니 노란기가 강하고 따뜻함이 느껴지는 색상은 되도록 피해주세요.',
  bestColors: [
    '#ffffff',
    '#99d6ed',
    '#5fc9e5',
    '#a0b7d3',
    '#2ea2dc',
    '#189c7d',
    '#1db2bb',
    '#7f888b',
    '#2485bd',
    '#3876b8',
    '#3260ae',
    '#8955a0',
    '#b44c9d',
    '#d93086',
    '#e22c73',
    '#2d2e31',
  ],
  worstColors: [
    '#fecc2d',
    '#b6ac3d',
    '#678247',
    '#7c7660',
    '#996541',
    '#9c5238',
    '#e85743',
    '#f07838',
  ],
  stylingColor: ['#e896be', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '현아', imageURL: resultImg.celebrity.hyuna },
    { name: '카리나', imageURL: resultImg.celebrity.karina },
    { name: '김수현', imageURL: resultImg.celebrity.kimsoohyun },
  ],
};

const winterBright: ColorResult = {
  name: '겨울 브라이트',
  textColor: '#b54c9e',
  gridColors: [
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
  description:
    '겨울 컬러 중 청탁이 가장 중요한 타입이에요. 쨍한 느낌이 드는 고체도의 순색이 특히나 잘 어울려요. 깨끗하고 맑은 청색으로 맞춰준다면 웜톤인 봄 타입의 색도 함께 사용할 수 있어요. 대비감이 중요한 겨울 타입이라 깨끗하고 맑은 느낌을 주는 유광의 아이템을 활용해 대비감을 표현하면 아주 좋아요. 쨍한 고체도가 잘 어울리는 봄 타입과 겨울 타입이 섞여 있어 다른 타입에게는 과하게 느껴질 수도 있는 형광색의 아이템도 잘 소화해요. 극단적으로 차이가 나는 색들을 함께 사용해 강한 포인트를 주는 것이 좋아요. 대비감 없이 비슷한 느낌의 색들만 배치하면 겨울 브라이트 컬러가 가진 고유의 분위기를 해칠 수 있으니 꼭 명도, 색, 광 중에 한 종류라도 대비감을 강하게 사용해주세요. 여러 가지 색들이 섞여 흐릿하거나 뿌연 느낌을 주는 카키 그린, 베이지, 회색솨 같은 탁색들은 피하는 것이 좋아요.',
  bestColors: [
    '#ffffff',
    '#c5d7e7',
    '#eb96bf',
    '#2fa1dc',
    '#2399cf',
    '#188ab4',
    '#304f9f',
    '#364a9b',
    '#a8366c',
    '#da2c8c',
    '#e22c74',
    '#cb3447',
    '#b54c9e',
    '#8d53a0',
    '#215d53',
    '#2d2e31',
  ],
  worstColors: [
    '#a39d61',
    '#987e65',
    '#de8a57',
    '#c77567',
    '#59514c',
    '#537d81',
    '#ceaa8c',
    '#f9ad6a',
  ],
  stylingColor: ['#8d53a0', '#333333'],
  stylingURL: resultImg.styling.stylingSpringBright,
  celebrities: [
    { name: '선미', imageURL: resultImg.celebrity.sunmi },
    { name: '청하', imageURL: resultImg.celebrity.chungha },
    { name: '강동원', imageURL: resultImg.celebrity.gangdongwon },
  ],
};

const resultColorData: Record<ColorTone, ColorResult> = {
  springBright: springBright,
  springWarm: springWarm,
  springLight: springLight,
  summerLight: summerLight,
  summerCool: summerCool,
  summerMute: summerMute,
  autumnMute: autumnMute,
  autumnWarm: autumnWarm,
  autumnDeep: autumnDeep,
  winterDeep: winterDeep,
  winterCool: winterCool,
  winterBright: winterBright,
};

export default resultColorData;
