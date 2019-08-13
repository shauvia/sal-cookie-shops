'use strict';

var firstStore = {
  location: 'FirstAndPike',
  maxCustomNum: 65,
  minCustomNum: 23,
  averageCookieSale: 6.3,
  cookiesPerHour: function() {
    // console.log(this.averageCookieSale);
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    // console.log(random);
    return this.averageCookieSale * random;
  },
  dailyCookiesPerHour: [],
}


for (var i = 0; i < 15 ; i++) {
  console.log(firstStore.dailyCookiesPerHour);
  firstStore.dailyCookiesPerHour.push(firstStore.cookiesPerHour());
}
console.log( firstStore.dailyCookiesPerHour);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var secondStore = {
  location: 'SeaTac Airport',
  maxCustomNum: 3,
  minCustomNum: 24,
  averageCookieSale: 1.2,
  cookiesPerHour: function() {
    // console.log(this.averageCookieSale);
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    // console.log(random);
    return this.averageCookieSale * random;
  },
  dailyCookiesPerHour: [],
}

var thirdStore = {
  location: 'Seattle Center',
  maxCustomNum: 11,
  minCustomNum: 38,
  averageCookieSale: 3.7,
  cookiesPerHour: function() {
    // console.log(this.averageCookieSale);
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    // console.log(random);
    return this.averageCookieSale * random;
  },
  dailyCookiesPerHour: [],
}

var fourthStore = {
  location:'Capitol Hill',
  maxCustomNum: 20,
  minCustomNum: 38,
  averageCookieSale: 2.3,
  cookiesPerHour: function() {
    // console.log(this.averageCookieSale);
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    // console.log(random);
    return this.averageCookieSale * random;
  },
  dailyCookiesPerHour: [],
}

var fifthStore = {
  location: 'Alki',
  maxCustomNum: 2,
  minCustomNum: 16,
  averageCookieSale: 4.6,
  cookiesPerHour: function() {
    // console.log(this.averageCookieSale);
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    // console.log(random);
    return this.averageCookieSale * random;
  },
  dailyCookiesPerHour: [],
}

var firstStore = {
  location: 'Alki',
  maxCustomNum: 65,
  minCustomNum: 23,
  averageCookieSale: 6.3,
  cookiesPerHour: function() {
    // console.log(this.averageCookieSale);
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    // console.log(random);
    return this.averageCookieSale * random;
  },
  dailyCookiesPerHour: [],
}

