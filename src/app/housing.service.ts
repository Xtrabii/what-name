import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList : Housinglocation[] = [
    {
      id: 0,
      name: 'SALA Phuket Resort and Spa',
      place: '333 Moo 3, Maikhao, Thalang',
      city: 'Phuket',
      photo: 
      // Main Pic
       './assets/sala0-1.jpg',
      photos : [
        // MorePic1
        './assets/sala0-2.jpg', 
        // MorePic2
        './assets/sala0-3.jpg',
        // MorePic3
        './assets/sala0-4.jpg',
        // MorePic4
        './assets/sala0-5.jpg',
        // MorePic5
        './assets/sala0-6.jpeg',
        // MorePic6
        './assets/sala0-7.jpg',
      ],
      availableUnits: 13,
      price: 6700,
      rate: '4.6 ⭐⭐⭐⭐',
      type: 'รีสอร์ท',
      map: 'https://maps.app.goo.gl/DxpQGACEdzGHL3uR7',
    },
    {
      id: 1,
      name: 'Twinpalms Phuket',
      place: '106/46 Moo 3, Surin Beach Road, Choeng Thale, Thalang',
      city: 'Phuket',
      photo: 
      // Main Pic
       './assets/twin1-1.jpg',
      photos : [
        // MorePic1
        './assets/twin1-2.jpg', 
        // MorePic2
        './assets/twin1-3.jpg',
        // MorePic3
        './assets/twin1-4.jpg',
        // MorePic4
        './assets/twin1-5.jpg',
        // MorePic5
        './assets/twin1-6.jpeg',
        // MorePic6
        './assets/twin1-7.jpg',
      ],
      availableUnits: 28,
      price: 5200,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/A5rQsXPFYrAq5Hmp8',
    },
    {
      id: 2,
      name: 'COMO Point Yamu',
      place: '225 Moo 7, Talang, Paklok',
      city: 'Phuket',
      photo: 
      // Main Pic
       './assets/como2-1.jpg',
      photos : [
        // MorePic1
        '/assets/como2-2.jpg', 
        // MorePic2
        './assets/como2-3.jpeg',
        // MorePic3
        './assets/como2-4.jpeg',
        // MorePic4
        '/assets/como2-5.jpg',
        // MorePic5
        './assets/como2-6.jpeg',
        // MorePic6
        '/assets/como2-7.jpg',
      ],
      availableUnits: 1,
      price: 9500,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'รีสอร์ท',
      map: 'https://maps.app.goo.gl/k6JmzmdNmU4N7UKA9',
    },
    {
      id: 3,
      name: 'The Siam',
      place: '3/2 Thanon Khao, Vichai Prasit Road, Dusit',
      city: 'Bangkok',
      photo: 
      // Main Pic
       './assets/siam3-1.jpg',
      photos : [
        // MorePic1
        './assets/siam3-2.jpg', 
        // MorePic2
        './assets/siam3-3.jpg',
        // MorePic3
        './assets/siam3-4.jpg',
        // MorePic4
        './assets/siam3-5.jpg',
        // MorePic5
        './assets/siam3-6.jpg',
        // MorePic6
        './assets/siam3-7.jpg',
      ],
      availableUnits: 9,
      price: 14000,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/MCKyQZp2UhGMdJsUA',
    },
    {
      id: 4,
      name: 'Anantara Riverside Bangkok Resort',
      place: '257/1-3 Charoen Nakhon Road, Thonburi',
      city: 'Bangkok',
      photo: 
      // Main Pic
       './assets/anan4-1.jpg',
      photos : [
        // MorePic1
        './assets/anan4-2.jpg', 
        // MorePic2
        './assets/anan4-3.jpg',
        // MorePic3
        './assets/anan4-4.webp',
        // MorePic4
        './assets/anan4-5.jpg',
        // MorePic5
        './assets/anan4-6.webp',
        // MorePic6
        './assets/anan4-7.jpg',
      ],
      availableUnits: 15,
      price: 5200,
      rate: '5 ⭐⭐⭐⭐⭐',
      type: 'รีสอร์ท',
      map: 'https://maps.app.goo.gl/nUKEYdYoRopEMMrh8',
    },
    {
      id: 5,
      name: 'InterContinental Hua Hin Resort',
      place: '25/2 Petchkasem Road',
      city: 'Hua Hin',
      photo: 
      // Main Pic
       './assets/inter5-1.webp',
      photos : [
        // MorePic1
        './assets/inter5-2.webp', 
        // MorePic2
        './assets/inter5-3.jpg',
        // MorePic3
        './assets/inter5-4.webp',
        // MorePic4
        './assets/inter5-5.webp',
        // MorePic5
        './assets/inter5-6.jpg',
        // MorePic6
        './assets/inter5-7.jpg',
      ],
      availableUnits: 21,
      price: 6500,
      rate: '4.6 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/Vq4fN4UHoy2t1XEA9',
    },
    {
      id: 6,
      name: 'Four Seasons Resort Chiang Mai',
      place: '502 Moo 1, Hang Dong',
      city: 'Chiang Mai',
      photo: 
      // Main Pic
       './assets/four6-1.jpg',
      photos : [
        // MorePic1
        './assets/four6-2.jpg', 
        // MorePic2
        './assets/four6-3.jpg',
        // MorePic3
        './assets/four6-4.jpg',
        // MorePic4
        './assets/four6-5.jpg',
        // MorePic5
        './assets/four6-6.jpg',
        // MorePic6
        './assets/four6-7.jpg',
      ],
      availableUnits: 5,
      price: 9500,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/3tyiZ5mrhxbNJeaVA',
    },
    {
      id: 7,
      name: 'The Peninsula Bangkok',
      place: '333 Charoennakorn Road, Khlong Ton Sai, Thonburi',
      city: 'Bangkok',
      photo: 
      // Main Pic
       './assets/pen7-1.jpg',
      photos : [
        // MorePic1
        './assets/pen7-2.jpg', 
        // MorePic2
        './assets/pen7-3.jpg',
        // MorePic3
        './assets/pen7-4.jpg',
        // MorePic4
        './assets/pen7-5.jpg',
        // MorePic5
        './assets/pen7-6.jpg',
        // MorePic6
        './assets/pen7-7.jpg',
      ],
      availableUnits: 39,
      price: 17000,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/XpSYDFLyRzw6FRMZ6',
    },
    {
      id: 8,
      name: 'Six Senses Yao Noi',
      place: '56 Moo 5, Ko Yao Noi',
      city: 'Phang Nga',
      photo: 
      // Main Pic
       './assets/six8-1.jpg',
      photos : [
        // MorePic1
        './assets/six8-2.jpg', 
        // MorePic2
        './assets/six8-3.jpg',
        // MorePic3
        './assets/six8-4.jpg',
        // MorePic4
        './assets/six8-5.jpg',
        // MorePic5
        './assets/six8-6.jpg',
        // MorePic6
        './assets/six8-7.jpg',
      ],
      availableUnits: 49,
      price: 17000,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/MgSg7ELQHq53kEf86',
    },
    {
      id: 9,
      name: 'Mandarin Oriental, Bangkok',
      place: '48 Oriental Avenue',
      city: 'Bangkok',
      photo: 
      // Main Pic
       './assets/man9-1.jpg',
      photos : [
        // MorePic1
        './assets/man9-2.jpg', 
        // MorePic2
        './assets/man9-3.jpg',
        // MorePic3
        './assets/man9-4.jpg',
        // MorePic4
        './assets/man9-5.jpg',
        // MorePic5
        './assets/man9-6.jpg',
        // MorePic6
        './assets/man9-7.jpg',
      ],
      availableUnits: 25,
      price: 17000,
      rate: '4.7 ⭐⭐⭐⭐',
      type: 'โรงแรม',
      map: 'https://maps.app.goo.gl/SuK6Ae1yWjFzTZwr5',
    }
  ];
  constructor() { }

  getAllHousingLocations() : Housinglocation[] {
    return this.housingLocationList
  }

  getHousingLocationById(id : Number) : Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
