'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var tableContent = document.getElementById('table');
var locations=[];

function Store (name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.sales = [];
  this.dailySales = 0;
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

//Table starts here
function render() {
  var tableHeader = document.getElementById('table');
  var addOnLocations = document.createElement('th');
  addOnLocations.textContent = 'Locations';
  tableHeader.appendChild(addOnLocations);
  for(var i=0; i<hours.length;i++){
    var times = document.createElement('th');
    times.textContent = hours[i];
    tableHeader.appendChild(times);
  }
  var addOnTotal = document.createElement('th');
  addOnTotal.textContent = 'Total';
  tableHeader.appendChild(addOnTotal);
}
render();

Store.prototype.renderBody = function (){
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (var i = 0; i < hours.length; i++){
    var cells = document.createElement('td');
    cells.textContent = this.sales[i];
    tr.appendChild(cells);
  }
  td = document.createElement('td');
  td.textContent = this.dailySales;
  tr.appendChild(td);
  tableContent.appendChild(tr);
};

Store.prototype.dailySalesCalc = function (){
  for (var i = 0; i < hours.length; i++ ){
    this.dailySales += this.sales[i];
  }
};

for (var i =0 ; i < locations.length; i++){
  locations[i].populateSales();
  locations[i].dailySalesCalc();
  locations[i].renderBody();
}
  // tableContent.appendChild(cells);





















