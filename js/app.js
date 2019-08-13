'use strict';

var firstStore = {
  location: '1st and Pike',
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
};

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
};

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
};

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
};

var title = document.getElementById('pageName');
title.textContent = firstStore.location;

// Find the UL
var elementList = document.getElementById('list');



//  iterate over the dailyCookiesPerHour and add the hour
//  Create an LI
// Set the textContent to the name of the child
// Append LI as a Child to UL
var hour = 6;
var hourPm = 0;
for (var j = 0; j < firstStore.dailyCookiesPerHour.length; j++) {
  var newListItem = document.createElement('li');
  if (hour > 12){
    hourPm += 1;
    newListItem.textContent = 'Sold cookies at: ' + hourPm + ' pm: ' +  firstStore.dailyCookiesPerHour[j];
  } else{
    newListItem.textContent = 'Sold cookies at: ' + hour + ' am: ' +  firstStore.dailyCookiesPerHour[j];
  }
  elementList.appendChild(newListItem);
  hour += 1;
  
}
