'use strict';


var firstAndPike = {
  location:'1st and Pike',
  minimumCustomers:23,
  maxCustomers:65,
  averageCookieSale:6.3,
  sim:[],
  randCustomer: function () {
    return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
  },
  simCookiesPerHour: function () {
    for(var i=0; i<=14; i++){
      var simSales=[];
      simSales.push(Math.floor(this.averageCookieSale)*this.randCustomer());
      this.sim.push(simSales);
    }
  }
};
firstAndPike.simCookiesPerHour();

var pikeSales = document.getElementById('pike');
for (var p=0; p<firstAndPike.sim.length; p++){
  var pikeList = document.createElement('li');
  pikeList.textContent = firstAndPike.sim[p];
  pikeSales.appendChild(pikeList);
}



console.log('List for simCookiesPerHour at 1st and Pike: ' + firstAndPike.sim);


var seatacAirport = {
  location:'Seatac Airport',
  minimumCustomers:'3',
  maxCustomers:'24',
  averageCookieSale:'1.2',
  airportSales: [],
  randCustomer: function () {
    return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
  },
  simCookiesPerHour: function () {
    for(var i=0; i<=14; i++){
      var simSales=[];
      simSales.push(Math.floor(this.averageCookieSale)*this.randCustomer());
      this.airportSales.push(simSales);
    }
  }
};
seatacAirport.simCookiesPerHour();




var airport = document.getElementById('salesAirport');
for (var a=0; a<seatacAirport.airportSales.length; a++){
  var airportList = document.createElement('li');
  airportList.textContent = seatacAirport.airportSales[a];
  airport.appendChild(airportList);
}


console.log('List for simCookiesPerHour at Seatac Airport: ' + seatacAirport.airportSales);


// var seattleCenter = {
//   location:'Seattle Center',
//   minimumCustomers:'11',
//   maxCustomers:'38',
//   averageCookieSale:'3.7',
//   randCustomer: function () {
//     this.minimumCustomers = Math.ceil(this.minimumCustomers);
//     this.maxCustomers = Math.floor(this.maxCustomers);
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     var simSales = [];
//     for(var i=0; i<=14; i++){
//       simSales.push(parseInt(this.averageCookieSale)*this.randCustomer());
//     }
//     return simSales;
//   },
// };

// console.log('List for simCookiesPerHour at Seattle Center: ' + seattleCenter.simCookiesPerHour());


// var capitolHill = {
//   location:'Capitol Hill',
//   minimumCustomers:'20',
//   maxCustomers:'38',
//   averageCookieSale:'2.3',
//   randCustomer: function () {
//     this.minimumCustomers = Math.ceil(this.minimumCustomers);
//     this.maxCustomers = Math.floor(this.maxCustomers);
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     var simSales = [];
//     for(var i=0; i<=14; i++){
//       simSales.push(parseInt(this.averageCookieSale)*this.randCustomer());
//     }
//     return simSales;
//   },
// };

// console.log('List for simCookiesPerHour at Capitol Hill: ' + capitolHill.simCookiesPerHour());


// var alki = {
//   location:'Alki',
//   minimumCustomers:'2',
//   maxCustomers:'16',
//   averageCookieSale:'4.6',
//   randCustomer: function () {
//     this.minimumCustomers = Math.ceil(this.minimumCustomers);
//     this.maxCustomers = Math.floor(this.maxCustomers);
//     return Math.floor(Math.random()*(this.maxCustomers - this.minimumCustomers +1))+ this.minimumCustomers;
//   },
//   simCookiesPerHour: function () {
//     var simSales = [];
//     for(var i=0; i<=14; i++){
//       simSales.push(parseInt(this.averageCookieSale)*this.randCustomer());
//     }
//     return simSales;
//   },
// };

// console.log('List for simCookiesPerHour at Alki: ' + alki.simCookiesPerHour());

// var stores = ['First and Pike','Seatac Airport','Seattle Center','Capitol Hill','Alki'];
// var storeList = document.getElementById('stores');
// for(var i=0; i<stores.length;i++){
//   var storeName = document.createElement('h3');
//   storeName.textContent = stores[i];
//   storeList.appendChild(storeName);
// }

