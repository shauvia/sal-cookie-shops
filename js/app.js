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

//this function is called in cookiesPerHour and provides random number of customers
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

new Store('1st and Pike', 65, 23, 6.3); //firstStore
new Store('SeaTac Airport', 3, 24, 1.2); //secondStore
new Store('Seattle Center', 11, 38, 3.7); // thirdStore
new Store('Capitol Hill', 20, 38, 2.3); // fourthStore
new Store('Alki', 2, 16, 4.6); //fifthStore




// argument is going to be ex. fififthStore.dailyCookiesPerHour

function cookiesTotal(list){
  var sum = 0;
  for (var i = 0; i < list.length; i++){
    sum += list[i];
  }
  return sum;
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



// function creates the table row and ads the hours to header table row and Total per store at the end; created horizontal table header;
function addsHoursToHeader(){
  var getHeader = document.getElementById('header');
  var headerRow = document.createElement('tr');
  getHeader.appendChild(headerRow);
  var headerData = document.createElement('th');
  headerRow.appendChild(headerData);
  var hour = 6;
  var hourPm = 0;
  for (var i=1; i<=15; i++) {
    headerData = document.createElement('th');
    if (hour > 12){
      hourPm += 1;
      headerData.textContent = hourPm + ' pm';
    } else{
      headerData.textContent = + hour + ' am' ;
    }
    headerRow.appendChild(headerData);
    hour += 1;
  }
  headerData = document.createElement('th');
  headerData.textContent = 'Total per store';
  headerRow.appendChild(headerData);
}
addsHoursToHeader();

// function creates one horizontal row for one store with store name and coockies sold per hour and total sum of cookies sold in one store
function addsStoretoTableRow(store){
  var getTable_body = document.getElementById('table_body');
  var tableRow = document.createElement('tr');
  getTable_body.appendChild(tableRow);
  var rowData = document.createElement('th');
  rowData.textContent = store.location;
  tableRow.appendChild(rowData);
  for (var i = 0; i<store.dailyCookiesPerHour.length; i++){
    rowData = document.createElement('td');
    rowData.textContent = store.dailyCookiesPerHour[i];
    tableRow.appendChild(rowData);
  }
  var total = cookiesTotal(store.dailyCookiesPerHour); //calls function cookiesTotal on list dailyCookiesPerHour and calulates day sold cookies for one store
  rowData = document.createElement('td');
  rowData.textContent = total;
  tableRow.appendChild(rowData);
}

// creates table row horizontal with cookies for all stores
function addsAllStoresToTable(){
  for (var i = 0; i < Store.allStores.length; i++){
    addsStoretoTableRow(Store.allStores[i]);
  }
}
addsAllStoresToTable();

// creates one column/vertical with total sold cookies for one hour for all store locations;
function totalForOneHour(hour){
  var total = 0;
  for (var i = 0; i < Store.allStores.length; i++){
    total += Store.allStores[i].dailyCookiesPerHour[hour];
  }
  return total;
}

// creates sum for cookies sold per hour in all locations for all hours
function totalForAllHours(){
  var getTableFooter = document.getElementById('tableFooter');
  var footerRow = document.createElement('tr');
  getTableFooter.appendChild(footerRow);
  var footerData = document.createElement('th');
  footerData.textContent = 'Total per hour';
  footerRow.appendChild(footerData);
  console.log('wywolalam się');
  for (var i = 0; i <15; i++){
    footerData = document.createElement('td');
    footerData.textContent = totalForOneHour(i); //call function totalForOneHour that creates vertical sum of cookies
    footerRow.appendChild(footerData);
  }
}

// console.log(totalForAllHours());

// Event something:
var form = document.getElementById('new_store');
// var newStoreRow = getElementById('table_body'); //could go with tfoot as well if it doesn't work

function getFormData(event){
  event.preventDefault();

  var location = event.target.location.value;
  var maxCustomNum = parseInt(event.target.max_number.value);
  var minCustomNum = event.target.min_number.value;
  var averageCookieSale = event.target.aver_cookies.value;

  var newStore = new Store(location, maxCustomNum, minCustomNum, averageCookieSale);
  addsStoretoTableRow(newStore);

  var tfoot = document.getElementById('tableFooter');
  var removeEl = tfoot.getElementsByTagName('tr')[0];
  console.log("remove " + removeEl);
  var containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
  // addsAllStoresToTable();
  totalForAllHours();
  form.reset;

  // location, maxCustomNum, minCustomNum, averageCookieSale
}

totalForAllHours();



form.addEventListener('submit', getFormData);

console.log(Store.allStores);



