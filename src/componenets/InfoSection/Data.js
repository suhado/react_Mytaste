import Icon1 from '../../images/해지곳.jpeg';
import Icon2 from '../../images/천파랑.jpeg';
import Icon3 from '../../images/거짓의 조금.jpeg';
import Icon4 from '../../images/살아간다.jpeg';
import Icon5 from '../../images/bookoflove.jpeg';
import Icon6 from '../../images/hindenburg lover.jpeg';
import Icon7 from '../../images/book.svg';
import Icon8 from '../../images/music.svg';
import Icon9 from '../../images/photo.svg';

export const homeObjOne = {
  to: 'you',
  id: 'phrase',
  lightBg: false,
  lightText: true,
  ligtTextDesc: true,
  topLine: 'PHRASE SECTION',
  headline: '간직하고 사는 문장들',
  description: 'Reading steadily increases my expressive power, and as a result, my world can gradually expand.',
  buttonLabel: 'How about you?',
  imgStart: false,
  img1: Icon1,
  img2: Icon2,
  img3: Icon3,
  alt: 'Books',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  to: 'you',
  id: 'music',
  lightBg: true,
  lightText: false,
  ligtTextDesc: false,
  topLine: 'MUSIC SECTION',
  headline: '좋아하는 목소리들',
  description: 'Some voices make me live. I think the voices that make me live are usually friendly voices.',
  buttonLabel: 'How about you?',
  imgStart: true,
  img1: Icon4,
  img2: Icon5,
  img3: Icon6,
  alt: 'Musics',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  to: 'home',
  id: 'you',
  lightBg: true,
  lightText: false,
  ligtTextDesc: false,
  topLine: 'HOW ABOUT YOU',
  headline: '당신의 취향이 궁금해요',
  description: "Taste is the direction or tendency in which you want to do it. What is your preference?",
  buttonLabel: 'Go to Main',
  imgStart: false,
  img1: Icon7,
  img2: Icon8,
  img3: Icon9,
  alt: 'You',
  dark: false,
  primary: false,
  darkText: true
};