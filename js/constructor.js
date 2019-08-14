'use strict';

//global declarations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var tableContent = document.getElementById('table');
var form = document.getElementById('form');

var locations = [];
var data = [];


//constructor function
function Store (name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.sales = [];
  this.dailySales = 0;
  locations.push(this);
}

new Store ('First and Pike',23,65,6.3);
new Store ('Seatac Airport',3,24,1.2);
new Store ('Seattle Center',11,38,3.7);
new Store ('Capitol Hill',20,38,2.3);
new Store ('Alki',2,16,4.6);

//function to find the random amount of customers
Store.prototype.random = function (){
  return Math.floor(Math.random()*(this.maxCustomer - this.minCustomer +1))+ this.minCustomer;
};

//function to find simulated cookies per hour
Store.prototype.populateSales = function () {
  for(var i=0; i<hours.length; i++){
    var multiply = Math.floor(this.avgCustomer * this.random());
    this.sales.push(multiply);
  }
};

locations[0].populateSales();

//function to capture the value of our form elements on a submit event
//and prevent the form from refreshing
function formData (event){
  event.preventDefault();
  var name = event.target.store_name.value;
  var minCustomer = event.target.min_customer.value;
  var maxCustomer = event.target.max_customer.value;
  var avgCustomer = event.target.avg_customer.value;

  data.push(new Store(name, minCustomer, maxCustomer, avgCustomer));

  form.reset();
}
console.log('history of data:', data);

//adding the event listener
form.addEventListener('submit', formData);

//building the header of the table
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

//building the body of the table
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

//finding the total sales per store
Store.prototype.dailySalesCalc = function (){
  for (var i = 0; i < hours.length; i++ ){
    this.dailySales += this.sales[i];
  }
};

//calling all functions
for (var i =0 ; i < locations.length; i++){
  locations[i].populateSales();
  locations[i].dailySalesCalc();
  locations[i].renderBody();
}






















