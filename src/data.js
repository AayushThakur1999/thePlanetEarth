import AmericanAirlines from './images/american-airlines-logo.png';
import Duolingo from './images/duolingo-logo.png';
import Redragon from './images/redragon-logo.png';
import SiriusXM from './images/siriusxm-logo.png';
import SeaOfThieves from './images/sea-of-thieves-logo.png';

export const navbarItems = [
  {
    id: 1, 
    href: '#header',
    title: 'HOME'
  },
  {
    id:2,
    href:'#sec-1',
    title:'ART'
  },
  {
    id:3,
    href:'#sec-2',
    title:'PARTNERS'
  },
  {
    id:4,
    href:'#contact-sec',
    title:'CONTACT US'
  },
];

export const arts = [
  {
    id: 10,
    alt: 'Temple faced towards Mount Fuji',
    src: 'https://images.pexels.com/photos/6380624/pexels-photo-6380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#234'
  },
  {
    id: 20,
    alt: 'Cherry Blossom',
    src: 'https://images.pexels.com/photos/356269/pexels-photo-356269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#352'
  },
  {
    id: 30,
    alt: 'Forest Grassland',
    src: 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#553'
  },
  {
    id: 40,
    alt: 'A Japanese Temple',
    src: 'https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#1355'
  },
  {
    id: 50,
    alt: 'Lush Green Forest Fields',
    src: 'https://images.pexels.com/photos/1679551/pexels-photo-1679551.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    figCaption: '#367'
  },
  {
    id: 60,
    alt: 'Houses at the base of a Mountain',
    src: 'https://images.pexels.com/photos/2793730/pexels-photo-2793730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#662'
  },
  {
    id: 70,
    alt: 'A Japanese Woman',
    src: 'https://images.pexels.com/photos/1558336/pexels-photo-1558336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#2411'
  },
  {
    id: 80,
    alt: 'House with a cherry blossom tree',
    src: 'https://images.pexels.com/photos/7928137/pexels-photo-7928137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#746'
  },
  {
    id: 90,
    alt: 'Barren Mountain',
    src: 'https://images.pexels.com/photos/1243440/pexels-photo-1243440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#1466'
  },
  {
    id: 100,
    alt: 'Ganpati Visarjan',
    src: 'https://images.pexels.com/photos/1707402/pexels-photo-1707402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    figCaption: '#553'
  }
];

export const partners = [
  {
    id: 101,
    src: AmericanAirlines,
    alt: 'American Airlines',
    figCaption: 'American Airlines'
  },
  {
    id: 201,
    src: SeaOfThieves,
    alt: 'Sea of Thieves',
    figCaption: 'Sea of Thieves'
  },
  {
    id: 301,
    src: Redragon,
    alt: 'Redragon',
    figCaption: 'Redragon'
  },
  {
    id: 401,
    src: SiriusXM,
    alt: 'SiriusXM',
    figCaption: 'SiriusXM'
  },
  {
    id: 501,
    src: Duolingo,
    alt: 'Duolingo',
    figCaption: 'Duolingo'
  },
];
