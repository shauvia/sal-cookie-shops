'use strict';

function Store(location, maxCustomNum, minCustomNum, averageCookieSale){
  this.location = location;
  this.maxCustomNum = maxCustomNum;
  this.minCustomNum = minCustomNum;
  this.averageCookieSale = averageCookieSale;
  this.dailyCookiesPerHour = [];
  Store.allStores.push(this);

  this.cookiesPerHour = function() {
    var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
    return Math.floor(this.averageCookieSale * random);
  };
  this.populateData = function(){
    for (var i = 0; i < 15 ; i++) {
      this.dailyCookiesPerHour.push(this.cookiesPerHour());
    }
  };
  this.populateData();
}

Store.allStores = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstStore = new Store('1st and Pike', 65, 23, 6.3);
var secondStore = new Store('SeaTac Airport', 3, 24, 1.2);
var thirdStore = new Store('Seattle Center', 11, 38, 3.7);
var fourthStore = new Store('Capitol Hill', 20, 38, 2.3);
var fifthStore = new Store('Alki', 2, 16, 4.6);


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


// this loop goes over the array Store.allStores that has all instances of stores and creates a new heading and lists of sold cookies per hour for every store
for (var i=0; i<Store.allStores.length;i++){
  createsNewHeading(Store.allStores[i]);
  printStore(Store.allStores[i]);
}


// / Create a constructor function
// min, max, avg, empty array for hourly sales,
// method to populate the sales array

// create stores with constructor function. using the data from yesterday.
// make sure it works with the lists we did yesterday.

// change from lists to tables.
// us JavaScript to put an empty <table> element inside the <article> element on the sales.html
// create a header row for table: first column storename, each additioanal column for each store hour.
// create rows for stores
//  for the first store: storename, then each hour sales
// use this approach inside of a loop so it does all the stores.
// add final column for total per store
// add final row (at the bottom) for total per hour
// write code that computes the total per hour
// write code to display these computed values.


// for (i = 0; i<Store.allStores.length; i++) {
//   console.log(Store.allStores[i]);
// }

// fucntion creates the tble row and ads the hour to header table row;
function addsHoursToHeader(){
  var getHeader = document.getElementById('header');
  var headerRow = document.createElement('tr');
  getHeader.appendChild(headerRow);
  var headerData = document.createElement('td');
  headerData.textContent = 'costam';
  headerRow.appendChild(headerData);
  var hour = 6;
  var hourPm = 0;
  for (var i=1; i<=15; i++) {
    headerData = document.createElement('td');
    if (hour > 12){
      hourPm += 1;
      headerData.textContent = hourPm + ' pm';
    } else{
      headerData.textContent = + hour + ' am' ;
    }
    headerRow.appendChild(headerData);
    hour += 1;
  }
  headerData = document.createElement('td');
  headerData.textContent = 'Total per store';
  headerRow.appendChild(headerData);
}
addsHoursToHeader();

function addsStoretoTableRow(store){
  var getTable_body = document.getElementById('table_body');
  var tableRow = document.createElement('tr');
  getTable_body.appendChild(tableRow);
  var rowData = document.createElement('td');
  rowData.textContent = store.location;
  tableRow.appendChild(rowData);
  for (var i = 0; i<store.dailyCookiesPerHour.length; i++){
    rowData = document.createElement('td');
    rowData.textContent = store.dailyCookiesPerHour[i];
    tableRow.appendChild(rowData);
  }
  var total = CookiesTotal(store.dailyCookiesPerHour);
  rowData = document.createElement('td');
  rowData.textContent = total;
  tableRow.appendChild(rowData);
}

function addsAllStoresToTable(){
  for (var i = 0; i < Store.allStores.length; i++){
    addsStoretoTableRow(Store.allStores[i]);
  }
}

addsAllStoresToTable();

// // console.log(firstStore);
// console.log(Store.allStores);
// function getRandomIntInclusive(max, min) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;


// function createsArrayOfSoldCoockies(store){
//   for (var i = 0; i < 15 ; i++) {
//     store.dailyCookiesPerHour.push(store.cookiesPerHour());
//   }
// }


