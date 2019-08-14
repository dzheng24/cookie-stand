'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var locations=[];

function Store (name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.sales = [];

  locations.push(this);
}

new Store ('firstAndPike',23,65,6.3);
new Store ('seatacAirport',3,24,1.2);
new Store ('seattleCenter',11,38,3.7);
new Store ('capitolHill',20,38,2.3);
new Store ('alki',2,16,4.6);

Store.prototype.random = function (){
  return Math.floor(Math.random()*(this.maxCustomer - this.minCustomer +1))+ this.minCustomer;
};

Store.prototype.populateSales = function () {
  for(var i=0; i<hours.length; i++){
    var multiply = Math.floor(this.avgCustomer * this.random());
    this.sales.push(multiply);
  }
};
locations[0].populateSales();
console.log(locations[0].sales);

















// var store1 = {
//   name:'1st and Pike',
//   minimumCustomers:23,
//   maxCustomers:65,
//   averageCookieSale:6.3,
//   sim:[],
//   randCustomer: function () {
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     for(var i=0; i<=14; i++){
//       var multiply = Math.floor((this.averageCookieSale)*this.randCustomer());
//       this.sim.push(multiply);
//     }
//   }
// };
// store1.simCookiesPerHour();
// console.log((store1.sim));

// locations.push(store1);

// var store2 = {
//   name:'Seatac Airport',
//   minimumCustomers:3,
//   maxCustomers:24,
//   averageCookieSale:1.2,
//   sim:[],
//   randCustomer: function () {
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     for(var i=0; i<=14; i++){
//       var multiply = Math.floor((this.averageCookieSale)*this.randCustomer());
//       this.sim.push(multiply);
//     }
//   }
// };
// store2.simCookiesPerHour();
// console.log((store2.sim));

// locations.push(store2);

// var store3 = {
//   name:'Seattle Center',
//   minimumCustomers:11,
//   maxCustomers:38,
//   averageCookieSale:3.7,
//   sim:[],
//   randCustomer: function () {
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     for(var i=0; i<=14; i++){
//       var multiply = Math.floor((this.averageCookieSale)*this.randCustomer());
//       this.sim.push(multiply);
//     }
//   }
// };
// store3.simCookiesPerHour();
// console.log((store3.sim));

// locations.push(store3);

// var store4 = {
//   name:'Capitol Hill',
//   minimumCustomers:20,
//   maxCustomers:38,
//   averageCookieSale:2.3,
//   sim:[],
//   randCustomer: function () {
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     for(var i=0; i<=14; i++){
//       var multiply = Math.floor((this.averageCookieSale)*this.randCustomer());
//       this.sim.push(multiply);
//     }
//   }
// };
// store4.simCookiesPerHour();
// console.log((store4.sim));

// locations.push(store4);

// var store5 = {
//   name:'Alki',
//   minimumCustomers:2,
//   maxCustomers:16,
//   averageCookieSale:4.6,
//   sim:[],
//   randCustomer: function () {
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     for(var i=0; i<=14; i++){
//       var multiply = Math.floor((this.averageCookieSale)*this.randCustomer());
//       this.sim.push(multiply);
//     }
//   }
// };
// store5.simCookiesPerHour();
// console.log((store5.sim));

// locations.push(store5);


// function render(){
//   var section = document.getElementById('locations');
//   for (var i=0;i<locations.length; i++){
//     var location = locations[i];
//     var title = document.createElement('h3');
//     title.textContent = location.name;
//     section.appendChild(title);
//     var list = document.createElement('ul');
//     for (var j=0; j<hours.length; j++){
//       var projection = hours[j] + ': ' + location.sim[j];
//       var li = document.createElement ('li');
//       li.textContent = projection;
//       list.appendChild(li);
//     }
//     section.appendChild(list);
//   }
// }
// render();





