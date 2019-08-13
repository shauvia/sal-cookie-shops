'use strict';

function createsArrayOfSoldCoockies(store){
  for (var i = 0; i < 15 ; i++) {
    store.dailyCookiesPerHour.push(store.cookiesPerHour());
  }
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

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
};



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


createsArrayOfSoldCoockies(firstStore);

createsArrayOfSoldCoockies(secondStore);

createsArrayOfSoldCoockies(thirdStore);

createsArrayOfSoldCoockies(fourthStore);

createsArrayOfSoldCoockies(fifthStore);



function createsNewHeading (store){ 
  var storeElement = document.getElementById('stores');
  var newHeading = document.createElement('h1');
  newHeading.textContent = store.location;
  storeElement.appendChild(newHeading);
}


function printStore(store) {
  var storeElement = document.getElementById('stores');
  var newlist = document.createElement('ul');
  storeElement.appendChild(newlist);
  var hour = 6;
  var hourPm = 0;
  for (var j = 0; j < store.dailyCookiesPerHour.length; j++) {
    var newListItem = document.createElement('li');
    if (hour > 12){
      hourPm += 1;
      newListItem.textContent = hourPm + ' pm: ' + store.dailyCookiesPerHour[j] + ' cookies';
    } else{
      newListItem.textContent = + hour + ' am: ' + store.dailyCookiesPerHour[j] + ' cookies';
    }
    newlist.appendChild(newListItem);
    hour += 1;
  }
  newListItem = document.createElement('li');
  newListItem.textContent = 'Total ' + CookiesTotal(store.dailyCookiesPerHour) + ' cookies';
  newlist.appendChild(newListItem);
}

// argument is going to be ex. fififthStore.dailyCookiesPerHour

function CookiesTotal(list){
  var sum = 0;
  for (var i = 0; i < list.length; i++){
    sum += list[i];
  }
  return sum;
}

// CookiesTotal(policz);



createsNewHeading(firstStore);
printStore(firstStore);

createsNewHeading(secondStore);
printStore(secondStore);

createsNewHeading(thirdStore);
printStore(thirdStore);

createsNewHeading(fourthStore);
printStore(fourthStore);

createsNewHeading(fifthStore);
printStore(fifthStore);