// var firstStore = {
//   location: '1st and Pike',
//   maxCustomNum: 65,
//   minCustomNum: 23,
//   averageCookieSale: 6.3,
//   cookiesPerHour: function() {
//     // console.log(this.averageCookieSale);
//     var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
//     // console.log(random);
//     return Math.floor(this.averageCookieSale * random);
//   },
//   dailyCookiesPerHour: [],
// };



// var secondStore = {
//   location: 'SeaTac Airport',
//   maxCustomNum: 3,
//   minCustomNum: 24,
//   averageCookieSale: 1.2,
//   cookiesPerHour: function() {
//     // console.log(this.averageCookieSale);
//     var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
//     // console.log(random);
//     return this.averageCookieSale * random;
//   },
//   dailyCookiesPerHour: [],
// };

// var thirdStore = {
//   location: 'Seattle Center',
//   maxCustomNum: 11,
//   minCustomNum: 38,
//   averageCookieSale: 3.7,
//   cookiesPerHour: function() {
//     // console.log(this.averageCookieSale);
//     var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
//     // console.log(random);
//     return this.averageCookieSale * random;
//   },
//   dailyCookiesPerHour: [],
// };

// var fourthStore = {
//   location:'Capitol Hill',
//   maxCustomNum: 20,
//   minCustomNum: 38,
//   averageCookieSale: 2.3,
//   cookiesPerHour: function() {
//     // console.log(this.averageCookieSale);
//     var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
//     // console.log(random);
//     return this.averageCookieSale * random;
//   },
//   dailyCookiesPerHour: [],
// };

// var fifthStore = {
//   location: 'Alki',
//   maxCustomNum: 2,
//   minCustomNum: 16,
//   averageCookieSale: 4.6,
//   cookiesPerHour: function() {
//     // console.log(this.averageCookieSale);
//     var random = getRandomIntInclusive(this.maxCustomNum, this.minCustomNum);
//     // console.log(random);
//     return this.averageCookieSale * random;
//   },
//   dailyCookiesPerHour: [],
// };

// console.log(fifthStore);
// createsArrayOfSoldCoockies(firstStore);

// createsArrayOfSoldCoockies(secondStore);

// createsArrayOfSoldCoockies(thirdStore);

// createsArrayOfSoldCoockies(fourthStore);

// createsArrayOfSoldCoockies(fifthStore);



// function createsNewHeading (store){
//   var storeElement = document.getElementById('stores');
//   var newHeading = document.createElement('h1');
//   newHeading.textContent = store.location;
//   storeElement.appendChild(newHeading);
// }


// function printStore(store) {
//   var storeElement = document.getElementById('stores');
//   var newlist = document.createElement('ul');
//   storeElement.appendChild(newlist);
//   var hour = 6;
//   var hourPm = 0;
//   for (var j = 0; j < store.dailyCookiesPerHour.length; j++) {
//     var newListItem = document.createElement('li');
//     if (hour > 12){
//       hourPm += 1;
//       newListItem.textContent = hourPm + ' pm: ' + store.dailyCookiesPerHour[j] + ' cookies';
//     } else{
//       newListItem.textContent = + hour + ' am: ' + store.dailyCookiesPerHour[j] + ' cookies';
//     }
//     newlist.appendChild(newListItem);
//     hour += 1;
//   }
//   newListItem = document.createElement('li');
//   newListItem.textContent = 'Total ' + CookiesTotal(store.dailyCookiesPerHour) + ' cookies';
//   newlist.appendChild(newListItem);
// }

// // argument is going to be ex. fififthStore.dailyCookiesPerHour

// function CookiesTotal(list){
//   var sum = 0;
//   for (var i = 0; i < list.length; i++){
//     sum += list[i];
//   }
//   return sum;
// }



// // this loop goes over the array Store.allStores that has all instances of stores and creates a new heading and lists of sold cookies per hour for every store
// for (var i=0; i<Store.allStores.length;i++){
//   createsNewHeading(Store.allStores[i]);
//   printStore(Store.allStores[i]);
// }
